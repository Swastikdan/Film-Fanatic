import { useCallback, useRef, useState } from "react";
import {
	useWatchlist,
	useWatchlistStore,
	type WatchlistItem,
} from "@/hooks/usewatchlist";

type ImportError = {
	message: string;
	invalidItems?: number;
};

export const useWatchlistImportExport = () => {
	const [importLoading, setImportLoading] = useState(false);
	const [exportLoading, setExportLoading] = useState(false);
	const [error, setError] = useState<ImportError | null>(null);
	const { watchlist, loading } = useWatchlist();
	const setWatchlist = useWatchlistStore((state) => state.setWatchlist);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const isValidWatchlistItem = useCallback(
		(item: unknown): item is Omit<WatchlistItem, "updated_at"> => {
			if (typeof item !== "object" || item === null) return false;

			const obj = item as Record<string, unknown>;
			const hasRequiredFields =
				typeof obj.title === "string" &&
				typeof obj.rating === "number" &&
				typeof obj.image === "string" &&
				typeof obj.external_id === "string" &&
				(obj.type === "tv" || obj.type === "movie") &&
				typeof obj.release_date === "string";

			const isValidRating =
				(obj.rating as number) >= 0 && (obj.rating as number) <= 10;
			const isValidTitle = (obj.title as string).trim().length > 0;

			return hasRequiredFields && isValidRating && isValidTitle;
		},
		[],
	);

	const exportWatchlist = useCallback(async () => {
		if (!watchlist || watchlist.length === 0) return;

		try {
			setExportLoading(true);
			setError(null);

			const json = JSON.stringify(watchlist, null, 2);
			const blob = new Blob([json], { type: "application/json" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			const timestamp = new Date().toISOString().split("T")[0];

			link.href = url;
			link.download = `watchlist-${timestamp}.json`;
			document.body.appendChild(link);
			link.click();

			setTimeout(() => {
				document.body.removeChild(link);
				URL.revokeObjectURL(url);
			}, 100);
		} catch (err) {
			setError({
				message: "Failed to export watchlist. Please try again.",
			});
			console.error("Export error:", err);
		} finally {
			setExportLoading(false);
		}
	}, [watchlist]);

	const importWatchlist = useCallback(
		async (event: React.ChangeEvent<HTMLInputElement>) => {
			const file = event.target.files?.[0];
			if (!file) return;

			if (!file.name.endsWith(".json")) {
				setError({ message: "Please select a valid JSON file." });
				return;
			}

			const MAX_FILE_SIZE = 10 * 1024 * 1024;
			if (file.size > MAX_FILE_SIZE) {
				setError({ message: "File size exceeds 10MB limit." });
				return;
			}

			setImportLoading(true);
			setError(null);

			const reader = new FileReader();

			reader.onload = async (e) => {
				try {
					const content = e.target?.result as string;
					if (!content || content.trim().length === 0) {
						throw new Error("File is empty.");
					}

					const importedData = JSON.parse(content) as unknown;

					if (!Array.isArray(importedData)) {
						throw new Error("Invalid file format: Expected a JSON array.");
					}

					if (importedData.length === 0) {
						throw new Error("Watchlist is empty.");
					}

					let invalidItemCount = 0;
					const validatedList: WatchlistItem[] = [];

					for (const item of importedData) {
						if (isValidWatchlistItem(item)) {
							validatedList.push({
								title: item.title,
								type: item.type,
								external_id: item.external_id,
								image: item.image,
								rating: item.rating,
								release_date: item.release_date,
								updated_at: Date.now(),
							});
						} else {
							invalidItemCount++;
						}
					}

					if (validatedList.length === 0) {
						throw new Error("No valid items found in the watchlist file.");
					}

					setWatchlist(validatedList);

					if (invalidItemCount > 0) {
						setError({
							message: `Successfully imported ${validatedList.length} items. ${invalidItemCount} invalid items were skipped.`,
							invalidItems: invalidItemCount,
						});
					}
				} catch (err) {
					const errorMessage =
						err instanceof Error ? err.message : "Unknown error occurred";
					setError({
						message: `Import failed: ${errorMessage}`,
					});
					console.error("Import error:", err);
				} finally {
					setImportLoading(false);
					if (fileInputRef.current) {
						fileInputRef.current.value = "";
					}
				}
			};

			reader.onerror = () => {
				setError({ message: "Error reading file. Please try again." });
				setImportLoading(false);
				if (fileInputRef.current) {
					fileInputRef.current.value = "";
				}
			};

			reader.readAsText(file);
		},
		[isValidWatchlistItem, setWatchlist],
	);

	const handleImportClick = useCallback(() => {
		setError(null);
		fileInputRef.current?.click();
	}, []);

	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent<HTMLButtonElement>) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				handleImportClick();
			}
		},
		[handleImportClick],
	);

	return {
		// State
		importLoading,
		exportLoading,
		error,
		loading,
		watchlist,
		fileInputRef,

		// Actions
		exportWatchlist,
		importWatchlist,
		handleImportClick,
		handleKeyDown,
		setError,
	};
};
