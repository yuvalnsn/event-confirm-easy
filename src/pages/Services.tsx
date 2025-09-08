import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MessageCircle, Users, Calendar, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "אישורי הגעה בווטסאפ",
      description: "שליחת הודעות אישור הגעה אוטומטיות דרך WhatsApp לכל האורחים במהירות ובקלות",
      features: ["הודעות אישיות", "תגובות אוטומטיות", "מעקב בזמן אמת"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "ניהול רשימת אורחים",
      description: "ניהול מקצועי של רשימת האורחים עם מעקב אחר סטטוס האישורים והערות מיוחדות",
      features: ["רשימת אורחים מרכזית", "סינון וחיפוש", "ייבוא מאקסל"]
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "תזמון חכם",
      description: "תזמון אוטומטי של הודעות לפי סוג האירוע והעדפות אישיות",
      features: ["תזמון גמיש", "תזכורות", "משלוח מדורג"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "דוחות ומעקב",
      description: "דוחות מפורטים ומעקב אחר תגובות האורחים לתכנון מיטבי של האירוע",
      features: ["דוחות בזמן אמת", "סטטיסטיקות", "ייצוא נתונים"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowRight className="h-4 w-4 rotate-180" />
          חזרה לעמוד הראשי
        </Link>
        
        <div className="text-center mb-12" dir="rtl">
          <h1 className="text-4xl font-bold text-foreground mb-4">השירותים שלנו</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            פתרונות מקצועיים לניהול אישורי הגעה לאירועים באמצעות WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card shadow-elegant hover:shadow-glow transition-all duration-300" dir="rtl">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {service.icon}
                  <div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card p-8 rounded-xl shadow-elegant text-center" dir="rtl">
          <h2 className="text-2xl font-bold text-foreground mb-4">מוכנים להתחיל?</h2>
          <p className="text-muted-foreground mb-6">
            צרו קשר עכשיו וגלו איך Guest List יכול לפשט לכם את ניהול האירועים
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              צרו קשר
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;