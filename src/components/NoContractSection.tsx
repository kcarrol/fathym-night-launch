import { Cpu, Cloud, GitBranch, Bot, FileQuestion, Server, KeyRound, History } from "lucide-react";

const tools = [
  { icon: Cpu, label: "Code generation frameworks and assistants" },
  { icon: Cloud, label: "Cloud platforms and infrastructure tooling" },
  { icon: GitBranch, label: "CI/CD pipelines and deployment automation" },
  { icon: Bot, label: "Agent frameworks and AI orchestration tools" },
];

const missingPieces = [
  { icon: FileQuestion, label: "What the system consists of" },
  { icon: Server, label: "Where it runs" },
  { icon: KeyRound, label: "How identity, data, and environments are scoped" },
  { icon: History, label: "How change is allowed to happen over time" },
];

const NoContractSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-magenta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-cyan/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
            There is no{" "}
            <span className="text-gradient-magenta">system-level contract</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Modern software stacks are made up of powerful tools:
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {tools.map((tool, index) => (
            <div 
              key={tool.label}
              className="group relative p-5 rounded-lg border border-border bg-card/30 backdrop-blur-sm hover:border-neon-cyan/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center mb-3 group-hover:bg-neon-cyan/20 transition-colors">
                <tool.icon className="w-5 h-5 text-neon-cyan" />
              </div>
              <p className="text-sm text-foreground">{tool.label}</p>
            </div>
          ))}
        </div>

        {/* Dividing Statement */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="relative inline-block">
            <div className="absolute inset-0 border-glow-magenta rounded-xl opacity-30" />
            <p className="relative text-xl md:text-2xl font-display font-semibold text-foreground px-8 py-6 rounded-xl border border-neon-magenta/30 bg-card/50 backdrop-blur-sm">
              Each solves part of the problem.{" "}
              <span className="text-neon-magenta">None define the system as a whole.</span>
            </p>
          </div>
        </div>

        {/* Missing Contract */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg text-muted-foreground mb-8">
            There is no shared, machine-readable contract that explains:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {missingPieces.map((piece, index) => (
              <div 
                key={piece.label}
                className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-muted/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-8 h-8 rounded-full bg-neon-lime/10 flex items-center justify-center flex-shrink-0">
                  <piece.icon className="w-4 h-4 text-neon-lime" />
                </div>
                <span className="text-foreground">{piece.label}</span>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-neon-magenta/5 to-neon-lime/5 rounded-xl" />
            <div className="relative p-8 rounded-xl border border-border bg-card/30 backdrop-blur-sm text-center">
              <p className="text-lg md:text-xl text-foreground">
                Without that contract, AI can generate code — but it{" "}
                <span className="text-neon-magenta font-semibold">cannot fully understand and reason about</span>{" "}
                the system it is modifying.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoContractSection;
