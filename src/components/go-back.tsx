import { useNavigate, useRouter } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "@/components/ui/icons";

type GoBackProps = {
	title?: string;
	link?: string;
	className?: string;
	hideLabelOnMobile?: boolean;
};

export const GoBack = ({
	title,
	link,
	className,
	hideLabelOnMobile = false,
}: GoBackProps) => {
	const navigate = useNavigate();
	const router = useRouter();

	function goBack() {
		if (link) {
			navigate({ to: link });
			return;
		}

		router.history.back();
	}

	return (
		<Button className={className} variant="secondary" onClick={goBack}>
			<span className="flex w-full items-center gap-1">
				<ArrowLeft size={24} />
				<span className={hideLabelOnMobile ? "hidden sm:inline" : "inline"}>
					{title ?? "Go Back"}
				</span>
			</span>
		</Button>
	);
};
