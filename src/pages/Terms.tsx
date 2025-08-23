import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowRight className="h-4 w-4 rotate-180" />
          חזרה לעמוד הראשי
        </Link>
        
        <div className="bg-card p-8 rounded-xl shadow-elegant" dir="rtl">
          <h1 className="text-3xl font-bold text-foreground mb-8">תנאי שימוש</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">פרטי החברה</h2>
              <div className="space-y-2">
                <p><strong>שם החברה:</strong> גסט ליסט אישורי הגעה בווטסאפ</p>
                <p><strong>כתובת:</strong> ההגנה 9, חולון</p>
                <p><strong>טלפון:</strong> 054-218-2880</p>
                <p><strong>אימייל:</strong> info@guest-list.co.il</p>
                <p><strong>אתר:</strong> guest-list.co.il</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">השירות</h2>
              <p>גסט ליסט מספקת שירותי ניהול אישורי הגעה לאירועים באמצעות WhatsApp. השירות כולל:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>שליחת הזמנות לאירועים</li>
                <li>קבלת אישורי הגעה</li>
                <li>ניהול רשימת אורחים</li>
                <li>מעקב אחר תגובות</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">התחייבויות המשתמש</h2>
              <p>על ידי שימוש בשירות, אתם מתחייבים:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>לספק מידע מדויק ועדכני</li>
                <li>לא להשתמש בשירות למטרות בלתי חוקיות</li>
                <li>לכבד את פרטיות האורחים</li>
                <li>לקבל רק אישורי הגעה מאנשים שנתנו הסכמה</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">מדיניות ביטול והחזר</h2>
              <p>ניתן לבטל את השירות בכל עת. החזרים יבוצעו על פי המדיניות שתפורסם עם תחילת השירות המסחרי.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">אחריות ואחריות מוגבלת</h2>
              <p>אנו מתחייבים לספק שירות איכותי, אך לא נישא באחריות לנזקים עקיפים או אובדן מידע. השירות ניתן "כמו שהוא".</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">שינויים בתנאים</h2>
              <p>התנאים עשויים להתעדכן מעת לעת. המשך השימוש בשירות מהווה הסכמה לתנאים המעודכנים.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">דין חל ושיפוט</h2>
              <p>התנאים כפופים לדיני מדינת ישראל ולסמכות השיפוט של בתי המשפט בישראל.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">יצירת קשר</h2>
              <p>לכל שאלה בנוגע לתנאי השימוש:</p>
              <div className="mt-2 space-y-1">
                <p>אימייל: info@guest-list.co.il</p>
                <p>טלפון: 054-218-2880</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;