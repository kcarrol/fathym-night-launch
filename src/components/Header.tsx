import { Button } from "@/components/ui/button";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="font-display text-xl font-bold tracking-tight">
            <span className="text-foreground">Fathym</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="/everything-as-code" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Everything as Code
          </a>
          <a href="/synaptic" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Synaptic
          </a>
          
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Contact
          </Button>
          <Button variant="neon" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;