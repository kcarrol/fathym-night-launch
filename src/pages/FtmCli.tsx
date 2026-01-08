import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Terminal, 
  Shield, 
  FileCheck, 
  History, 
  FileCode, 
  Search, 
  GitBranch, 
  Bot, 
  User, 
  Cpu,
  Layers,
  Building2,
  Rocket,
  ArrowRight
} from "lucide-react";

const FtmCli = () => {
  const cliFeatures = [
    {
      icon: FileCode,
      title: "Define system intent",
      description: "Describe applications, runtimes, environments, identity, and AI workflows as a single declarative system model."
    },
    {
      icon: Search,
      title: "Validate and analyze change",
      description: "Understand what a proposed change will affect before it is applied — across runtimes, tenants, and environments."
    },
    {
      icon: GitBranch,
      title: "Stage and gate evolution",
      description: "Move systems through explicit lifecycle phases where human approval is required and enforced."
    },
    {
      icon: Bot,
      title: "Collaborate with AI safely",
      description: "Allow AI to propose system changes without granting it unchecked authority."
    },
    {
      icon: History,
      title: "Maintain provenance and auditability",
      description: "Track who changed what, when, why — whether human or AI initiated."
    }
  ];

  const workflowSteps = [
    { step: 1, title: "Establish current state" },
    { step: 2, title: "Analyze impact" },
    { step: 3, title: "Design and propose change" },
    { step: 4, title: "Require approval" },
    { step: 5, title: "Apply deterministically" }
  ];

  const audiences = [
    {
      icon: Layers,
      title: "Platform teams",
      description: "Define reference architectures and enforce consistency without blocking innovation."
    },
    {
      icon: Cpu,
      title: "Architects and engineers",
      description: "Understand and evolve complex systems without tribal knowledge."
    },
    {
      icon: Rocket,
      title: "AI-forward teams",
      description: "Let agents contribute meaningfully without risking integrity."
    },
    {
      icon: Building2,
      title: "Enterprises",
      description: "Adopt AI at scale with confidence instead of caution tape."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
              Command Interface
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
              FTM <span className="text-gradient-lime">CLI</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              The command interface for stewarding AI-built systems
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto mb-8">
              AI accelerates how software is created. The FTM CLI governs how software is changed.
            </p>
            <div className="flex items-center justify-center">
              <Terminal className="w-16 h-16 text-accent glow-lime" />
            </div>
          </div>
        </div>
      </section>

      {/* Primary Interface Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              FTM is the primary human–AI interface to the Everything as Code operating model. It is where system intent is defined, changes are proposed, reviewed, and applied, and where AI operates under explicit control.
            </p>
            <div className="p-6 rounded-xl border border-border bg-card/30">
              <p className="text-muted-foreground italic">
                "This is not a deployment script or a thin wrapper around cloud APIs. It is the control surface for assembling and evolving real systems."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why CLI Still Matters */}
      <section className="py-24 bg-card/30 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Why a CLI still matters in the age of <span className="text-gradient-cyan">AI</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground">
                  Modern AI tools can generate applications, services, and workflows in minutes. What they cannot do safely is decide <em>how a system should change</em>.
                </p>
              </div>
              
              <div className="p-8 rounded-xl border border-border bg-background/50 border-glow">
                <h3 className="text-xl font-display font-semibold mb-6 text-primary">Production software still requires:</h3>
                <div className="space-y-4">
                  {[
                    { icon: Terminal, text: "Explicit intent" },
                    { icon: Shield, text: "Deterministic guarantees" },
                    { icon: FileCheck, text: "Reviewable change" },
                    { icon: History, text: "Traceability over time" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What FTM CLI Does */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              What the FTM CLI <span className="text-gradient-magenta">does</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              FTM allows teams to author, inspect, evolve, and govern Everything as Code systems.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cliFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl border border-border bg-card/30 hover:border-secondary/50 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-secondary/10 w-fit mb-4 group-hover:bg-secondary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Not a DevOps Tool */}
      <section className="py-24 bg-card/30 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Not a DevOps tool. Not a chatbot.
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  FTM does not replace:
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {["Cloud CLIs", "CI/CD pipelines", "IDEs", "AI copilots"].map((tool, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border/50 bg-background/30">
                      <span className="text-muted-foreground">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-8 rounded-xl border border-accent/30 bg-accent/5">
                <p className="text-xl font-display font-semibold text-accent">
                  It sits above them, enforcing a system-level contract they all operate within.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              How it <span className="text-gradient-cyan">works</span>
            </h2>
            <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
              FTM operates directly on Everything as Code definitions. Every command reads, validates, and writes against the same declarative system model that drives execution.
            </p>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Changes flow through explicit stages:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/30">
                    <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </span>
                    <span className="text-sm font-medium">{step.title}</span>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
                  )}
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
                <p className="text-primary font-medium">
                  AI agents interact through the same workflow — never bypassing it.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-secondary/30 bg-secondary/5">
                <p className="text-secondary font-medium">
                  The CLI is not just a trigger. It is the enforcement mechanism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Humans and AI */}
      <section className="py-24 bg-card/30 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              Built for <span className="text-gradient-magenta">humans</span> and <span className="text-gradient-cyan">AI</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-xl border border-secondary/30 bg-background/50 border-glow-magenta">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-8 h-8 text-secondary" />
                  <h3 className="text-xl font-display font-semibold">Humans use it to:</h3>
                </div>
                <ul className="space-y-3">
                  {["Define intent", "Approve change", "Understand consequences"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 rounded-xl border border-primary/30 bg-background/50 border-glow">
                <div className="flex items-center gap-3 mb-6">
                  <Bot className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-display font-semibold">AI uses it to:</h3>
                </div>
                <ul className="space-y-3">
                  {["Read full system context", "Generate compliant proposals", "Operate within scoped authority"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="text-center p-6 rounded-xl border border-border bg-background/30">
              <p className="text-lg text-muted-foreground">Both operate against the same system model.</p>
            </div>
          </div>
        </div>
      </section>


      {/* What This Enables Next */}
      <section className="py-24 bg-card/30 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              What this enables <span className="text-gradient-magenta">next</span>
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Because systems are defined declaratively and are machine-readable:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                "AI can assemble new systems from scratch",
                "AI can evolve existing systems safely",
                "Visual and conversational interfaces become possible without breaking governance"
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-xl border border-border bg-background/50 hover:border-primary/50 transition-colors">
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="p-6 rounded-xl border border-accent/30 bg-accent/5 inline-block">
              <p className="text-accent font-display font-semibold">
                FTM is not the end state. It is the foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Who this is <span className="text-gradient-cyan">for</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {audiences.map((audience, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 transition-colors group text-center"
                >
                  <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <audience.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-3">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Part of the Operating Model */}
      <section className="py-24 bg-card/30 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              FTM CLI is part of the <span className="text-gradient-lime">operating model</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              FTM is not a standalone product. It is a core surface of the Everything as Code operating model.
            </p>
            <p className="text-muted-foreground mb-12">
              Together with EaC and Synaptic, it defines how software systems are assembled, governed, and evolved in the age of AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/everything-as-code">
                <Button variant="neon" size="lg" className="gap-2">
                  Explore Everything as Code
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/synaptic">
                <Button variant="outline" size="lg" className="gap-2">
                  Learn about Synaptic
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FtmCli;
