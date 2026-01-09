import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;
    
    script.onload = () => {
      const win = window as Window & { hbspt?: { forms: { create: (config: { portalId: string; formId: string; region: string; target?: string }) => void } } };
      if (win.hbspt) {
        win.hbspt.forms.create({
          portalId: "2687377",
          formId: "d2d8df50-1084-4ed8-bcc0-daf5d0c8505e",
          region: "na1",
          target: "#hubspot-form-container"
        });
      }
    };
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about Fathym? We'd love to hear from you.
            </p>
          </div>
          
          <div 
            id="hubspot-form-container" 
            className="bg-card/30 border border-border rounded-xl p-8"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
