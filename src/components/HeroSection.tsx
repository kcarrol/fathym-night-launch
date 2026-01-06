import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/10 rounded-full blur-3xl animate-glow-pulse" style={{
      animationDelay: "1.5s"
    }} />
      
      <div className="container relative z-10 mx-auto px-6 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              The Operating Model for AI-Built Systems
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up-delay-1">
            <span className="text-foreground">Everything</span>
            <br />
            <span className="text-gradient-cyan">as Code</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
            AI has transformed how software is created. But it hasn't changed how software systems are assembled, governed, or evolved. 
            <span className="text-foreground font-medium"> Everything as Code is the operating model that makes AI-assisted software coherent, deployable, and future proof.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
            <Button variant="neon" size="lg" className="group" asChild>
              <Link to="/everything-as-code">
                Explore EaC
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-muted">
              View Documentation
            </Button>
          </div>
        </div>

        {/* Floating code block decoration */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6 font-mono text-xs md:text-sm overflow-hidden overflow-x-auto">
            <div className="absolute top-0 left-0 right-0 h-8 bg-muted/50 border-b border-border flex items-center gap-2 px-4">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-neon-yellow/60" />
              <span className="w-3 h-3 rounded-full bg-neon-lime/60" />
              <span className="ml-4 text-muted-foreground text-xs">EverythingAsCode Schema</span>
            </div>
            <div className="pt-6 space-y-1 whitespace-pre">
              <div>
                <span className="text-neon-magenta">const</span>
                <span className="text-foreground"> eac</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-neon-cyan">EverythingAsCode</span>
                <span className="text-muted-foreground"> = {"{"}</span>
              </div>
              <div className="text-muted-foreground/60 pl-2">{"// Identity"}</div>
              <div className="pl-2">
                <span className="text-neon-lime">EnterpriseLookup</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-neon-yellow">"ent-abc-123"</span>
                <span className="text-muted-foreground">,</span>
              </div>
              <div className="pl-2">
                <span className="text-neon-lime">Details</span>
                <span className="text-muted-foreground">: {"{"} </span>
                <span className="text-neon-lime">Name</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-neon-yellow">"My Application"</span>
                <span className="text-muted-foreground"> {"}"},</span>
              </div>
              <div className="mt-2" />
              <div className="text-muted-foreground/60 pl-2">{"// ─── ORGANIZATION ───"}</div>
              <div className="pl-2">
                <span className="text-neon-lime">Projects</span>
                <span className="text-muted-foreground">: {"{"} </span>
                <span className="text-neon-yellow">"proj-1"</span>
                <span className="text-muted-foreground">: {"{"} Details, ApplicationResolvers {"}"} {"}"},</span>
              </div>
              <div className="mt-2" />
              <div className="text-muted-foreground/60 pl-2">{"// ─── APPLICATIONS ───"}</div>
              <div className="pl-2">
                <span className="text-neon-lime">Applications</span>
                <span className="text-muted-foreground">: {"{"}</span>
              </div>
              <div className="pl-4">
                <span className="text-neon-yellow">"app-web"</span>
                <span className="text-muted-foreground">: {"{"} Processor: </span>
                <span className="text-neon-cyan">PreactAppProcessor</span>
                <span className="text-muted-foreground"> {"}"},</span>
              </div>
              <div className="pl-4">
                <span className="text-neon-yellow">"app-api"</span>
                <span className="text-muted-foreground">: {"{"} Processor: </span>
                <span className="text-neon-cyan">APIProcessor</span>
                <span className="text-muted-foreground"> {"}"}</span>
              </div>
              <div className="pl-2"><span className="text-muted-foreground">{"}"},</span></div>
              <div className="mt-2" />
              <div className="text-muted-foreground/60 pl-2">{"// ─── AI CIRCUITS ───"}</div>
              <div className="pl-2">
                <span className="text-neon-lime">Circuits</span>
                <span className="text-muted-foreground">: {"{"} </span>
                <span className="text-neon-yellow">"circuit-support"</span>
                <span className="text-muted-foreground">: {"{"} Neurons, Edges {"}"} {"}"},</span>
              </div>
              <div className="mt-2" />
              <div className="text-muted-foreground/60 pl-2">{"// ─── GOVERNANCE (Built-in) ───"}</div>
              <div className="text-muted-foreground/60 pl-2">{"// RBAC · Quotas · Audit · Multi-tenant"}</div>
              <div>
                <span className="text-muted-foreground">{"}"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;