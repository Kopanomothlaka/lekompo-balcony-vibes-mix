
import { useState } from "react";
import { cn } from "@/lib/utils";
import ArtistCard from "./ArtistCard";
import { Button } from "@/components/ui/button";

const FeaturedArtists = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Hip-Hop", "R&B", "Afrobeats", "Pop"];
  
  const artists = [
    {
      name: "Doja Cat",
      image: "https://images.unsplash.com/photo-1565035010268-a3816f98589a?q=80&w=776&auto=format&fit=crop",
      role: "Headliner",
      genre: "Hip-Hop"
    },
    {
      name: "Burna Boy",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=870&auto=format&fit=crop",
      role: "Featured",
      genre: "Afrobeats"
    },
    {
      name: "SZA",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=987&auto=format&fit=crop",
      role: "Special Guest",
      genre: "R&B"
    },
    {
      name: "Wizkid",
      image: "https://images.unsplash.com/photo-1598387993441-a364f854c3a1?q=80&w=976&auto=format&fit=crop",
      role: "Featured",
      genre: "Afrobeats"
    },
    {
      name: "Drake",
      image: "https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?q=80&w=987&auto=format&fit=crop",
      role: "Headliner",
      genre: "Hip-Hop"
    },
    {
      name: "Adele",
      image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=987&auto=format&fit=crop",
      role: "Special Guest",
      genre: "Pop"
    },
    {
      name: "The Weeknd",
      image: "https://images.unsplash.com/photo-1575672913784-11a7cd4f25df?q=80&w=987&auto=format&fit=crop",
      role: "Featured",
      genre: "Pop"
    },
    {
      name: "Beyoncé",
      image: "https://images.unsplash.com/photo-1618655107892-8e7f78d62ec4?q=80&w=987&auto=format&fit=crop",
      role: "Headliner",
      genre: "R&B"
    }
  ];
  
  const filteredArtists = activeFilter === "All" 
    ? artists 
    : artists.filter(artist => artist.genre === activeFilter);
    
  return (
    <section id="artists" className="py-24 bg-lekompo-black relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-lekompo-blue/10 rounded-bl-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-lekompo-green/30 text-lekompo-yellow text-sm font-medium mb-4">
            The Lineup
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="gradient-text">Artists</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet the incredible talent that will be gracing our stages. These artists will be performing their hit songs with fans and industry faces.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(filter => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={cn(
                activeFilter === filter 
                  ? "bg-lekompo-blue hover:bg-lekompo-green"
                  : "border-lekompo-yellow text-white hover:bg-lekompo-yellow/20"
              )}
            >
              {filter}
            </Button>
          ))}
        </div>
        
        {/* Artists grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredArtists.map((artist, index) => (
            <ArtistCard 
              key={index} 
              name={artist.name} 
              image={artist.image} 
              role={artist.role} 
              genre={artist.genre} 
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-lekompo-blue hover:bg-lekompo-green text-white px-8">
            View All Artists
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;
