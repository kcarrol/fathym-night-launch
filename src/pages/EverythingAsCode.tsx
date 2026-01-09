import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, Shield, Layers, Workflow, Database, Users, Bot, CheckCircle, XCircle, ArrowRight } from "lucide-react";
const problemItems = ["YAML files scattered across repositories", "Little or no schema validation", "Environment-specific copies that drift over time", "Tribal knowledge about what connects to what"];
const systemIncludes = [{
  icon: Layers,
  text: "Applications and APIs"
}, {
  icon: Code,
  text: "Runtimes and execution environments"
}, {
  icon: Users,
  text: "Identity, tenancy, and access control"
}, {
  icon: Database,
  text: "Environments and deployment intent"
}, {
  icon: Workflow,
  text: "Data sources and integrations"
}, {
  icon: Bot,
  text: "Workflows and event-driven logic"
}];
const aiCan = ["Read the system model to understand context", "Generate and assemble compatible components", "Execute workflows within defined capabilities", "Propose system changes safely and predictably"];
const orgGains = ["Clear domain ownership reflected directly in system definitions", "Autonomous teams that assemble systems without breaking global constraints", "Alignment between how systems are built and how teams operate"];
const runtimeProcessors = ["Request handling", "Data access", "Rendering", "Messaging", "Workflow execution", "AI orchestration"];
const stewardshipEnsures = ["Interpret system intent consistently", "Enforce governance and policy by default", "Control how change is introduced", "Maintain accountability as the system evolves"];
const aiCannot = ["Bypass identity or policy", "Mutate infrastructure directly", "Operate outside declared boundaries", "Introduce untracked or unaudited changes"];
const whyMatters = ["Assemble complex systems intentionally", "Give AI meaningful context", "Enable reuse at the system level", "Preserve control as systems evolve"];
const EverythingAsCode = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              System Architecture
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Everything as Code
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Assembling software in the age of AI
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Software systems are no longer built one application at a time. They are assembled from runtimes, 
              services, workflows, data sources, identity systems, and increasingly, AI-driven logic that can 
              generate, modify, and extend those systems continuously. Everything as Code defines how these pieces 
              come together into a coherent, governable, and future-proof system — one that both humans and AI 
              can understand and evolve.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary text-sm font-medium tracking-wider uppercase mb-4 block">
                The Challenge
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                The problem EaC addresses
              </h2>
              <p className="text-muted-foreground mb-6">
                AI has fundamentally changed the economics of software creation. Code can now be produced faster 
                than teams can review, integrate, or even fully understand it. What has not changed is how software 
                systems are assembled.
              </p>
              <p className="text-muted-foreground">
                As systems grow more dynamic — and AI becomes a first-class participant — this approach breaks down. 
                The challenge is no longer writing code. The challenge is giving humans and AI a clear, explicit 
                system model to work within.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 border-glow rounded-3xl opacity-30" />
              <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8">
                <h3 className="font-display text-xl font-semibold mb-6 text-foreground">Today's configuration sprawl</h3>
                <div className="space-y-4">
                  {problemItems.map((item, index) => <div key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What EaC Is Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">AI can</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              What Everything as Code is
            </h2>
            <p className="text-lg text-muted-foreground">
              A unified, declarative system model. Everything as Code defines an entire software system — 
              not just applications. This system definition is machine-readable, validated, and governed by design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemIncludes.map((item, index) => <div key={index} className="p-6 rounded-xl border border-border bg-background/50 hover:border-primary/50 transition-colors">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <span className="text-foreground font-medium">{item.text}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Shared Model Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary text-sm font-medium tracking-wider uppercase mb-4 block">
              Human + AI Collaboration
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              A shared model for humans and AI
            </h2>
            <p className="text-lg text-muted-foreground">
              By giving AI a structured, explicit system model, Everything as Code dramatically improves 
              the quality, safety, and reusability of AI-assisted development.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
              <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">AI can:</h3>
              <div className="space-y-4">
                {aiCan.map((item, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>)}
              </div>
            </div>
            
            <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-8">
              <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">Organizations gain:</h3>
              <div className="space-y-4">
                {orgGains.map((item, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Runtime Architecture Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
                Composed, Not Hard-coded
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Extensible runtime architecture
              </h2>
              <p className="text-muted-foreground mb-6">
                Everything as Code does not prescribe a fixed set of runtimes. Instead, it defines an extensible 
                runtime architecture where execution environments are composed from shared primitives.
              </p>
              <p className="text-muted-foreground mb-8">
                Fathym provides several reference runtimes — such as Web, API, Core, Flow, and Synaptic — not 
                as limits, but as examples of what can be assembled from the model.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">This architecture enables:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Domain-specific runtimes tailored to real workflows
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    Independent scaling and deployment of execution contexts
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    System-level reuse instead of copy-paste reuse
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    AI-assisted construction of new runtimes from known primitives
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 border-glow-accent rounded-3xl opacity-30" />
              <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8">
                <h3 className="font-display text-xl font-semibold mb-6 text-foreground">
                  Each runtime is built by composing processors:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {runtimeProcessors.map((item, index) => <div key={index} className="px-4 py-3 rounded-lg bg-accent/10 border border-accent/20 text-sm text-foreground">
                      {item}
                    </div>)}
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  No processor belongs to a single runtime. Capabilities are reusable, extensible, and shared 
                  across the system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stewardship Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Governance by Design
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Stewardship as a structural property
            </h2>
            <p className="text-lg text-muted-foreground">
              As systems evolve faster, governance cannot be an afterthought. In the Everything as Code model, 
              stewardship is structural — embedded directly into how systems are defined and executed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stewardshipEnsures.map((item, index) => <div key={index} className="p-6 rounded-xl border border-border bg-card/50 text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                <span className="text-foreground">{item}</span>
              </div>)}
          </div>
          
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            These rules apply equally to changes made by developers, automation, or AI agents. 
            Nothing bypasses the system model.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-secondary text-sm font-medium tracking-wider uppercase mb-4 block">AI cannot</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              How an Everything as Code system works
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything as Code separates intent from execution.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {["The system is defined declaratively using the EaC model", "That definition is validated and interpreted through stewardship", "An execution graph is resolved from the system structure", "Infrastructure and runtimes are reconciled as needed", "Execution proceeds within explicit, governed boundaries"].map((step, index) => <div key={index} className="flex items-center gap-6 p-6 rounded-xl border border-border bg-background/50">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <span className="text-foreground text-lg">{step}</span>
                </div>)}
            </div>
            
            <p className="text-center text-muted-foreground mt-8">
              All changes loop back through the same system model. This execution model allows systems to 
              remain understandable and governable — even as AI accelerates the rate of change.
            </p>
          </div>
        </div>
      </section>

      {/* AI Inside the System Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
              AI Participation
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              AI inside the system, not around it
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything as Code is designed for AI participation, not AI containment. This makes AI a 
              first-class system participant, rather than an external force acting blindly on production systems.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
              <h3 className="font-display text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                AI can:
              </h3>
              <div className="space-y-4">
                {["Read the system model to understand context", "Assemble compatible components", "Execute workflows within declared capabilities"].map((item, index) => <div key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>)}
              </div>
            </div>
            
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-8">
              <h3 className="font-display text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                <XCircle className="w-6 h-6 text-destructive" />
                AI cannot:
              </h3>
              <div className="space-y-4">
                {aiCannot.map((item, index) => <div key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              The Future
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Why Everything as Code matters now
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              AI has solved the problem of code generation. It has not solved the problem of system assembly. 
              As software systems become more autonomous and AI-driven, the limiting factor is no longer 
              speed — it is structure.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
              {whyMatters.map((item, index) => <div key={index} className="flex items-center gap-4 p-6 rounded-xl border border-primary/30 bg-primary/5">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>)}
            </div>
            
            <Button variant="neon" size="lg">
              Get Started with EaC
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default EverythingAsCode;