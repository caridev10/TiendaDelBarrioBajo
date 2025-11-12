import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TiendaDelBarrioBajo
            </h1>
            <div className="hidden md:flex gap-6">
              <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
                Inicio
              </a>
              <a href="#productos" className="text-foreground hover:text-primary transition-smooth font-medium">
                Productos
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
                Ofertas
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
                Contacto
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-secondary text-secondary-foreground">
                0
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
