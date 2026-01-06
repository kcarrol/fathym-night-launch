import { Box, Cpu, GitBranch, Workflow } from "lucide-react";
const runtimes = [{
  name: "Web",
  icon: Box,
  color: "neon-cyan"
}, {
  name: "API",
  icon: Cpu,
  color: "neon-magenta"
}, {
  name: "Workflow",
  icon: Workflow,
  color: "neon-lime"
}, {
  name: "AI",
  icon: GitBranch,
  color: "neon-yellow"
}];
const RuntimeSection = () => {
  return <section className="py-32 relative overflow-hidden border-y border-border/50">
      <div className="absolute inset-0 gradient-dark" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">Modular and extensible
Software Composition<br />
            <span className="text-gradient-magenta">software composition</span>
          </h2>
          <p className="text-lg text-muted-foreground">EaC separates system definition from system execution. Execution happens through modular, composable runtimes built from shared processors, such as:</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {runtimes.map(runtime => <div key={runtime.name} className="group relative p-8 rounded-xl border border-border bg-card/20 backdrop-blur-sm text-center hover:border-primary/50 transition-all duration-300">
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-${runtime.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <runtime.icon className={`w-8 h-8 text-${runtime.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold">{runtime.name}</h3>
            </div>)}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-primary mb-2">Assembled</div>
            <p className="text-sm text-muted-foreground">Runtimes are composed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-secondary mb-2">Reused</div>
            <p className="text-sm text-muted-foreground">Processors are shared across systems</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-accent mb-2">Portable</div>
            <p className="text-sm text-muted-foreground">No capability locked to one path</p>
          </div>
        </div>
      </div>
    </section>;
};
export default RuntimeSection;