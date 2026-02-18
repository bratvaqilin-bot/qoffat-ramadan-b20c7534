import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "212XXXXXXXXX"; // ضع رقمك هنا
const MESSAGE = "السلام عليكم، أنا مهتم بقفة رمضان 🌙 بثمن 599 درهم مع التوصيل المجاني إلى فاس";

const WhatsAppButton = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-cairo font-bold text-lg px-8 py-4 rounded-2xl shadow-gold-lg animate-pulse-gold transition-all duration-300 hover:scale-105 hover:shadow-gold-lg"
    >
      <span>اطلب الآن عبر واتساب</span>
      <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
      <span>📱</span>
    </a>
  );
};

export default WhatsAppButton;
