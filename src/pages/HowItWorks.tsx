import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Upload, Settings, Send, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <Upload className="h-8 w-8 text-primary" />,
      title: "העלאת רשימת אורחים",
      description: "העלו את רשימת האורחים שלכם באמצעות קובץ אקסל או הזנה ידנית במערכת",
      details: [
        "תמיכה בפורמטים שונים (Excel, CSV)",
        "ולידציה אוטומטית של מספרי טלפון", 
        "ייבוא מהיר ופשוט"
      ]
    },
    {
      number: "2", 
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "התאמה אישית",
      description: "התאימו את ההודעות, התזמון והגדרות נוספות לפי סוג האירוע שלכם",
      details: [
        "תבניות הודעות מותאמות אישית",
        "קביעת זמני משלוח מתקדמים",
        "הגדרות תזכורות אוטומטיות"
      ]
    },
    {
      number: "3",
      icon: <Send className="h-8 w-8 text-primary" />,
      title: "שליחת הודעות",
      description: "המערכת שולחת אוטומטיות הודעות אישור הגעה לכל האורחים דרך WhatsApp",
      details: [
        "שליחה מדורגת לפי העדפות",
        "מעקב אחר סטטוס המשלוח",
        "תמיכה בהודעות מולטימדיה"
      ]
    },
    {
      number: "4",
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "מעקב ודיווח",
      description: "עקבו אחר התגובות, קבלו דוחות מפורטים ותכננו את האירוע בהתאם",
      details: [
        "דוחות בזמן אמת",
        "ניתוח סטטיסטיקות תגובות",
        "ייצוא נתונים לתכנון האירוע"
      ]
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
          <h1 className="text-4xl font-bold text-foreground mb-4">איך זה עובד</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ארבעה שלבים פשוטים לניהול מקצועי של אישורי הגעה לאירוע שלכם
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card shadow-elegant hover:shadow-glow transition-all duration-300" dir="rtl">
              <CardHeader>
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{step.number}</span>
                  </div>
                  {step.icon}
                  <div>
                    <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-1">
                      {step.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pr-18">
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card shadow-elegant" dir="rtl">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">יתרונות המערכת</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-muted-foreground">חיסכון בזמן של עד 90%</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-muted-foreground">דיוק גבוה במעקב אישורים</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-muted-foreground">ממשק ידידותי למשתמש</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-muted-foreground">תמיכה טכנית מקצועית</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-elegant" dir="rtl">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">מתאים לכל סוגי האירועים</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">חתונות ואירועי משפחה</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">אירועי חברה וכנסים</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">בר/בת מצווה</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">מסיבות וחגיגות פרטיות</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card p-8 rounded-xl shadow-elegant text-center mt-12" dir="rtl">
          <h2 className="text-2xl font-bold text-foreground mb-4">מוכנים להתחיל?</h2>
          <p className="text-muted-foreground mb-6">
            צרו קשר עוד היום ותתחילו לחסוך זמן יקר בניהול האירועים שלכם
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              צרו קשר עכשיו
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;