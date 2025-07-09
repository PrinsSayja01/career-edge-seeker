import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Upload } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-secondary rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-8">
            <Star className="h-4 w-4 text-warning" />
            <span className="text-sm text-muted-foreground">Trusted by 10,000+ job seekers</span>
          </div>

          {/* Headlines */}
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
            Get Your Resume
            <span className="bg-gradient-primary bg-clip-text text-transparent"> ATS-Ready</span>
            <br />
            In Seconds
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Beat the bots and land your dream job. Our AI analyzes your resume against ATS systems 
            and provides actionable insights to increase your chances by 70%.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="gradient" size="xl" className="group">
              <Upload className="h-5 w-5 mr-2" />
              Analyze My Resume Free
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Free analysis included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Results in 30 seconds</span>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl shadow-large p-8 backdrop-blur-glass">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-muted/30">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Upload Your Resume</h3>
                <p className="text-sm text-muted-foreground">PDF or DOCX files supported</p>
              </div>

              {/* Sample Results */}
              <div className="space-y-4">
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-accent">ATS Score</span>
                    <span className="text-2xl font-bold text-accent">87%</span>
                  </div>
                  <div className="w-full bg-accent/20 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: "87%" }}></div>
                  </div>
                </div>

                <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-warning">Keywords Match</span>
                    <span className="text-2xl font-bold text-warning">73%</span>
                  </div>
                  <div className="w-full bg-warning/20 rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full" style={{ width: "73%" }}></div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  ✨ + 15 actionable improvement tips
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;