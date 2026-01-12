import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Target, Rocket } from "lucide-react";
const About = () => {
  const principles = ["Systems should be explicitly defined, not inferred", "Structure should be machine-readable, not tribal knowledge", "AI should be a governed participant, not an external force", "Change should be intentional and auditable"];
  const whatWeBuild = ["A unified system model (Everything as Code)", "Synaptic framework for agentic AI execution and governance", "Composable execution runtime architecture and reference runtimes (Web, API, Flow, Synaptic)", "FTM CLI for effective human and AI software co-architecture"];
  const audiences = [{
    icon: Code,
    label: "Platform and infrastructure teams"
  }, {
    icon: Users,
    label: "Architects and system designers"
  }, {
    icon: Target,
    label: "AI-forward engineering teams"
  }, {
    icon: Rocket,
    label: "Organizations operating in regulated or high-stakes environments"
  }];
  const beliefs = ["Structure enables speed", "Explicit boundaries enable autonomy", "Governance is a design property, not a policy layer", "AI works best when it can see and fully understand the system it's part of"];
  return <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-cyan/10 via-transparent to-transparent" />
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-neon-cyan mb-4">About Fathym</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Defining software system assembly{" "}
              <span className="text-neon-magenta">in the age of AI</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Fathym exists to solve a problem modern software teams increasingly face:
              <br /><br />
              systems change faster than humans — and now AI — can safely understand or control them.
            </p>
          </div>
        </div>
      </section>

      {/* The Gap Section */}
      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              AI has accelerated code creation. It has not solved system assembly, governance, or long-term evolution.
              <br /><br />
              <span className="text-foreground font-medium">Fathym is here to address that gap.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Our Perspective Section */}
      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
              Our <span className="text-neon-cyan">perspective</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Modern software is no longer a single application. It is a system of runtimes, services, workflows, data, infrastructure, and increasingly, autonomous AI behavior.
              <br /><br />
              Most tools optimize individual layers. Very few define the system as a whole.
              <br /><br />
              <span className="text-foreground">Fathym takes a different approach.</span>
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {principles.map((principle, index) => <div key={index} className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm">
                  <p className="text-foreground">{principle}</p>
                </div>)}
            </div>
            
            <p className="text-lg text-muted-foreground text-center mt-12">
              This philosophy is expressed through{" "}
              <a href="/everything-as-code" className="text-neon-cyan hover:underline">Everything as Code</a>, 
              and realized through composable runtimes like{" "}
              <a href="/synaptic" className="text-neon-magenta hover:underline">Synaptic</a>.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
              What we <span className="text-neon-magenta">build</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Fathym is developing technology and tools for assembling, governing, and evolving real software systems.
            </p>
            
            <div className="space-y-4">
              {whatWeBuild.map((item, index) => <div key={index} className="flex items-center gap-4 p-5 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-neon-lime flex-shrink-0" />
                  <p className="text-foreground">{item}</p>
                </div>)}
            </div>
            
            <p className="text-lg text-muted-foreground text-center mt-12">
              These capabilities power both horizontal platform tooling and vertical solutions such as{" "}
              <a href="https://www.openindustrial.co/" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                Open Industrial
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
              Who it's <span className="text-neon-cyan">for</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Fathym is designed for teams building <span className="text-foreground font-medium">real systems</span>, not just experiments:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {audiences.map((audience, index) => <div key={index} className="flex items-center gap-4 p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm">
                  <audience.icon className="w-6 h-6 text-neon-magenta flex-shrink-0" />
                  <p className="text-foreground">{audience.label}</p>
                </div>)}
            </div>
            
            <p className="text-lg text-muted-foreground text-center mt-12">
              If you care about control, portability, and long-term evolution — Fathym's tools are for you.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
              Our <span className="text-neon-lime">approach</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">We believe</p>
            
            <div className="space-y-4">
              {beliefs.map((belief, index) => <div key={index} className="p-5 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm text-center">
                  <p className="text-foreground">{belief}</p>
                </div>)}
            </div>
            
            <p className="text-lg text-muted-foreground text-center mt-12">
              Everything we build reflects those principles.
            </p>
          </div>
        </div>
      </section>

      {/* Where We're Going Section */}
      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Where we're <span className="text-neon-magenta">going</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Software is entering an era where systems must be understandable and evolvable by both humans and AI.
              <br /><br />
              <span className="text-foreground font-medium">Fathym is building the operating model for that future.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <a href="/everything-as-code">
                <Button variant="neon" size="lg">
                  Explore Everything as Code
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;