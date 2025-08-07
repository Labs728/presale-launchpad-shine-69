import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Tokenomics = () => {
  const tokenDistribution = [
    { label: "Presale", percentage: 25, color: "bg-gradient-primary", amount: "25M SHINE" },
    { label: "Liquidity", percentage: 20, color: "bg-gradient-secondary", amount: "20M SHINE" },
    { label: "Team & Advisors", percentage: 15, color: "bg-gradient-accent", amount: "15M SHINE" },
    { label: "Marketing", percentage: 15, color: "bg-crypto-gold", amount: "15M SHINE" },
    { label: "Development", percentage: 10, color: "bg-purple-500", amount: "10M SHINE" },
    { label: "Ecosystem", percentage: 10, color: "bg-cyan-500", amount: "10M SHINE" },
    { label: "Reserve", percentage: 5, color: "bg-green-500", amount: "5M SHINE" },
  ];

  const tokenMetrics = [
    { label: "Total Supply", value: "100,000,000 SHINE", icon: "💎" },
    { label: "Presale Price", value: "$0.12", icon: "💰" },
    { label: "Listing Price", value: "$0.20", icon: "🚀" },
    { label: "Blockchain", value: "Ethereum (ERC-20)", icon: "⛓️" },
    { label: "Market Cap (FDV)", value: "$20M", icon: "📊" },
    { label: "Vesting", value: "12 months linear", icon: "🔒" },
  ];

  return (
    <section id="tokenomics" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Tokenomics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent and sustainable token distribution designed for long-term growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Token Distribution */}
          <div className="space-y-8">
            <Card className="glass-card border-primary/30 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient-secondary">
                  Token Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {tokenDistribution.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.label}</span>
                      <div className="text-right">
                        <div className="font-semibold">{item.percentage}%</div>
                        <div className="text-sm text-muted-foreground">{item.amount}</div>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={item.percentage} 
                        className="h-3"
                      />
                      <div 
                        className={`absolute inset-0 rounded-full ${item.color} opacity-80`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Token Metrics */}
          <div className="space-y-8">
            <Card className="glass-card border-accent/30 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient-accent">
                  Token Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {tokenMetrics.map((metric, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 rounded-lg bg-background/30 border border-border/30 hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{metric.icon}</span>
                        <span className="font-medium">{metric.label}</span>
                      </div>
                      <span className="font-semibold text-primary">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-secondary/30">
              <CardHeader>
                <CardTitle className="text-xl text-gradient-secondary">
                  Vesting Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team & Advisors</span>
                    <span className="text-sm">24 months (6m cliff)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Presale</span>
                    <span className="text-sm">12 months linear</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Marketing</span>
                    <span className="text-sm">18 months linear</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Development</span>
                    <span className="text-sm">36 months linear</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="glass-card border-primary/30 text-center animate-float">
            <CardContent className="pt-8">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold mb-2 text-gradient-primary">
                Deflationary
              </h3>
              <p className="text-muted-foreground">
                2% of all transactions are burned, reducing total supply over time
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-secondary/30 text-center animate-float" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2 text-gradient-secondary">
                Staking Rewards
              </h3>
              <p className="text-muted-foreground">
                Earn up to 15% APY by staking your SHINE tokens
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-accent/30 text-center animate-float" style={{ animationDelay: '0.4s' }}>
            <CardContent className="pt-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2 text-gradient-accent">
                Governance
              </h3>
              <p className="text-muted-foreground">
                Vote on proposals and shape the future of the SHINE ecosystem
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;