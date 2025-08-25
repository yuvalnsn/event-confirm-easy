import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, CreditCard } from "lucide-react";

const HowItWorksSection = () => {
  const features = [
    {
      title: "אישורי הגעה בווטסאפ",
      description: "האורחים מקבלים הזמנה מעוצבת ומאשרים הגעה ישירות בווטסאפ",
      icon: MessageCircle,
      color: "text-green-500"
    },
    {
      title: "שירות טלפוני אנושי",
      description: "מוקד טלפוני אנושי לטיפול באורחים שמעדיפים לאשר בטלפון",
      icon: Phone,
      color: "text-blue-500"
    },
    {
      title: "מתנות באשראי",
      description: "האורחים יכולים לרכוש מתנות באשראי ישירות דרך המערכת",
      icon: CreditCard,
      color: "text-purple-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16" dir="rtl">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            איך זה עובד?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            שלושה שירותים מובילים שיהפכו את האירוע שלכם לחוויה מושלמת
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 space-y-4" dir="rtl">
                <div className="mx-auto w-20 h-20 bg-background rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className={`h-10 w-10 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;