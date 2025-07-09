import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "$0",
      description: "Perfect for getting started",
      icon: <Star className="h-6 w-6" />,
      features: [
        "1 resume analysis",
        "Basic ATS score",
        "Keyword matching",
        "Standard recommendations",
        "PDF export"
      ],
      buttonText: "Start Free",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      description: "Best for job seekers",
      icon: <Zap className="h-6 w-6" />,
      features: [
        "Unlimited analyses",
        "Detailed ATS reports",
        "Advanced keyword optimization",
        "AI-powered suggestions",
        "Multiple format exports",
        "Job description matching",
        "Priority support"
      ],
      buttonText: "Get Pro",
      buttonVariant: "gradient" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$49",
      description: "For teams and recruiters",
      icon: <Crown className="h-6 w-6" />,
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Bulk resume analysis",
        "Custom branding",
        "API access",
        "Advanced analytics",
        "Dedicated support",
        "Custom integrations"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "gradient-secondary" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Simple, Transparent
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start free, upgrade when you're ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-glow ${
                plan.popular 
                  ? 'border-primary shadow-medium scale-105' 
                  : 'border-border hover:border-primary/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>
              )}
              
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pt-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                  plan.popular ? 'bg-gradient-primary text-white' : 'bg-muted text-muted-foreground'
                }`}>
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== "$0" && <span className="text-muted-foreground">/month</span>}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Have questions? 
            <Button variant="link" className="p-0 ml-2 h-auto">
              Check our FAQ
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;