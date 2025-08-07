import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: "Q1 2024",
      status: "completed",
      title: "Foundation & Planning",
      items: [
        "Project conceptualization",
        "Team formation",
        "Technical architecture design",
        "Initial smart contract development"
      ]
    },
    {
      phase: "Q2 2024",
      status: "current",
      title: "Development & Presale",
      items: [
        "Smart contract audit completion",
        "Presale platform launch",
        "Community building",
        "Marketing campaign initiation"
      ]
    },
    {
      phase: "Q3 2024",
      status: "upcoming",
      title: "Launch & Exchange",
      items: [
        "Public token launch",
        "DEX listings (Uniswap, PancakeSwap)",
        "CEX negotiations",
        "Staking platform release"
      ]
    },
    {
      phase: "Q4 2024",
      status: "upcoming",
      title: "Ecosystem Expansion",
      items: [
        "DeFi protocol integrations",
        "Governance platform launch",
        "Mobile app development",
        "Partnership announcements"
      ]
    },
    {
      phase: "Q1 2025",
      status: "upcoming",
      title: "DeFi Innovation",
      items: [
        "Yield farming protocols",
        "Cross-chain bridge",
        "NFT marketplace integration",
        "Advanced analytics dashboard"
      ]
    },
    {
      phase: "Q2 2025",
      status: "upcoming",
      title: "Global Adoption",
      items: [
        "Institutional partnerships",
        "Major exchange listings",
        "Enterprise solutions",
        "Global marketing expansion"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-accent text-accent-foreground";
      case "current":
        return "bg-primary text-primary-foreground animate-glow";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return "✅";
      case "current":
        return "🚀";
      default:
        return "⏳";
    }
  };

  return (
    <section id="roadmap" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Development Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our journey to revolutionize DeFi with innovative solutions and community-driven development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content Card */}
                <div className="w-5/12">
                  <Card className="glass-card border-primary/30 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className={getStatusColor(item.status)}>
                          {getStatusIcon(item.status)} {item.phase}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gradient-secondary">
                        {item.title}
                      </h3>
                      <ul className="space-y-2">
                        {item.items.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="flex-shrink-0 relative">
                  <div className="w-6 h-6 rounded-full bg-primary shadow-glow-primary flex items-center justify-center z-10 relative">
                    <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                  </div>
                  {item.status === "current" && (
                    <div className="absolute inset-0 w-6 h-6 rounded-full bg-primary animate-ping opacity-30" />
                  )}
                </div>

                {/* Spacer */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-20 text-center">
          <Card className="glass-card border-accent/30 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-4 text-gradient-accent">
                Beyond 2025
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our long-term vision includes building a comprehensive DeFi ecosystem with 
                innovative financial products, cross-chain interoperability, and real-world 
                asset tokenization. SHINE will become the cornerstone of decentralized finance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;