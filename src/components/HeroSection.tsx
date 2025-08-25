import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { MessageCircle, CheckCircle, Clock, Users } from "lucide-react";

const HeroSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo request:", { name, phone });
    // Here you would typically send to your backend
    setName("");
    setPhone("");
  };

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main Headline */}
          <div className="space-y-4" dir="rtl">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground">
              נגמרו לכם הדאגות 
              <br />
              <span className="text-primary">מהאירוע!</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground">
              תנו לאורחים לאשר הגעה בווטסאפ ותקבלו עדכונים בזמן אמת
            </h2>
          </div>

          {/* Demo Form */}
          <div className="bg-card p-8 rounded-2xl shadow-elegant max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
              <Input
                placeholder="שם מלא"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-right"
                required
              />
              <Input
                placeholder="טלפון"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-right"
                required
              />
              <Button type="submit" variant="hero" className="w-full">
                שלחו לי דוגמא
              </Button>
            </form>
          </div>

          {/* Features Icons */}
          <div className="flex justify-center items-center gap-8 pt-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MessageCircle className="h-6 w-6 text-primary" />
              <span>ווטסאפ</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span>אישורים מיידיים</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-6 w-6 text-primary" />
              <span>זמן אמת</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-6 w-6 text-primary" />
              <span>ניהול אורחים</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;