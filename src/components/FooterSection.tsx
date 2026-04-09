import resurfaceLogo from "@/assets/resurface-logo.png";

const FooterSection = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={resurfaceLogo} alt="Resurface" className="w-8 h-8 rounded-lg" />
        <span className="font-semibold text-foreground">Resurface</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Resurface. All rights reserved.
      </p>
    </div>
  </footer>
);

export default FooterSection;
