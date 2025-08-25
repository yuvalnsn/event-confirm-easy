import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Building, Sparkles, Star, Users, Briefcase } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "חתונות ואירושין",
      description: "תתחילו את החיים המשותפים בלי לחשוב על מי יגיע ומי לא",
      icon: Heart,
      color: "text-pink-500"
    },
    {
      title: "אירועי חברה",
      description: "ניהול מקצועי של אירועים עסקיים עם דוחות מפורטים",
      icon: Building,
      color: "text-blue-500"
    },
    {
      title: "חינה וקידושין",
      description: "חגיגות משפחתיות עם מעקב נוח אחר האורחים",
      icon: Sparkles,
      color: "text-purple-500"
    },
    {
      title: "בר/בת מצווה",
      description: "יום מיוחד לילד שלכם בלי הלחץ של ספירת אורחים",
      icon: Star,
      color: "text-yellow-500"
    },
    {
      title: "כנסים וימי עיון",
      description: "אירועים מקצועיים עם תכנון מדויק של מספר המשתתפים",
      icon: Users,
      color: "text-green-500"
    },
    {
      title: "מסיבות פרטיות",
      description: "יום הולדת, חגיגת פרישה או כל אירוע שחלמתם עליו",
      icon: Briefcase,
      color: "text-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16" dir="rtl">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            מתאים לכל סוג אירוע
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            בין אם זה אירוע אינטימי או חגיגה גדולה - אנחנו נדאג שתדעו בדיוק מי מגיע
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