import ui1 from "@/assets/resurface-ui-1.png";
import ui2 from "@/assets/resurface-ui-2.png";

const PreviewSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gradient-start/30 to-background" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          See it in action
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          A clean, minimal popup that stays out of your way until you need it.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="animate-float rounded-2xl shadow-2xl overflow-hidden border border-border bg-card">
            <img src={ui1} alt="Resurface search interface" className="w-80" />
          </div>
          <div className="animate-float rounded-2xl shadow-2xl overflow-hidden border border-border bg-card" style={{ animationDelay: "1.5s" }}>
            <img src={ui2} alt="Resurface with page detected" className="w-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
