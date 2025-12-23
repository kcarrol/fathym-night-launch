import { Check } from "lucide-react";

const features = [
  "System structure is explicit, not inferred",
  "Configuration is typed, validated, and intentional",
  "Environments are derived, not duplicated",
  "Governance is embedded, not bolted on",
];

const SolutionSection = () => {
  return (
    <section id="eac" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-neon-cyan/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Introducing
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Everything as Code
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A unified, declarative model for defining entire software systems — 
              applications, runtimes, identity, environments, data access, and AI workflows — 
              as a single governed system.
            </p>
            <p className="text-muted-foreground mb-8">
              EaC provides a shared operating model that both humans and AI can understand, 
              reason about, and modify — whether assembling a new system or evolving an existing one.
            </p>

            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 border-glow-cyan rounded-2xl opacity-50" />
            <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8">
              <h3 className="font-display text-xl font-semibold mb-6 text-center">
                A System Model, Not Just Configuration
              </h3>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-neon-cyan" />
                    <span className="font-medium">Rich Context for AI</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    Not just what to write, but where it belongs, how it runs, and what constraints apply.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-neon-magenta" />
                    <span className="font-medium">Humans + AI Together</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    AI becomes far more effective operating inside a coherent system model.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-neon-lime" />
                    <span className="font-medium">Structural Governance</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    Governance becomes structural, not procedural.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
