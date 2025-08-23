import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <MessageCircle className="h-12 w-12 text-primary animate-float" />
            <span className="text-2xl font-bold text-foreground">Guest List</span>
          </div>

          {/* Main Message */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              בקרוב...
            </h1>
            <h2 className="text-xl lg:text-2xl text-muted-foreground" dir="rtl">
              אישורי הגעה בווטסאפ
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto" dir="rtl">
              הדרך החכמה לנהל אישורי הגעה לאירועים
            </p>
          </div>

          {/* Email Signup */}
          <div className="bg-card p-6 rounded-xl shadow-elegant max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="הכניסו את המייל שלכם לעדכונים"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                dir="rtl"
                required
              />
              <Button type="submit" variant="hero" className="w-full">
                הירשמו לעדכונים
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 bg-card/80 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-6 py-4">
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
          <div className="text-center mt-2 text-xs text-muted-foreground">
            © 2024 גסט ליסט אישורי הגעה בווטסאפ
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;