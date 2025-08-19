import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { MessageCircle, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Guest List</span>
          </div>
          <div className="text-sm text-muted-foreground">
            בקרוב...
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Guest List
                <br />
                <span className="text-2xl lg:text-3xl text-muted-foreground">
                  אישורי הגעה בווטסאפ
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                הדרך החכמה והפשוטה ביותר לנהל אישורי הגעה לאירוע שלכם דרך וואטסאפ
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-elegant">
                <MessageCircle className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">וואטסאפ</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-elegant">
                <Calendar className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">ניהול אירועים</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-elegant">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">רשימת אורחים</span>
              </div>
            </div>

            {/* Email Signup */}
            <div className="bg-card p-8 rounded-xl shadow-elegant space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  הירשמו לעדכונים
                </h3>
                <p className="text-muted-foreground">
                  היו הראשונים לדעת כשהשירות יהיה זמין
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="הכניסו את המייל שלכם"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  dir="rtl"
                  required
                />
                <Button type="submit" variant="hero" size="lg">
                  הירשמו
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground text-center">
                לא נשלח ספאם, רק עדכונים חשובים על השקת השירות
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Guest List RSVP Service"
                className="w-full h-auto rounded-2xl shadow-glow animate-float"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Banner */}
      <div className="bg-gradient-hero py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary-foreground font-medium">
            🎉 בקרוב: השקת השירות החדש לניהול אישורי הגעה בוואטסאפ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;