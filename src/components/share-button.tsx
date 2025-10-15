import { Button } from "@/components/ui/button";
import { ShareBold } from "@/components/ui/icons";

export const ShareButton = (props: { title?: string }) => {
  async function handleShare() {
    if (navigator.share) {
      await navigator.share({
        title: props.title,
        url: window.location.href,
      });
    } else {
      // Fallback solution for browsers that do not support Web Share API
      const textToCopy = `${props.title} ${window.location.href}`;

      try {
        await navigator.clipboard.writeText(textToCopy);
        alert("Link copied to clipboard");
      } catch {
        // Fallback for browsers that don't support Clipboard API
        const textArea = document.createElement("textarea");

        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Link copied to clipboard");
      }
    }
  }

  return (
    <Button variant="secondary" onClick={() => void handleShare()}>
      <span className="w-full flex items-center gap-1">
        <ShareBold size={24} />
        Share
      </span>
    </Button>
  );
};
