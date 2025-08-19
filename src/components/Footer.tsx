import { MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Guest List</span>
            </div>
            <p className="text-muted-foreground" dir="rtl">
              הפתרון החכם לניהול אישורי הגעה בוואטסאפ
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground" dir="rtl">השירותים שלנו</h4>
            <ul className="space-y-2 text-muted-foreground" dir="rtl">
              <li>אישורי הגעה בוואטסאפ</li>
              <li>ניהול רשימת אורחים</li>
              <li>תזכורות אוטומטיות</li>
              <li>דוחות ונתונים</li>
            </ul>
          </div>

          {/* Event Types */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground" dir="rtl">סוגי אירועים</h4>
            <ul className="space-y-2 text-muted-foreground" dir="rtl">
              <li>חתונות</li>
              <li>בר/בת מצווה</li>
              <li>יום הולדת</li>
              <li>אירועי עסקים</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground" dir="rtl">צרו קשר</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">info@guestlist.co.il</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">050-123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">WhatsApp Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p dir="rtl">
            © 2024 Guest List. כל הזכויות שמורות. | אישורי הגעה בוואטסאפ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;