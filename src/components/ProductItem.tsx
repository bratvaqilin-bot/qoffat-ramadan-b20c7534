import { BasketItem } from "@/data/basketItems";

const ProductItem = ({ item }: { item: BasketItem }) => {
  const Icon = item.icon;
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl glow-border bg-secondary/50 transition-all duration-300 hover:bg-secondary hover:scale-[1.02]">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <span className="font-cairo font-semibold text-foreground text-sm flex-1">{item.name}</span>
      <span className="font-cairo font-bold text-primary text-sm bg-secondary px-3 py-1 rounded-full">
        {item.quantity}
      </span>
    </div>
  );
};

export default ProductItem;
