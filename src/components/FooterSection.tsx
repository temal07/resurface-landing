import resurfaceLogo from "@/assets/resurface-logo.png";
import { Link } from "react-router-dom";

const FooterSection = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={resurfaceLogo} alt="Resurface" className="w-8 h-8 rounded-lg" />
        <span className="font-semibold text-foreground">Resurface</span>
      </div>
      <div className="flex gap-3">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Resurface. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          <Link to="/privacy">
            Privacy
          </Link>
      </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
