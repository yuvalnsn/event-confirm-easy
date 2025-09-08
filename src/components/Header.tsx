import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <MessageCircle className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Guest List</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8" dir="rtl">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              דף הבית
            </Link>
            <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
              השירותים שלנו
            </Link>
            <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              איך זה עובד
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              צרו קשר
            </Link>
          </nav>

          {/* Contact Button */}
          <Button variant="hero" className="flex items-center gap-2" dir="rtl">
            <Phone className="h-4 w-4" />
            054-218-2880
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
