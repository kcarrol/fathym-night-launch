import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Brain, Shield, Workflow, Server, Lock, Globe, Layers, CheckCircle, ArrowRight, Zap, Eye, GitBranch } from "lucide-react";
const gapItems = ["Chaining prompts and tools", "Coordinating steps and state", "Managing agent flows"];
const structuralGaps = ["AI workflows lack system-level context", "Execution boundaries are implicit", "Identity and tenancy are bolted on", "Deployment, isolation, and portability are delegated to infrastructure", "Reuse across systems is limited"];
const synapticProvides = [{
  icon: Workflow,
  title: "Declarative workflows",
  description: "A declarative way to define AI workflows that can be validated, composed, and evolved."
}, {
  icon: Brain,
  title: "Agentic runtime",
  description: "A runtime for executing agentic logic within explicit system boundaries."
}, {
  icon: Layers,
  title: "Composable primitives",
  description: "Reusable execution primitives shared across runtimes and systems."
}, {
  icon: Shield,
  title: "Built-in governance",
  description: "Governed execution with explicit capabilities and constraints."
}, {
  icon: Lock,
  title: "System-aware execution",
  description: "Identity, tenancy, and access control are intrinsic to execution — not layered on."
}, {
  icon: Globe,
  title: "Portable by design",
  description: "Designed for cloud, edge, and regulated environments."
}];
const frameworkAdds = ["Explicit execution boundaries", "Runtime composition and execution context", "Identity and tenancy scoping", "Policy enforcement", "System-level portability"];
const agentRules = ["Operate only within declared capabilities", "Access data through governed interfaces", "Execute under explicit identity and tenant scopes", "Produce auditable actions, decisions, and outcomes"];
const mcpFeatures = ["Available actions are explicitly declared", "Context is scoped and governed", "AI tools can discover and use capabilities safely"];
const portabilityEnvironments = [{
  icon: Server,
  text: "In cloud environments"
}, {
  icon: Globe,
  text: "At the edge"
}, {
  icon: Layers,
  text: "Alongside application runtimes"
}, {
  icon: Shield,
  text: "In regulated systems"
}];
const executionSteps = ["Everything as Code defines system intent", "Stewardship validates intent, policy, and scope, then resolves the execution graph", "Synaptic workflows are composed from declared processors", "AI agents execute within governed runtime boundaries", "Outputs and proposed changes flow back through stewardship"];
const whenToUse = ["AI is part of the architecture, not an experiment", "Workflows must be reusable and evolvable", "Access control and auditability matter", "Multi-tenant isolation is required", "AI interacts with real data and real services"];
const Synaptic = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-secondary text-sm font-medium tracking-wider uppercase mb-4 block">
              AI Execution Runtime
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Synaptic
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Governed AI execution as a runtime, not an experiment.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl">AI is not limited to generating code. It can execute workflows, reason over live data, make decisions, and propose changes to running systems. The challenge is no longer enabling AI execution. The challenge is enabling AI execution as part of a system. Synaptic exists to make AI execution composable, governed, and system-aware.</p>
          </div>
        </div>
      </section>

      {/* Gap Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                The Challenge
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                The gap in today's agentic AI
              </h2>
              <p className="text-muted-foreground mb-6">
                Most agent frameworks focus on orchestration logic:
              </p>
              <ul className="space-y-3 mb-8">
                {gapItems.map((item, index) => <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    {item}
                  </li>)}
              </ul>
              <p className="text-muted-foreground">
                They are powerful — but they operate largely outside the systems they affect. 
                Synaptic addresses this by treating AI execution as a first-class runtime concern, 
                not an application feature.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 border-glow rounded-3xl opacity-30" />
              <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8">
                <h3 className="font-display text-xl font-semibold mb-6 text-foreground">
                  This creates a structural gap:
                </h3>
                <div className="space-y-4">
                  {structuralGaps.map((item, index) => <div key={index} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Synaptic Is Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-secondary text-sm font-medium tracking-wider uppercase mb-4 block">
              The Solution
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              What Synaptic is
            </h2>
            <p className="text-lg text-muted-foreground">
              Synaptic is Fathym's AI execution runtime, built on the Everything as Code model. 
              It provides orchestration primitives — but treats execution context, identity, and 
              governance as intrinsic to runtime behavior.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {synapticProvides.map((item, index) => <div key={index} className="p-6 rounded-xl border border-border bg-background/50 hover:border-secondary/50 transition-colors">
                <item.icon className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Framework Compatibility
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Integration with existing AI frameworks
              </h2>
              <p className="text-muted-foreground mb-6">
                Synaptic does not replace agent frameworks like LangChain or LangGraph. It constrains 
                and contextualizes them inside real systems. These frameworks intentionally focus on 
                agent behavior and orchestration.
              </p>
              <p className="text-muted-foreground">
                This separation allows teams to adopt best-in-class AI tooling while maintaining control.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 border-glow-magenta rounded-3xl opacity-30" />
              <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8">
                <h3 className="font-display text-xl font-semibold mb-6 text-foreground">
                  Synaptic adds what they intentionally do not:
                </h3>
                <div className="space-y-4">
                  {frameworkAdds.map((item, index) => <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary text-sm font-medium tracking-wider uppercase mb-4 block">
              Security by Design
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Governance as a property of execution
            </h2>
            <p className="text-lg text-muted-foreground">
              In Synaptic, governance is not layered on top of AI execution. It is a property of the 
              runtime itself. Execution without governance is impossible by design.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-8">
              <h3 className="font-display text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                <Shield className="w-6 h-6 text-secondary" />
                AI agents:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {agentRules.map((item, index) => <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>)}
              </div>
              <p className="text-center text-foreground mt-6 font-medium">
                AI cannot bypass the system model. Execution is safe because structure is explicit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MCP Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 border-glow rounded-3xl opacity-30" />
                <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8">
                  <h3 className="font-display text-xl font-semibold mb-6 text-foreground">
                    Through MCP:
                  </h3>
                  <div className="space-y-4">
                    {mcpFeatures.map((item, index) => <div key={index} className="flex items-start gap-3">
                        <Eye className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>)}
                  </div>
                  <p className="text-sm text-muted-foreground mt-6 border-t border-border pt-6">
                    MCP provides context — Synaptic remains the execution authority.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
                Context Protocol
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Model Context Protocol (MCP) integration
              </h2>
              <p className="text-muted-foreground">
                Synaptic integrates with the Model Context Protocol (MCP) to expose system capabilities 
                to AI in a structured way. This allows Synaptic-powered systems to work with a broad 
                ecosystem of AI tools without tight coupling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portability Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Deployment Flexibility
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Portable by design
            </h2>
            <p className="text-lg text-muted-foreground">
              Synaptic workflows are not tied to a specific environment. Portability emerges from 
              Synaptic's declarative execution model, not from environment-specific tooling or 
              deployment scripts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portabilityEnvironments.map((item, index) => <div key={index} className="p-6 rounded-xl border border-border bg-background/50 text-center hover:border-primary/50 transition-colors">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <span className="text-foreground">{item.text}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* How It Executes Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-secondary text-sm font-medium tracking-wider uppercase mb-4 block">
              Execution Flow
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              How Synaptic executes
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {executionSteps.map((step, index) => <div key={index} className="flex items-center gap-6 p-6 rounded-xl border border-border bg-card/50">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-xl font-bold text-secondary">{index + 1}</span>
                  </div>
                  <span className="text-foreground text-lg">{step}</span>
                </div>)}
            </div>
            
            <p className="text-center text-muted-foreground mt-8">
              This ensures AI execution remains predictable, auditable, and controllable.
            </p>
          </div>
        </div>
      </section>

      {/* When to Use Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
                Use Cases
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                When to use Synaptic
              </h2>
              <p className="text-lg text-muted-foreground">
                Synaptic is designed for systems where:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {whenToUse.map((item, index) => <div key={index} className="flex items-center gap-4 p-6 rounded-xl border border-secondary/30 bg-secondary/5">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>)}
            </div>
            
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Synaptic is particularly suited for enterprise, operational, and regulated environments.
              </p>
              <div className="inline-block p-6 rounded-xl border border-accent/30 bg-accent/5">
                <p className="text-xl font-display font-semibold text-foreground">
                  If AI is allowed to act, <span className="text-accent">Synaptic defines how it is allowed to act.</span>
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button variant="secondary-neon" size="lg">
                Get Started with Synaptic
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Synaptic;