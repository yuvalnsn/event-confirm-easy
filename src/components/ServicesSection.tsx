import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Building, Sparkles, Star, Users, Briefcase } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "אישורי הגעה לחתונה",
      description: "הדרך המושלמת לנהל את רשימת האורחים לחתונה שלכם",
      icon: Heart,
      color: "text-pink-500"
    },
    {
      title: "אירועי חברה",
      description: "אירועים עסקיים מקצועיים עם מעקב מדויק אחר הגעות",
      icon: Building,
      color: "text-blue-500"
    },
    {
      title: "חינה ואירושין",
      description: "חגיגות מסורתיות עם אישורי הגעה בסטייל",
      icon: Sparkles,
      color: "text-purple-500"
    },
    {
      title: "בר/בת מצווה",
      description: "חגיגת המצווה עם ניהול אורחים מקצועי",
      icon: Star,
      color: "text-yellow-500"
    },
    {
      title: "כנסים ואירועים",
      description: "אירועים גדולים עם אישורי הגעה ממוחשבים",
      icon: Users,
      color: "text-green-500"
    },
    {
      title: "אירועים פרטיים",
      description: "כל סוג אירוע פרטי עם מעקב מקצועי",
      icon: Briefcase,
      color: "text-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16" dir="rtl">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            אז מה אתם חוגגים?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            הגיע הזמן לתכנן אירוע בלי בלגן ולהתעדכן מהמוזמנים שלכם בזמן אמת.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4" dir="rtl">
                <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                <Button variant="outline" className="mt-4">
                  עוד מידע
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;