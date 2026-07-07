import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="mx-auto flex w-[min(1120px,calc(100%-48px))] flex-col items-center justify-between gap-2 border-t border-line py-8 text-sm text-muted sm:flex-row">
      <p>Designed &amp; built by {siteConfig.name}.</p>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
}
