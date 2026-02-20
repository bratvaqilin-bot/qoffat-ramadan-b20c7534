import { Heart, Users, Gift, Truck, ShieldCheck, Star } from "lucide-react";
import heroImage from "@/assets/ramadan-basket.jpg";
import ProductItem from "@/components/ProductItem";
import WhatsAppButton from "@/components/WhatsAppButton";
import { basketItems } from "@/data/basketItems";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-emerald">
      {/* Header */}
      <header className="text-center py-6 border-b border-border/50">
        <h2 className="font-amiri text-2xl text-gradient-gold tracking-wide">
          🌙 Store Makaoui 🌙
        </h2>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-10 px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />
        </div>
        
        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h1 className="font-amiri text-5xl md:text-6xl text-gradient-gold mb-4 leading-tight">
              قفة رمضان الكاملة
            </h1>
            <p className="font-cairo text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              جهّز بيتك لشهر الخير والبركة 🌙 أو تصدّق على المحتاجين والمساكين بقفة متكاملة تدخل الفرحة على القلوب
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto max-w-3xl mb-10">
            <div className="card-3d overflow-hidden rounded-3xl">
              <img
                src={heroImage}
                alt="قفة رمضان الكاملة"
                className="w-full h-auto animate-float"
              />
              {/* Price Badge */}
              <div className="absolute top-4 left-4 bg-gradient-gold text-primary-foreground font-cairo font-black text-2xl px-6 py-3 rounded-2xl shadow-gold-lg transform -rotate-6">
                <span className="block text-sm font-bold line-through opacity-70">699 درهم</span>
                599 درهم
              </div>
              {/* Free Delivery Badge */}
              <div className="absolute bottom-4 right-4 bg-secondary text-foreground font-cairo font-bold text-base px-5 py-2 rounded-xl glow-border flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary" />
                توصيل مجاني إلى جميع المدن
              </div>
            </div>
          </div>

          {/* Emotional Appeal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
            <div className="card-3d p-6 text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-amiri text-xl text-foreground mb-2">لعائلتك 🏠</h3>
              <p className="font-cairo text-muted-foreground text-sm">
                وفّر وقتك وفلوسك، قفة كاملة فيها كلشي كيحتاجو الدار فرمضان
              </p>
            </div>
            <div className="card-3d p-6 text-center">
              <Heart className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-amiri text-xl text-foreground mb-2">للصدقة والتبرع 🤲</h3>
              <p className="font-cairo text-muted-foreground text-sm">
                أدخل الفرحة على قلوب المحتاجين والمساكين في شهر الرحمة والغفران
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: ShieldCheck, text: "جودة مضمونة" },
              { icon: Truck, text: "توصيل مجاني" },
              { icon: Gift, text: "تغليف أنيق" },
              { icon: Star, text: "+500 طلب" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 bg-secondary/60 px-4 py-2 rounded-full glow-border">
                <badge.icon className="w-4 h-4 text-primary" />
                <span className="font-cairo text-sm font-semibold text-foreground">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-10 px-4">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-amiri text-3xl text-center text-gradient-gold mb-8">
            🧺 محتويات القفة
          </h2>
          <div className="card-3d p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {basketItems.map((item, i) => (
                <ProductItem key={i} item={item} />
              ))}
            </div>
            
            {/* Total */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-gold text-center">
              <p className="font-cairo text-primary-foreground font-bold text-sm mb-1">
                كلشي فقفة وحدة بثمن استثنائي
              </p>
              <p className="font-amiri text-4xl font-bold text-primary-foreground">
                599 درهم فقط
              </p>
              <p className="font-cairo text-primary-foreground/80 text-sm mt-1">
                🚚 التوصيل مجاني إلى جميع المدن
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Section */}
      <section className="py-10 px-4 text-center">
        <div className="container max-w-2xl mx-auto">
          <h2 className="font-amiri text-3xl text-gradient-gold mb-4">
            ✨ لا تفوّت هذا العرض المحدود
          </h2>
          <p className="font-cairo text-muted-foreground text-lg mb-3 leading-relaxed">
            «مَن فَطَّرَ صائِمًا كانَ لَهُ مِثْلُ أجْرِهِ»
          </p>
          <p className="font-cairo text-foreground text-base mb-8 leading-relaxed">
            سواء كانت لعائلتك أو صدقة جارية، هذه القفة ستملأ البيوت بالبركة والفرح 🌙
          </p>
          
          <WhatsAppButton />
          
          <p className="font-cairo text-muted-foreground text-xs mt-6">
            ⏰ الكمية محدودة — اطلب الآن قبل نفاذ المخزون
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6 text-center">
        <p className="font-cairo text-muted-foreground text-sm">
          © 2026 Store Makaoui — فاس، المغرب 🇲🇦
        </p>
      </footer>
    </div>
  );
};

export default Index;
