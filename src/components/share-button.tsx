import { Button } from "@/components/ui/button";
import { ShareBold } from "@/components/ui/icons";

type ShareButtonProps = {
	title?: string;
	hideLabelOnMobile?: boolean;
};

export const ShareButton = ({
	title,
	hideLabelOnMobile = false,
}: ShareButtonProps) => {
	async function handleShare() {
		const currentUrl = window.location.href;
		const textToCopy = `${title ?? ""} ${currentUrl}`.trim();

		if (navigator.share) {
			await navigator.share({
				title,
				url: currentUrl,
			});
			return;
		}

		try {
			await navigator.clipboard.writeText(textToCopy);
			alert("Link copied to clipboard");
		} catch {
			const textArea = document.createElement("textarea");
			textArea.value = textToCopy;
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand("copy");
			document.body.removeChild(textArea);
			alert("Link copied to clipboard");
		}
	}

	return (
		<Button variant="secondary" onClick={() => void handleShare()}>
			<span className="flex w-full items-center gap-1">
				<ShareBold size={24} />
				<span className={hideLabelOnMobile ? "hidden sm:inline" : "inline"}>
					Share
				</span>
			</span>
		</Button>
	);
};
