import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowRight className="h-4 w-4 rotate-180" />
          חזרה לעמוד הראשי
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-card p-8 rounded-xl shadow-elegant" dir="rtl">
            <h1 className="text-3xl font-bold text-foreground mb-6">צרו קשר</h1>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MessageCircle className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">גסט ליסט</h3>
                  <p className="text-muted-foreground">אישורי הגעה בווטסאפ</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-foreground font-medium">אימייל</p>
                    <a href="mailto:info@guest-list.co.il" className="text-primary hover:text-primary/80">
                      info@guest-list.co.il
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-foreground font-medium">טלפון</p>
                    <a href="tel:0542182880" className="text-primary hover:text-primary/80">
                      054-218-2880
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-foreground font-medium">כתובת</p>
                    <p className="text-muted-foreground">ההגנה 9, חולון</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-foreground mb-2">שעות פעילות</h3>
                <p className="text-muted-foreground">ראשון - חמישי: 9:00-18:00</p>
                <p className="text-muted-foreground">שישי: 9:00-14:00</p>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-foreground mb-2">דרכי תמיכה נוספות</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• תמיכה באימייל - תגובה תוך 24 שעות</li>
                  <li>• תמיכה טלפונית - בשעות הפעילות</li>
                  <li>• WhatsApp - לתמיכה מהירה</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-elegant" dir="rtl">
            <h2 className="text-2xl font-bold text-foreground mb-6">שלחו לנו הודעה</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  שם מלא
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="הכניסו את השם שלכם"
                  dir="rtl"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  אימייל
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="הכניסו את האימייל שלכם"
                  dir="rtl"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  הודעה
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="כתבו את ההודעה שלכם כאן..."
                  dir="rtl"
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" variant="hero" className="w-full">
                שלחו הודעה
              </Button>
            </form>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                נשמח לעזור! נחזור אליכם בהקדם האפשרי
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;