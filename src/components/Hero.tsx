import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-crypto.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer (set to 30 days from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const presaleProgress = 65; // 65% completed

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <Badge variant="outline" className="bg-primary/20 text-primary border-primary/50 mb-6">
            🚀 Presale Live Now
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient-primary glow-text">SHINE</span>
            <br />
            <span className="text-foreground">Token Presale</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            The next generation DeFi token powering the future of decentralized finance. 
            Join the revolution today.
          </p>
          
          {/* Countdown Timer */}
          <div className="glass-card p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto animate-scale-in">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gradient-secondary">
              Presale Ends In
            </h3>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-gradient-primary rounded-lg p-2 sm:p-3 lg:p-4 mb-2">
                    <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-primary-foreground">
                      {value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground capitalize">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="text-accent">{presaleProgress}%</span>
              </div>
              <Progress value={presaleProgress} className="h-3" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$2.6M raised</span>
                <span>$4M goal</span>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="btn-crypto-primary text-lg px-8 py-6 animate-glow"
              onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Buy SHINE Tokens
            </Button>
            <Link to="/whitepaper">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
              >
                <FileText className="mr-2 h-5 w-5" />
                White Paper
              </Button>
            </Link>
          </div>
          
          {/* Token Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 max-w-3xl mx-auto">
            <div className="glass-card p-4 sm:p-6 text-center animate-float">
              <div className="text-2xl sm:text-3xl font-bold text-gradient-accent mb-2">$0.12</div>
              <div className="text-sm sm:text-base text-muted-foreground">Current Price</div>
            </div>
            <div className="glass-card p-4 sm:p-6 text-center animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-gradient-secondary mb-2">100M</div>
              <div className="text-sm sm:text-base text-muted-foreground">Total Supply</div>
            </div>
            <div className="glass-card p-4 sm:p-6 text-center animate-float" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-gradient-primary mb-2">25%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Presale Allocation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
