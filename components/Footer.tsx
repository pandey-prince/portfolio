import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span className="ft">
          Design &amp; Developed by <b>{siteConfig.name}</b>
        </span>
        <span className="ft">© {new Date().getFullYear()} · All rights reserved.</span>
      </div>
    </footer>
  );
}
