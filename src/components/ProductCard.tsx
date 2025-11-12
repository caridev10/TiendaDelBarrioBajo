import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
  badge?: string;
}

const ProductCard = ({ image, name, price, originalPrice, badge }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-strong transition-smooth cursor-pointer">
      <div className="relative overflow-hidden bg-muted aspect-square">
        {badge && (
          <Badge className="absolute top-3 right-3 z-10 bg-secondary text-secondary-foreground">
            {badge}
          </Badge>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-smooth">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="default">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
