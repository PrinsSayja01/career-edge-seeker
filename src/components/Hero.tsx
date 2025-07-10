
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in">
            Beat the ATS.
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Land Your Dream Job.
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Get your resume analyzed by AI, optimize for ATS systems, and discover exactly what recruiters are looking for.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Link to="/cv-analysis">
              <Button size="xl" variant="secondary" className="group">
                Analyze My Resume Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="xl" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Watch Demo
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-3">
                <Upload className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-1">Upload & Analyze</h3>
              <p className="text-white/70 text-sm">Get instant ATS score and feedback</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-3">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-1">Match Job Requirements</h3>
              <p className="text-white/70 text-sm">Compare with job descriptions</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-3">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-1">Optimize & Win</h3>
              <p className="text-white/70 text-sm">Get actionable improvement tips</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
