
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: `radial-gradient(circle at center, rgba(6, 182, 212, 0.2) 0%, rgba(15, 15, 15, 1) 70%)`,
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-lekompo-orange blur-[100px] -top-20 -left-20" />
        <div className="absolute w-96 h-96 rounded-full bg-lekompo-blue blur-[100px] bottom-10 right-10" />
        <div className="absolute w-64 h-64 rounded-full bg-lekompo-green blur-[80px] top-40 right-20" />
        <div className="absolute w-64 h-64 rounded-full bg-lekompo-yellow blur-[80px] bottom-40 left-20" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8 max-w-xs">
            <img 
              src="/lovable-uploads/dd9844ba-d164-4692-ae14-b080e7d207b9.png" 
              alt="Lekompo Chillas Mix Logo" 
              className="w-full"
            />
          </div>
          
          <div className="animate-float">
            <span className="inline-block py-1 px-3 rounded-full bg-lekompo-blue/30 text-lekompo-yellow text-sm font-medium mb-6">
              June 15, 2025 • Central Park Amphitheater
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">LEKOMPO</span> <br />
            <span className="gradient-text-alt">CHILLAS MIX</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            Experience the ultimate playlist event where artists perform their hit songs with fans and industry faces, creating unforgettable moments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-lekompo-blue hover:bg-lekompo-green text-white px-8 py-6 text-lg">
              Get Tickets
            </Button>
            <Button variant="outline" className="border-lekompo-yellow text-white hover:bg-lekompo-yellow/20 px-8 py-6 text-lg">
              View Lineup
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: "20+", label: "Top Artists" },
              { number: "8", label: "Hours of Music" },
              { number: "3", label: "Event Stages" },
              { number: "1000+", label: "Fans Expected" }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className={index % 2 === 0 ? "gradient-text text-3xl md:text-4xl font-bold" : "gradient-text-alt text-3xl md:text-4xl font-bold"}>
                  {stat.number}
                </span>
                <span className="text-gray-300">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-gentle">
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <div className="w-[2px] h-8 bg-gradient-to-b from-lekompo-blue to-lekompo-green" />
      </div>
    </section>
  );
};

export default Hero;
