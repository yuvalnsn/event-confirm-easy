import { MessageCircle, Clock, Shield, Users, CheckCircle, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "אישורי הגעה בוואטסאפ",
      description: "האורחים שלכם יכולים לאשר הגעה בקלות דרך וואטסאפ - הפלטפורמה שהם הכי אוהבים להשתמש בה"
    },
    {
      icon: Clock,
      title: "חיסכון בזמן",
      description: "אין צורך בטלפונים אינסופיים או בדיקת מיילים. הכל מתנהל אוטומטית דרך וואטסאפ"
    },
    {
      icon: Shield,
      title: "אמין ומאובטח",
      description: "המידע שלכם מאובטח ופרטי. רק אתם תוכלו לראות את רשימת האורחים ואישורי ההגעה"
    },
    {
      icon: Users,
      title: "ניהול קל של אורחים",
      description: "רואים בזמן אמת מי אישר הגעה, מי לא ענה עדיין, וכמה אנשים מגיעים לאירוע"
    },
    {
      icon: CheckCircle,
      title: "תזכורות אוטומטיות",
      description: "השירות שולח תזכורות אוטומטיות לאורחים שעדיין לא אישרו הגעה"
    },
    {
      icon: BarChart3,
      title: "דוחות ונתונים",
      description: "קבלו דוחות מפורטים על מצב אישורי ההגעה ותוכלו לתכנן את האירוع בהתאם"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            למה לבחור בשירות שלנו?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            פתרון מושלם למארגני אירועים שרוצים לחסוך זמן ולנהל אישורי הגעה בצורה חכמה ויעילה
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3" dir="rtl">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" dir="rtl">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;