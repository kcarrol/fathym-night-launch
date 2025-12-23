const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-xl font-bold tracking-tight">
            <span className="text-foreground">Fathym</span>
          </div>
          
          <nav className="flex items-center gap-8">
            <a href="#eac" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Everything as Code
            </a>
            <a href="#synaptic" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Synaptic
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fathym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
