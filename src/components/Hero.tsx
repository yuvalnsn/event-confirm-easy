import Header from "./Header";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import HowItWorksSection from "./HowItWorksSection";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-card/80 backdrop-blur-sm border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              מדיניות פרטיות
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/terms" className="hover:text-primary transition-colors">
              תנאי שימוש
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/contact" className="hover:text-primary transition-colors">
              צרו קשר
            </Link>
          </div>
          <div className="text-center mt-4 text-xs text-muted-foreground">
            גסט ליסט מופעל על ידי וויספ
          </div>
          <div className="text-center mt-4 text-xs text-muted-foreground">
            Guest List Powered By Wisp
          </div>
          <div className="text-center mt-2 text-xs text-muted-foreground">
            <span>📧 info@guest-list.co.il</span>
            <span className="mx-2">•</span>
            <span>📞 054-218-2880</span>
            <span className="mx-2">•</span>
            <span>📍 ההגנה 9, חולון, מרכז, 5827218, ישראל</span>
          </div>
          <div className="text-center mt-2 text-xs text-muted-foreground">
            בעלים: ניימן יובל חיים
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
