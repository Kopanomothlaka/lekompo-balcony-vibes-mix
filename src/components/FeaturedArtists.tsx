import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ArtistCard from "./ArtistCard";
import { Button } from "@/components/ui/button";

const FeaturedArtists = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const filters = ["Lekompo Artist" ,"Lekompo Producer"];
  
  const artists = [
    {
      name: "Shebeshit",
      image: "/lovable-uploads/shxt.jpg",
      role: "Special Guest",
      genre: "Lekompo Artist"
    },
    {
      name: "Kharishma",
      image: "/lovable-uploads/kharishma.jpg",
      role: "Featured",
      genre: "Lekompo Artist"
    },
    {
      name: "Naqua SA",
      image: "/lovable-uploads/naqua.jpeg",
      role: "Special Guest",
      genre: "Lekompo Producer"
    },
    {
      name: "Shandesh",
      image: "/lovable-uploads/shandesh.jpg",
      role: "Featured",
      genre: "Lekompo Artist"
    },
    {
      name: "Janesh",
      image: "/lovable-uploads/janesh.jpg",
      role: "Featured",
      genre: "Lekompo Artists"
    },
    {
      name: "Hitboss",
      image: "/lovable-uploads/hitboss.jpeg",
      role: "Featured",
      genre: "Lekompo Producer"
    }
  ];
  
  const filteredArtists = activeFilter === "All" 
    ? artists 
    : artists.filter(artist => artist.genre === activeFilter);
    
  return (
    <section id="artists" className="py-24 bg-lekompo-black relative overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-lekompo-blue/10 rounded-bl-full blur-3xl opacity-20 animate-pulse-gentle" />
      <div className="absolute bottom-0 left-0 w-2/3 h-1/3 bg-lekompo-yellow/10 rounded-tr-full blur-3xl opacity-10 animate-pulse-gentle" style={{animationDelay: '2s'}}/>
      
      {/* Moving gradient shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i}
            className="absolute opacity-10"
            style={{
              width: Math.random() * 300 + 200 + 'px',
              height: Math.random() * 300 + 200 + 'px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${
                [
                  'rgba(249, 115, 22, 0.8)', 
                  'rgba(250, 204, 21, 0.8)', 
                  'rgba(101, 163, 13, 0.8)', 
                  'rgba(6, 182, 212, 0.8)'
                ][i % 4]
              } 0%, transparent 70%)`,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              transform: 'translate(-50%, -50%)',
              animation: `float ${10 + i * 5}s linear infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-lekompo-green/30 text-lekompo-yellow text-sm font-medium mb-4">
            The Lineup
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="gradient-text animate-gradient">Artists</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet the incredible talent that will be gracing our stages. These artists will be performing their hit songs with fans and industry faces.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up delay-200">
          {filters.map((filter, index) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={cn(
                activeFilter === filter 
                  ? "bg-lekompo-blue hover:bg-lekompo-green"
                  : "border-lekompo-yellow text-white hover:bg-lekompo-yellow/20",
                "transition-all duration-300 hover:scale-105"
              )}
            >
              {filter}
            </Button>
          ))}
        </div>
        
        {/* Artists grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredArtists.map((artist, index) => (
            <div key={index} className={`animate-fade-in-up delay-${Math.min(index * 100, 500)}`}>
              <ArtistCard 
                name={artist.name} 
                image={artist.image} 
                role={artist.role} 
                genre={artist.genre} 
              />
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default FeaturedArtists;
