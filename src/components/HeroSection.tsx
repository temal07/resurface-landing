import resurfaceLogo from "@/assets/resurface-logo.png";
import { Chrome } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-start via-background to-gradient-end" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-start rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-end rounded-full blur-3xl opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="animate-fade-up mb-8">
          <img src={resurfaceLogo} alt="Resurface logo" className="w-20 h-20 mx-auto rounded-2xl shadow-lg" />
        </div>

        <h1 className="animate-fade-up text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
          Never lose a page
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            again.
          </span>
        </h1>

        <p className="animate-fade-up mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" style={{ animationDelay: "0.15s" }}>
          Resurface helps you find pages you've visited before. Inspect any page you're on and Resurface surfaces pages relevant to what you're on. Or type in a topic to rediscover pages you forgot existed.
        </p>

        <div className="animate-fade-up mt-10 flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.3s" }}>
          <a
            href="#"
            aria-disabled="true"
            tabIndex={-1}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/25 opacity-60 cursor-not-allowed pointer-events-none"
          >
            <Chrome className="w-5 h-5" />
            Add to Chrome — Coming Soon...
          </a>
          <a
            href="https://tally.so/r/0QJDZA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-card/60 backdrop-blur-sm text-foreground font-medium text-lg hover:bg-card hover:-translate-y-0.5 transition-all duration-200"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
