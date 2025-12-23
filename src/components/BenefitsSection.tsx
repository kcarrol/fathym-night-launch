import { Users, Building2, Server } from "lucide-react";

const benefitGroups = [
  {
    icon: Users,
    title: "For Development Teams",
    color: "primary",
    benefits: [
      "Clear System Boundaries",
      "Fewer One-off Decisions",
      "Reproducible Environments",
      "Confident AI-assisted Workflows",
    ],
  },
  {
    icon: Building2,
    title: "For Enterprises",
    color: "secondary",
    benefits: [
      "Governance by Design",
      "Auditability Built In",
      "Consistent Multi-tenant Isolation",
      "Safer AI Adoption at Scale",
    ],
  },
  {
    icon: Server,
    title: "For Systems",
    color: "accent",
    benefits: [
      "Controlled Evolution",
      "Reduced Configuration Drift",
      "Explicit Ownership and Intent",
      "Long-term Maintainability",
    ],
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-32 relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 gradient-dark" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
            What changes when software has
            <br />
            <span className="text-gradient-lime">a system contract</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefitGroups.map((group) => (
            <div
              key={group.title}
              className="relative p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm"
            >
              <div className={`w-14 h-14 rounded-xl bg-${group.color}/10 flex items-center justify-center mb-6`}>
                <group.icon className={`w-7 h-7 text-${group.color}`} />
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-6">{group.title}</h3>
              
              <ul className="space-y-4">
                {group.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-${group.color}`} />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
