import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const galleryImages = [
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=2009&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-lekompo-dark to-lekompo-dark/90 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-full opacity-10"
             style={{
               backgroundImage: `radial-gradient(circle at 50% 50%, rgba(155, 135, 245, 0.4) 0%, transparent 50%), 
                               radial-gradient(circle at 20% 20%, rgba(249, 115, 22, 0.3) 0%, transparent 40%), 
                               radial-gradient(circle at 80% 80%, rgba(101, 163, 13, 0.3) 0%, transparent 40%)`,
               animation: 'gradientFlow 15s ease infinite'
             }} 
        />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {mounted && Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                opacity: Math.random() * 0.5 + 0.2,
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-lekompo-purple/30 text-lekompo-orange text-sm font-medium mb-4">
            Captured Moments
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Event <span className="gradient-text animate-gradient">Gallery</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the energy and excitement from our previous events. These moments capture the essence of Lekompo Balcony Mix.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={cn(
                "overflow-hidden rounded-lg cursor-pointer hover:scale-[1.02] transition-all duration-500 animate-fade-in-up",
                index === 0 ? "md:col-span-2 md:row-span-2" : "",
                index === 3 ? "lg:col-span-2" : ""
              )}
              style={{ animationDelay: `${Math.min(index * 100, 700)}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image} 
                alt={`Event gallery image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                style={{ aspectRatio: index === 0 ? "16/9" : "1/1" }}
              />
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-lekompo-dark/90 backdrop-blur-lg border-lekompo-purple animate-zoom-in">
          <img src={selectedImage || ""} alt="Gallery preview" className="w-full h-auto object-contain max-h-[80vh]" />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
