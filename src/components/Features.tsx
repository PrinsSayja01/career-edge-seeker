import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Brain, FileSearch, Lightbulb, Shield, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "ATS Score Analysis",
      description: "Get a comprehensive score (0-100) showing how well your resume performs against Applicant Tracking Systems.",
      color: "text-primary"
    },
    {
      icon: <FileSearch className="h-8 w-8" />,
      title: "Keyword Optimization",
      description: "Compare your resume against job descriptions and get keyword recommendations to improve match rates.",
      color: "text-secondary"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Insights",
      description: "Receive intelligent suggestions for content, formatting, and structure improvements using advanced AI.",
      color: "text-accent"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Smart Recommendations",
      description: "Get personalized tips on resume sections, bullet points, and overall presentation to stand out.",
      color: "text-warning"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Results",
      description: "Upload your resume and get detailed analysis within 30 seconds. No waiting, no delays.",
      color: "text-primary"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy Protected",
      description: "Your resume data is encrypted and secure. We never share your information with third parties.",
      color: "text-accent"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Everything You Need to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Land Your Dream Job</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive suite of tools helps you create ATS-friendly resumes that get noticed by recruiters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Resumes Analyzed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary mb-2">70%</div>
            <div className="text-muted-foreground">Higher Interview Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">30s</div>
            <div className="text-muted-foreground">Average Analysis Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;