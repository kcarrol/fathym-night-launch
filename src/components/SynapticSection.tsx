import { Brain, Shield, GitPullRequest, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: Shield,
    title: "Governed Operation",
    description: "Operate under the same system rules as everything else",
  },
  {
    icon: Network,
    title: "Explicit Permissions",
    description: "Access data and capabilities through explicit permissions",
  },
  {
    icon: GitPullRequest,
    title: "Governed Review",
    description: "Propose changes that flow back through governed review paths",
  },
];

const SynapticSection = () => {
  return (
    <section id="synaptic" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-neon-magenta/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 border-glow-magenta rounded-3xl opacity-30" />
              <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center animate-float">
                    <Brain className="w-12 h-12 text-secondary" />
                  </div>
                </div>
                
                <div className="grid gap-4">
                  {capabilities.map((cap) => (
                    <div key={cap.title} className="flex items-start gap-4 p-4 rounded-lg bg-muted/20 border border-border/50">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <cap.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{cap.title}</h4>
                        <p className="text-sm text-muted-foreground">{cap.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-secondary text-sm font-medium tracking-wider uppercase mb-4 block">
              Agentic AI Framework
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Synaptic
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              AI doesn't just generate code. It executes workflows, reasons over system state, and proposes change.
            </p>
            <p className="text-muted-foreground mb-8">
              Synaptic is Fathym's agentic AI orchestration framework and runtime, designed to operate 
              inside the Everything as Code model. By integrating with modern AI frameworks and the 
              Model Context Protocol (MCP), Synaptic turns AI from an external automation into a 
              first-class, governed participant in the system.
            </p>
            <Button variant="secondary-neon" size="lg" asChild>
              <Link to="/synaptic">Learn About Synaptic</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SynapticSection;
