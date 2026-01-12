const OrbitalDiagram = () => {
  const orbitItems = [
    { label: "AI Agents", color: "neon-magenta", position: "top-[2%] md:top-[8%] left-1/2 -translate-x-1/2" },
    { label: "Runtimes", color: "muted-foreground", position: "top-[12%] md:top-[12%] left-[5%] md:left-[28%]" },
    { label: "Workflows", color: "muted-foreground", position: "top-[12%] md:top-[12%] right-[5%] md:right-[20%]" },
    { label: "Applications", color: "neon-cyan", position: "top-[28%] md:top-[28%] left-[2%] md:left-[12%]" },
    { label: "Data & APIs", color: "neon-magenta", position: "top-[28%] md:top-[28%] right-[2%] md:right-[10%]" },
    { label: "Infrastructure", color: "neon-lime", position: "bottom-[28%] md:bottom-[20%] left-[2%] md:left-[14%]" },
    { label: "Identity & Auth", color: "neon-cyan", position: "bottom-[28%] md:bottom-[22%] right-[2%] md:right-[10%]" },
    { label: "Environments", color: "neon-yellow", position: "bottom-[2%] md:bottom-[8%] left-1/2 -translate-x-1/2" },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "neon-cyan":
        return "border-neon-cyan text-neon-cyan";
      case "neon-magenta":
        return "border-neon-magenta text-neon-magenta";
      case "neon-lime":
        return "border-neon-lime text-neon-lime";
      case "neon-yellow":
        return "border-neon-yellow text-neon-yellow";
      default:
        return "border-muted-foreground/50 text-muted-foreground";
    }
  };

  return (
    <section className="relative py-12 md:py-24 overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="relative w-full max-w-5xl mx-auto aspect-[4/5] md:aspect-[16/10]">
          {/* Orbital ellipses - using SVG for dashed ellipses */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Outermost orbit - cyan */}
            <ellipse
              cx="400"
              cy="250"
              rx="380"
              ry="220"
              fill="none"
              stroke="hsl(var(--neon-cyan))"
              strokeWidth="1"
              strokeDasharray="8 6"
              opacity="0.4"
            />
            {/* Second orbit - orange/yellow */}
            <ellipse
              cx="400"
              cy="250"
              rx="320"
              ry="180"
              fill="none"
              stroke="hsl(var(--neon-yellow))"
              strokeWidth="1"
              strokeDasharray="8 6"
              opacity="0.3"
            />
            {/* Third orbit - magenta */}
            <ellipse
              cx="400"
              cy="250"
              rx="260"
              ry="140"
              fill="none"
              stroke="hsl(var(--neon-magenta))"
              strokeWidth="1"
              strokeDasharray="8 6"
              opacity="0.3"
            />
            {/* Inner orbit - cyan */}
            <ellipse
              cx="400"
              cy="250"
              rx="200"
              ry="100"
              fill="none"
              stroke="hsl(var(--neon-cyan))"
              strokeWidth="1"
              strokeDasharray="8 6"
              opacity="0.25"
            />
          </svg>

          {/* Center circle with glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Glow effects */}
            <div className="absolute inset-0 w-28 h-28 md:w-48 md:h-48 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-2xl animate-glow-pulse" />
              <div className="absolute inset-0 bg-neon-magenta/15 rounded-full blur-3xl translate-x-4 animate-glow-pulse" style={{ animationDelay: "1s" }} />
            </div>
            
            {/* Main circle */}
            <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-full border-2 border-neon-cyan bg-background/90 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.3)]">
              <span className="font-display text-base md:text-xl font-bold text-foreground">Everything</span>
              <span className="text-xs md:text-sm text-muted-foreground">as</span>
              <span className="font-display text-base md:text-xl font-bold text-neon-magenta">Code</span>
            </div>
          </div>

          {/* Orbital items */}
          {orbitItems.map((item) => (
            <div
              key={item.label}
              className={`absolute ${item.position} z-10`}
            >
              <div
                className={`px-2 py-1 md:px-4 md:py-2 rounded-md border bg-background/80 backdrop-blur-sm text-xs md:text-sm font-medium whitespace-nowrap ${getColorClasses(item.color)}`}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrbitalDiagram;
