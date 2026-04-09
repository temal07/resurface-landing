import { Search, Eye, Clock } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Page Search",
    description: "Type what you're looking for and Resurface suggests pages from your history that match your topic.",
  },
  {
    icon: Eye,
    title: "Inspect Current Page",
    description: "Click inspect to instantly see details about the page you're on — title, URL, and more at a glance.",
  },
  {
    icon: Clock,
    title: "You've Been Here Before",
    description: "Resurface remembers the pages you've visited and surfaces them when you need them most.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          How it works
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Three simple superpowers for your browser.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
