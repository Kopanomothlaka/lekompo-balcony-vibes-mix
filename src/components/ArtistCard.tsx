
import { cn } from "@/lib/utils";

interface ArtistCardProps {
  name: string;
  image: string;
  role: string;
  genre: string;
  className?: string;
}

const ArtistCard = ({ name, image, role, genre, className }: ArtistCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]",
        className
      )}
    >
      {/* Artist Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-lekompo-dark via-transparent to-transparent opacity-80" />
      
      {/* Artist Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 transition-all duration-300">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-lekompo-orange/70">
            {genre}
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-lekompo-purple/70">
            {role}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white">{name}</h3>
      </div>
    </div>
  );
};

export default ArtistCard;
