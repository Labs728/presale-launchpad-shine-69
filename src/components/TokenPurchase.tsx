import { useState } from "react";
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";

const TokenPurchase = () => {
  const { publicKey, connected } = useWallet();
  const [solAmount, setSolAmount] = useState("");
  const [shineAmount, setShineAmount] = useState("");
  const shinePrice = 0.12; // USD per SHINE
  const solPrice = 250; // USD per SOL

  const handleSolChange = (value: string) => {
    setSolAmount(value);
    const solValue = parseFloat(value) || 0;
    const usdValue = solValue * solPrice;
    const shineTokens = usdValue / shinePrice;
    setShineAmount(shineTokens.toFixed(2));
  };

  const handleShineChange = (value: string) => {
    setShineAmount(value);
    const shineValue = parseFloat(value) || 0;
    const usdValue = shineValue * shinePrice;
    const solNeeded = usdValue / solPrice;
    setSolAmount(solNeeded.toFixed(6));
  };

  const handleBuyTokens = async () => {
    if (!connected || !publicKey) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to purchase tokens.",
        variant: "destructive",
      });
      return;
    }

    if (!solAmount || parseFloat(solAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid SOL amount.",
        variant: "destructive",
      });
      return;
    }

    // Dummy function for token purchase
    try {
      toast({
        title: "Processing transaction...",
        description: "Your token purchase is being processed.",
      });

      // Simulate transaction delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Purchase successful!",
        description: `Successfully purchased ${shineAmount} SHINE tokens for ${solAmount} SOL.`,
      });

      // Reset form
      setSolAmount("");
      setShineAmount("");
    } catch (error) {
      toast({
        title: "Transaction failed",
        description: "There was an error processing your transaction.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="buy" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="text-gradient-primary">Buy SHINE Tokens</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Secure your position in the future of DeFi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Purchase Form */}
          <Card className="glass-card border-primary/30 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-gradient-secondary">
                Token Exchange
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* SOL Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Pay with SOL</label>
                <div className="relative">
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={solAmount}
                    onChange={(e) => handleSolChange(e.target.value)}
                    className="pr-16 bg-background/50 border-border/50"
                  />
                  <Badge className="absolute right-2 top-1/2 -translate-y-1/2">
                    SOL
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  ≈ ${((parseFloat(solAmount) || 0) * solPrice).toFixed(2)} USD
                </p>
              </div>

              <div className="text-center">
                <div className="w-8 h-8 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary">⇅</span>
                </div>
              </div>

              {/* SHINE Output */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Receive SHINE</label>
                <div className="relative">
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={shineAmount}
                    onChange={(e) => handleShineChange(e.target.value)}
                    className="pr-20 bg-background/50 border-border/50"
                  />
                  <Badge className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-accent">
                    SHINE
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  @ $0.12 per SHINE
                </p>
              </div>

              <Separator />

              {/* Wallet Connection */}
              <div className="flex flex-col items-center">
                {!connected ? (
                  <div className="space-y-4 w-full">
                    <p className="text-sm text-muted-foreground text-center">
                      Connect your Solana wallet to purchase tokens
                    </p>
                    <div className="flex justify-center">
                      <WalletMultiButton className="!bg-gradient-primary !rounded-md !text-primary-foreground !font-medium !text-lg !py-6 !px-8" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 w-full">
                    <p className="text-sm text-muted-foreground text-center">
                      Wallet Connected: {publicKey?.toString().slice(0, 8)}...{publicKey?.toString().slice(-8)}
                    </p>
                    <Button 
                      className="w-full btn-crypto-primary text-lg py-6"
                      disabled={!solAmount || parseFloat(solAmount) <= 0}
                      onClick={handleBuyTokens}
                    >
                      Buy SHINE Tokens
                    </Button>
                  </div>
                )}
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground text-center">
                  Accepted Payment Method
                </p>
                <div className="flex justify-center gap-3">
                  <Badge variant="outline" className="border-secondary/50">SOL</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Purchase Info */}
          <div className="space-y-6">
            <Card className="glass-card border-accent/30">
              <CardHeader>
                <CardTitle className="text-xl text-gradient-accent">
                  Presale Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">Tokens Sold</span>
                  <span className="font-semibold text-accent text-right whitespace-nowrap">2,750,000 SHINE</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">Available Tokens</span>
                  <span className="font-semibold text-accent text-right whitespace-nowrap">1,250,000 SHINE</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">Current Stage</span>
                  <span className="font-semibold text-accent text-right whitespace-nowrap">Stage 2 of 4</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">Current Price</span>
                  <span className="font-semibold text-right whitespace-nowrap">$0.12</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">Next Stage Price</span>
                  <span className="font-semibold text-right whitespace-nowrap">$0.15</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">Listing Price</span>
                  <span className="font-semibold text-primary text-right whitespace-nowrap">$0.20</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">Min Purchase</span>
                  <span className="font-semibold text-right whitespace-nowrap">0.1 SOL</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">Max Purchase</span>
                  <span className="font-semibold text-right whitespace-nowrap">100 SOL</span>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenPurchase;