import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/everything-as-code", label: "Everything as Code" },
    { href: "/synaptic", label: "Synaptic" },
    { href: "/ftm-cli", label: "FTM CLI" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <div className="font-display text-xl font-bold tracking-tight">
            <span className="text-foreground">Fathym</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/contact">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Contact
            </Button>
          </a>
          <Button variant="neon" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background border-border">
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                <a href="/contact" onClick={() => setOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                    Contact
                  </Button>
                </a>
                <Button variant="neon">
                  Get Started
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;