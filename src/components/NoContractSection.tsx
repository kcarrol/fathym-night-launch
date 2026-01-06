const NoContractSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-foreground">
          There is no system-level contract
        </h2>
        
        <div className="space-y-8 text-lg text-muted-foreground">
          <p>Modern software stacks are made up of powerful tools:</p>
          
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>code generation frameworks and assistants</li>
            <li>cloud platforms and infrastructure tooling</li>
            <li>CI/CD pipelines and deployment automation</li>
            <li>agent frameworks and AI orchestration tools</li>
          </ul>
          
          <p className="text-foreground font-medium">
            Each solves part of the problem. None define the system as a whole.
          </p>
          
          <p>There is no shared, machine-readable contract that explains:</p>
          
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>what the system consists of</li>
            <li>where it runs</li>
            <li>how identity, data, and environments are scoped</li>
            <li>how change is allowed to happen over time</li>
          </ul>
          
          <p className="text-foreground font-medium pt-4 border-t border-border">
            Without that contract, AI can generate code — but it cannot fully understand and reason about the system it is modifying.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NoContractSection;
