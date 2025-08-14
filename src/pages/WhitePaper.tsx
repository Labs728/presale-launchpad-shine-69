
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const WhitePaper = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Back to Home</span>
                  <span className="sm:hidden">Back</span>
                </Button>
              </Link>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gradient-primary">SHINE Token</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">White Paper v1.0</p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                <Share2 className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Share</span>
              </Button>
              <Button size="sm" className="btn-crypto-primary flex-1 sm:flex-none">
                <Download className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Table of Contents Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 lg:sticky lg:top-24 lg:self-start">
            <Card className="glass-card border-primary/30">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4 text-gradient-secondary">Table of Contents</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#abstract" className="block text-muted-foreground hover:text-primary transition-colors">1. Abstract</a>
                  <a href="#introduction" className="block text-muted-foreground hover:text-primary transition-colors">2. Introduction</a>
                  <a href="#problem" className="block text-muted-foreground hover:text-primary transition-colors">3. Problem Statement</a>
                  <a href="#solution" className="block text-muted-foreground hover:text-primary transition-colors">4. Our Solution</a>
                  <a href="#vision" className="block text-muted-foreground hover:text-primary transition-colors">5. Vision & Mission</a>
                  <a href="#utility" className="block text-muted-foreground hover:text-primary transition-colors">6. Token Utility</a>
                  <a href="#architecture" className="block text-muted-foreground hover:text-primary transition-colors">7. Architecture</a>
                  <a href="#tokenomics" className="block text-muted-foreground hover:text-primary transition-colors">8. Tokenomics</a>
                  <a href="#roadmap" className="block text-muted-foreground hover:text-primary transition-colors">9. Roadmap</a>
                  <a href="#conclusion" className="block text-muted-foreground hover:text-primary transition-colors">10. Conclusion</a>
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-12">
            {/* Header Section */}
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/50">Version 1.0 | December 2024</Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  <span className="text-gradient-primary">SHINE Token</span>
                  <br />
                  <span className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">White Paper</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                  Revolutionizing Decentralized Finance Through Innovation and Community-Driven Development
                </p>
              </div>
            </div>

            {/* Abstract */}
            <section id="abstract" className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-secondary">1. Abstract</h2>
              <Card className="glass-card border-primary/30">
                <CardContent className="p-6 space-y-4">
                  <p className="leading-relaxed">
                    SHINE Token is more than just a meme—it's a movement. Born from the energy of the Web3 community, SHINE is aimed to be a community-backed meme token designed to inject fun, fairness, and utility into the decentralized gaming ecosystem. While embracing the viral spirit of meme culture, SHINE also introduces real-world utility through a unique governance model and seamless integration into the Web3 gaming industry.
                  </p>
                  <p className="leading-relaxed">
                    Built on the ultra-fast Base  blockchain, SHINE delivers near-instant transactions and minimal fees—ideal for in-game economies, community voting, and Governance interoperability. This white paper outlines our vision for a gamified, user-governed ecosystem where players, creators, and holders shape the future of decentralized entertainment together.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Introduction */}
            <section id="introduction" className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-secondary">2. Introduction</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  The decentralized gaming revolution has reshaped how we engage with gaming systems and platforms—eliminating intermediaries and enabling global, permissionless access to seamless and eye opening gaming experiences. Yet, many current gaming and DeFi protocols still struggle with high transaction fees, network congestion, and interfaces that are too complex for everyday users—barriers that prevent broader participation.
                </p>
                <p className="leading-relaxed">
                  SHINE Token rises to meet these challenges, combining the cultural appeal of meme tokens with real utility in the Web3 gaming space. Built on Base high-speed, low-cost blockchain, SHINE enables fast, affordable, and intuitive interactions within a gamified DeFi ecosystem. Whether gaming, trading, staking, or participating in community governance, users retain full control over their assets while enjoying a more engaging and accessible on-chain experience.
                </p>
              </div>
            </section>

            {/* Problem Statement */}
            <section id="problem" className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-secondary">3. Problem Statement</h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card border-destructive/30">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-destructive">High Transaction Costs</h3>
                    <p className="text-sm leading-relaxed">
                      Ethereum's high gas fees make DeFi inaccessible to many users, especially those 
                      with smaller transaction amounts. This creates a barrier to financial inclusion.
                    </p>
                  </CardContent>
                </Card>
                <Card className="glass-card border-destructive/30">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-destructive">Network Congestion</h3>
                    <p className="text-sm leading-relaxed">
                      Popular blockchain networks often experience congestion, leading to delayed 
                      transactions and unpredictable fees that hinder user experience.
                    </p>
                  </CardContent>
                </Card>
                <Card className="glass-card border-destructive/30">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-destructive">Complex User Experience</h3>
                    <p className="text-sm leading-relaxed">
                      Current gaming and DeFi platforms often require technical knowledge that average users 
                      don't possess, limiting mainstream adoption and accessibility.
                    </p>
                  </CardContent>
                </Card>
                <Card className="glass-card border-destructive/30">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-destructive">Limited Interoperability</h3>
                    <p className="text-sm leading-relaxed">
                      Most Web3 gaming platform seem to lack community fedback integration which leads to lack of gaming interest, making it difficult for users to 
                      participate and access gaming rewards while being unable to interact across different such gaming platform platforms.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Solution */}
            <section id="solution" className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-secondary">4. Our Solution</h2>
              <div className="space-y-6">
                <p className="leading-relaxed">
                  SHINE Token addresses these challenges through a comprehensive DeFi ecosystem built on 
                  Base's high-performance blockchain. Our solution focuses on four key pillars:
                </p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="glass-card border-accent/30">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3 text-accent">⚡ Ultra-Fast Transactions</h3>
                      <p className="text-sm leading-relaxed">
                        Leveraging Solana's 100+ TPS capability which is around 5 times compared to Ethereums to provide near-instantaneous 
                        transaction confirmations with minimal fees.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="glass-card border-accent/30">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3 text-accent">🔗 Cross-Chain Compatibility</h3>
                      <p className="text-sm leading-relaxed">
                        Built-in bridge technology enabling seamless asset transfers between 
                        Solana and other major blockchains.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="glass-card border-accent/30">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3 text-accent">👥 User-Centric Design</h3>
                      <p className="text-sm leading-relaxed">
                        Intuitive interfaces and simplified processes make gaming and DeFi accessible to 
                        users regardless of their technical background while also boosting gaming interactions by giving high rewards for gaming participants which inturn improves token adaptation and token value.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="glass-card border-accent/30">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3 text-accent">🛡️ Enhanced Security</h3>
                      <p className="text-sm leading-relaxed">
                        By integrating community feedback into token utility, governance, and game development, SHINE Token fosters a truly player-first environment.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Vision & Mission */}
            <section id="vision" className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-secondary">5. Vision & Mission</h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card border-primary/30">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gradient-primary">🎯 Our Vision</h3>
                    <p className="leading-relaxed">
                      To create a world where decentralized finance is accessible, efficient, and 
                      beneficial for everyone, regardless of their geographical location or 
                      economic background. We envision a future where traditional financial 
                      barriers are eliminated through innovative blockchain technology.
                    </p>
                  </CardContent>
                </Card>
                <Card className="glass-card border-secondary/30">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gradient-secondary">🚀 Our Mission</h3>
                    <p className="leading-relaxed">
                      To democratize access to financial services by building a comprehensive, 
                      user-friendly DeFi ecosystem that prioritizes security, transparency, and 
                      community governance while delivering superior performance and value to our users.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Token Utility */}
            <section id="utility" className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-secondary">6. Token Utility & Use Cases</h2>
              <div className="space-y-6">
                <p className="leading-relaxed">
                  SHINE Token serves multiple utility functions within our ecosystem, creating 
                  sustainable value and incentivizing long-term participation:
                </p>
                <div className="grid gap-4">
                  <Card className="glass-card border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Governance Rights</h3>
                          <p className="text-sm text-muted-foreground">
                            SHINE holders participate in protocol governance, voting on proposals 
                            for platform upgrades, fee structures, and ecosystem development.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="glass-card border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold">2</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Staking Rewards</h3>
                          <p className="text-sm text-muted-foreground">
                            Users can stake SHINE tokens to earn attractive yields while contributing 
                            to network security and receiving additional benefits.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="glass-card border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold">3</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Transaction Fee Discounts</h3>
                          <p className="text-sm text-muted-foreground">
                            SHINE holders enjoy reduced transaction fees across all platform 
                            services, with higher holdings providing greater discounts.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="glass-card border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold">4</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Liquidity Mining</h3>
                          <p className="text-sm text-muted-foreground">
                            Provide liquidity to SHINE pools and earn rewards in additional tokens, 
                            supporting the ecosystem while generating passive income.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Architecture */}
            <section id="architecture" className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-secondary">7. Blockchain Architecture</h2>
              <div className="space-y-6">
                <Card className="glass-card border-accent/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gradient-accent">Solana Foundation</h3>
                    <p className="leading-relaxed mb-4">
                      SHINE Token is built on Solana, chosen for its exceptional performance characteristics:
                    </p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-background/50 rounded-lg">
                        <div className="text-2xl font-bold text-accent">50K+</div>
                        <div className="text-sm text-muted-foreground">TPS Capability</div>
                      </div>
                      <div className="text-center p-4 bg-background/50 rounded-lg">
                        <div className="text-2xl font-bold text-accent">400ms</div>
                        <div className="text-sm text-muted-foreground">Block Time</div>
                      </div>
                      <div className="text-center p-4 bg-background/50 rounded-lg">
                        <div className="text-2xl font-bold text-accent">$0.001</div>
                        <div className="text-sm text-muted-foreground">Avg Transaction Fee</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="glass-card border-primary/30">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3">Smart Contract Security</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="text-accent">✓</span>
                          Multi-signature wallet integration
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-accent">✓</span>
                          Regular security audits by leading firms
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-accent">✓</span>
                          Time-locked administrative functions
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-accent">✓</span>
                          Emergency pause mechanisms
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="glass-card border-primary/30">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3">Cross-Chain Infrastructure</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="text-accent">✓</span>
                          Wormhole bridge integration
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-accent">✓</span>
                          Ethereum compatibility layer
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-accent">✓</span>
                          BSC and Polygon support
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-accent">✓</span>
                          Automated asset bridging
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Tokenomics */}
            <section id="tokenomics" className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-secondary">8. Tokenomics & Distribution</h2>
              <div className="space-y-6">
                <Card className="glass-card border-primary/30">
                  <CardContent className="p-6">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Token Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Token Name</span>
                            <span className="font-semibold">SHINE</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Total Supply</span>
                            <span className="font-semibold">100,000,000 SHINE</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Blockchain</span>
                            <span className="font-semibold">Solana (SPL Token)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Decimals</span>
                            <span className="font-semibold">9</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Distribution</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Presale</span>
                            <span className="font-semibold text-primary">25%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Liquidity</span>
                            <span className="font-semibold text-accent">20%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Staking Rewards</span>
                            <span className="font-semibold text-secondary">20%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Team & Advisors</span>
                            <span className="font-semibold">15%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Development</span>
                            <span className="font-semibold">10%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Marketing</span>
                            <span className="font-semibold">10%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Roadmap */}
            <section id="roadmap" className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-secondary">9. Development Roadmap</h2>
              <div className="space-y-4">
                {[
                  {
                    phase: "Q1 2025",
                    status: "upcoming",
                    title: "Foundation & Core Development",
                    items: ["Smart contract optimization", "Security audit completion", "Initial dApp development", "Community governance setup"]
                  },
                  {
                    phase: "Q2 2025",
                    status: "upcoming",
                    title: "Launch & Market Entry",
                    items: ["Public token launch", "DEX listings (Raydium, Orca)", "Staking platform release", "Marketing campaign launch"]
                  },
                  {
                    phase: "Q3 2025",
                    status: "upcoming",
                    title: "Ecosystem Expansion",
                    items: ["CEX negotiations", "DeFi protocol integrations", "Mobile app development", "Cross-chain bridge"]
                  },
                  {
                    phase: "Q4 2025",
                    status: "upcoming",
                    title: "Advanced Features",
                    items: ["Yield farming protocols", "NFT marketplace integration", "Advanced analytics dashboard", "Enterprise partnerships"]
                  }
                ].map((item, index) => (
                  <Card key={index} className="glass-card border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Badge className={
                          item.status === "completed" ? "bg-accent text-accent-foreground" :
                          item.status === "current" ? "bg-primary text-primary-foreground" :
                          "bg-muted text-muted-foreground"
                        }>
                          {item.phase}
                        </Badge>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                            {item.items.map((task, taskIndex) => (
                              <div key={taskIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span className="text-primary">•</span>
                                {task}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Beyond 2025 */}
              <div className="mt-16">
                <Card className="glass-card border-accent/30">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">🌟</div>
                    <h3 className="text-2xl font-bold mb-4 text-gradient-accent">
                      Beyond 2025
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                      Our long-term vision includes building a comprehensive DeFi ecosystem with 
                      innovative financial products, real-world asset tokenization, and institutional 
                      adoption. SHINE will become the cornerstone of next-generation decentralized finance, 
                      enabling seamless integration between traditional and decentralized financial systems.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-secondary">10. Conclusion</h2>
              <Card className="glass-card border-primary/30">
                <CardContent className="p-6 space-y-4">
                  <p className="leading-relaxed">
                    SHINE Token represents more than just another cryptocurrency—it's a comprehensive 
                    solution to the current limitations of decentralized finance. By leveraging Solana's 
                    advanced blockchain technology and focusing on user experience, security, and 
                    community governance, we're building the foundation for the next generation of DeFi.
                  </p>
                  <p className="leading-relaxed">
                    Our commitment to transparency, innovation, and sustainable growth positions SHINE 
                    as a leader in the evolving DeFi landscape. As we execute our roadmap and expand 
                    our ecosystem, we invite the community to join us in revolutionizing decentralized finance.
                  </p>
                  <Separator />
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      For more information, visit our website or join our community
                    </p>
                    <div className="flex justify-center gap-4">
                      <Link to="/">
                        <Button className="btn-crypto-primary">
                          Visit Website
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default WhitePaper;
