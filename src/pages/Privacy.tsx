import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowRight className="h-4 w-4 rotate-180" />
          חזרה לעמוד הראשי
        </Link>
        
        <div className="bg-card p-8 rounded-xl shadow-elegant" dir="rtl">
          <h1 className="text-3xl font-bold text-foreground mb-8">מדיניות פרטיות</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">פרטי בעל השירות</h2>
              <div className="space-y-2">
                <p><strong>עוסק מורשה:</strong>ניימן יובל חיים (וויספ)</p>
                <p><strong>כתובת:</strong> ההגנה 9, חולון, מרכז, 5827218, ישראל</p>
                <p><strong>טלפון:</strong> 054-218-2880</p>
                <p><strong>אימייל:</strong> info@guest-list.co.il</p>
                <p><strong>אתר:</strong> guest-list.co.il</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">איסוף מידע</h2>
              <p>אנו אוספים מידע אישי כאשר אתם נרשמים לשירות שלנו, כולל:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>כתובת אימייל</li>
                <li>מספר טלפון (לשירותי WhatsApp)</li>
                <li>מידע על האירועים שלכם</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">שימוש במידע</h2>
              <p>אנו משתמשים במידע שלכם כדי:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>לספק שירותי אישורי הגעה בWhatsApp</li>
                <li>לשלוח עדכונים על השירות</li>
                <li>לתמוך בלקוחות</li>
                <li>לשפר את השירות שלנו</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">הסכמה לקבלת הודעות</h2>
              <p>על ידי הרשמה לשירות, אתם מסכימים לקבל:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>הודעות עדכון על השירות</li>
                <li>הודעות תמיכה טכנית</li>
                <li>הודעות מערכת חשובות</li>
              </ul>
              <p className="mt-2">תוכלו לבטל את ההרשמה בכל עת על ידי פנייה אלינו.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">אבטחת מידע</h2>
              <p>אנו מתחייבים לשמור על המידע שלכם בצורה בטוחה ולא לחלוק אותו עם צדדים שלישיים ללא הסכמתכם.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">יצירת קשר</h2>
              <p>לכל שאלה או בקשה בנוגע למדיניות הפרטיות, צרו קשר:</p>
              <div className="mt-2 space-y-1">
                <p>אימייל: info@guest-list.co.il</p>
                <p>טלפון: 054-218-2880</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">עדכון המדיניות</h2>
              <p>מדיניות הפרטיות עשויה להתעדכן מעת לעת. העדכון ייכנס לתוקף עם פרסומו באתר.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
