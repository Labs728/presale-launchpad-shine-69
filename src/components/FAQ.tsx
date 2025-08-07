import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is SHINE Token?",
      answer: "SHINE is a next-generation DeFi token built on Ethereum that powers a comprehensive ecosystem of decentralized financial services. It features deflationary tokenomics, staking rewards, and governance capabilities."
    },
    {
      question: "How can I participate in the presale?",
      answer: "You can participate by connecting your Web3 wallet (MetaMask, WalletConnect, etc.) and purchasing SHINE tokens with ETH, USDT, USDC, or BNB. The minimum purchase is 0.01 ETH and maximum is 50 ETH per wallet."
    },
    {
      question: "What are the presale stages and pricing?",
      answer: "The presale has 4 stages: Stage 1 ($0.10), Stage 2 ($0.12 - current), Stage 3 ($0.15), and Stage 4 ($0.18). The public listing price will be $0.20, offering early investors significant potential returns."
    },
    {
      question: "When will tokens be distributed?",
      answer: "Token distribution will begin after the presale ends and the public launch occurs. Presale participants will receive their tokens with a 12-month linear vesting schedule to ensure sustainable price action."
    },
    {
      question: "What makes SHINE different from other tokens?",
      answer: "SHINE features unique deflationary mechanics (2% burn on transactions), high staking yields (up to 15% APY), comprehensive governance rights, and integration with multiple DeFi protocols for maximum utility."
    },
    {
      question: "Is the smart contract audited?",
      answer: "Yes, our smart contracts have been thoroughly audited by leading blockchain security firms. All audit reports will be published on our website before the public launch for complete transparency."
    },
    {
      question: "What are the staking rewards?",
      answer: "SHINE holders can stake their tokens to earn up to 15% APY. Staking rewards are distributed weekly and compound automatically. Longer staking periods may offer additional bonus rewards."
    },
    {
      question: "How does the governance system work?",
      answer: "SHINE token holders can propose and vote on ecosystem improvements, protocol upgrades, and treasury allocations. Each token represents one vote, and proposals require a minimum threshold for implementation."
    },
    {
      question: "What are the use cases for SHINE?",
      answer: "SHINE can be used for trading fee discounts, staking rewards, governance voting, accessing premium DeFi features, liquidity mining, and as collateral in our lending protocols."
    },
    {
      question: "Where will SHINE be listed?",
      answer: "SHINE will first launch on decentralized exchanges like Uniswap and PancakeSwap, followed by listings on major centralized exchanges. We're actively negotiating with top-tier exchanges for optimal liquidity."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to the most common questions about SHINE Token
          </p>
        </div>

        <div className="glass-card border-primary/30 p-8 animate-scale-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/30 rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="glass-card border-secondary/30 p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gradient-secondary">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Reach out through any of our official channels.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors"
              >
                <span>💬</span>
                <span>Telegram</span>
              </a>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors"
              >
                <span>🐦</span>
                <span>Twitter</span>
              </a>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent/20 hover:bg-accent/30 rounded-lg transition-colors"
              >
                <span>📧</span>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;