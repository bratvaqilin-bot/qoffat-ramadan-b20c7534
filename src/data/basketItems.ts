import { Wheat, Coffee, Droplets, Cookie, Milk, Flame, Citrus, Soup, Package, Star, Candy, FlaskConical, Leaf, Beef, Sparkles } from "lucide-react";

export interface BasketItem {
  name: string;
  quantity: string;
  icon: React.ElementType;
}

export const basketItems: BasketItem[] = [
  { name: "فورص الاتقان", quantity: "5kg", icon: Wheat },
  { name: "فينو", quantity: "5kg", icon: Wheat },
  { name: "ثمر مصر", quantity: "1kg", icon: Star },
  { name: "محمصة", quantity: "1kg", icon: Coffee },
  { name: "شعرية", quantity: "1kg", icon: Soup },
  { name: "حمص", quantity: "1kg", icon: Leaf },
  { name: "مطيشة دليسيا", quantity: "1kg", icon: Citrus },
  { name: "روز أصفر", quantity: "1kg", icon: Sparkles },
  { name: "أتاي سلطان كبير", quantity: "1", icon: Coffee },
  { name: "سكر مورصو", quantity: "2", icon: Candy },
  { name: "عسل كبير", quantity: "1kg", icon: Droplets },
  { name: "حليب نصف ليتر", quantity: "6", icon: Milk },
  { name: "قهوة", quantity: "1/4", icon: Coffee },
  { name: "كعبة (سكينجبير)", quantity: "1/4", icon: FlaskConical },
  { name: "تحميرة", quantity: "1/4", icon: Flame },
  { name: "خرقوم", quantity: "1/4", icon: FlaskConical },
  { name: "كامون", quantity: "1/4", icon: Leaf },
  { name: "زبدة ليليا صغيرة", quantity: "1", icon: Cookie },
  { name: "الزيت", quantity: "2L", icon: Droplets },
];
