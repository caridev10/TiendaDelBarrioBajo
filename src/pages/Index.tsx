import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import jerseyImage from "@/assets/jersey-home.jpg";
import scarfImage from "@/assets/scarf.jpg";
import capImage from "@/assets/cap.jpg";
import hoodieImage from "@/assets/hoodie.jpg";

const Index = () => {
  const products = [
    {
      image: jerseyImage,
      name: "Camiseta Oficial Local",
      price: "59.990",
      originalPrice: "69.990",
      badge: "-15%",
    },
    {
      image: scarfImage,
      name: "Bufanda Clásica",
      price: "12.990",
    },
    {
      image: capImage,
      name: "Gorra Oficial",
      price: "15.990",
      badge: "Nuevo",
    },
    {
      image: hoodieImage,
      name: "Sudadera con Capucha",
      price: "45.990",
      originalPrice: "54.990",
      badge: "-15%",
    },
    {
      image: jerseyImage,
      name: "Camiseta Visitante",
      price: "59.990",
    },
    {
      image: capImage,
      name: "Gorra Snapback",
      price: "18.990",
      badge: "Nuevo",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <section id="productos" className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Productos Destacados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubre nuestra colección oficial de Universidad de Chile. 
            Calidad garantizada y envíos a todo Chile.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary-foreground">
            ¡Únete a la Hinchada!
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter y recibe ofertas exclusivas, 
            lanzamientos anticipados y noticias del club.
          </p>
          <div className="flex gap-4 justify-center flex-wrap max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 min-w-[250px] px-4 py-3 rounded-lg border-2 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground transition-smooth"
            />
            <Button variant="secondary" size="lg">
              Suscribirse
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            TiendaDelBarrioBajo
          </h3>
          <p className="text-muted-foreground text-sm">
            © 2024 TiendaDelBarrioBajo - Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
