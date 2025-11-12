import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Viste los Colores de la U
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Encuentra toda la indumentaria oficial de Universidad de Chile. 
            Camisetas, bufandas, gorras y más. ¡Apoya a tu equipo con estilo!
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button variant="hero" size="lg">
              Ver Productos
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20">
              Ofertas Especiales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
