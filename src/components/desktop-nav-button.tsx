import {
	ClerkLoaded,
	ClerkLoading,
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from "@clerk/clerk-react";
import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { BookMarkFilledIcon, SearchFilledIcon } from "@/components/ui/icons";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "./theme-switch";

const DesktopNavButton = ({
	href,
	label,
	icon,
	className,
}: {
	href: string;
	label: string;
	icon: React.ReactNode;
	className?: string;
}) => {
	const location = useLocation();
	const isActive = location.pathname === href;
	return (
		<Link
			to={href}
			aria-label={label}
			className="cursor-pointer rounded-[calc(var(--radius-md)+3px)] pressable"
		>
			<Button
				variant={isActive ? "secondary" : "outline"}
				size="icon"
				className={cn(className, "rounded-[calc(var(--radius-md)+3px)]")}
				aria-label={label}
			>
				{icon}
			</Button>
		</Link>
	);
};

DesktopNavButton.displayName = "DesktopNavButton";

const DesktopNavButtons = () => {
	return (
		<>
			<DesktopNavButton
				href="/watchlist"
				label="Watchlist"
				icon={<BookMarkFilledIcon />}
			/>
			<DesktopNavButton
				href="/search"
				label="Search"
				icon={<SearchFilledIcon />}
			/>
			<ThemeSwitch />
			<ClerkLoading>
				<Skeleton className="size-10 rounded-full" />
			</ClerkLoading>
			<ClerkLoaded>
				<SignedOut>
					<SignInButton mode="modal">
						<Button
							variant="outline"
							size="icon"
							className="size-10 rounded-full"
							aria-label="Sign in"
						>
							<svg
								className="size-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<title>Sign in</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
								/>
							</svg>
						</Button>
					</SignInButton>
				</SignedOut>
				<SignedIn>
					<UserButton
						appearance={{
							elements: {
								avatarBox: "size-10",
								userButtonTrigger: "size-10 rounded-full",
							},
						}}
					/>
				</SignedIn>
			</ClerkLoaded>
		</>
	);
};

DesktopNavButtons.displayName = "DesktopNavButtons";

export { DesktopNavButtons };
