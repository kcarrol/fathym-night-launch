import { AlertTriangle, Layers, Zap, Users } from "lucide-react";
const problems = [{
  icon: Layers,
  title: "Fragmented Configuration"
}, {
  icon: AlertTriangle,
  title: "Environment-Specific Scripts"
}, {
  icon: Zap,
  title: "Loosely Coordinated Tooling"
}, {
  icon: Users,
  title: "Implicit Assumptions"
}];
const ProblemSection = () => {
  return <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
            AI changed how software is created.
            <br />
            <span className="text-primary">But not how systems are built.</span>
          </h2>
          <p className="text-lg text-muted-foreground">AI tools can generate code, APIs, workflows, and integrations from prompts.

Some operate as copilots for developers. Some act as agents performing scoped development tasks. Some provide conversational interfaces that assemble working prototypes from scratch.

<br /><br />All of them increase creation speed. But production systems are still assembled through fragmented processes.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => <div key={problem.title} className="group relative p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{problem.title}</h3>
              
            </div>)}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            The result is a growing gap between{" "}
            <span className="text-foreground font-medium">how fast software can be created</span>{" "}
            and how safely it can be understood, deployed, and evolved.
          </p>
        </div>
      </div>
    </section>;
};
export default ProblemSection;