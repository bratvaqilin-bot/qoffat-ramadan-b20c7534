import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "212650292255";
const MESSAGE = "السلام عليكم، أنا مهتم بقفة رمضان 🌙 بثمن 599 درهم مع التوصيل المجاني إلى جميع المدن";

const WhatsAppButton = () => {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="group inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-cairo font-bold text-lg px-8 py-4 rounded-2xl shadow-gold-lg animate-pulse-gold transition-all duration-300 hover:scale-105 hover:shadow-gold-lg cursor-pointer border-0"
    >
      <span>اطلب الآن عبر واتساب</span>
      <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
      <span>📱</span>
    </button>
  );
};

export default WhatsAppButton;
