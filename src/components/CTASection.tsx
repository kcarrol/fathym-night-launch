import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const CTASection = () => {
  return <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Built and Used in
            <br />
            <span className="text-gradient-cyan">Real Systems</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Everything as Code powers production systems today, including Open Industrial — 
            a platform for governed AI in industrial and operational environments where 
            reliability and accountability are non-negotiable.
          </p>
          
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="neon" size="lg" className="group" asChild>
              <a href="https://www.openindustrial.co/" target="_blank" rel="noopener noreferrer">
                View Open Industrial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-muted">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;