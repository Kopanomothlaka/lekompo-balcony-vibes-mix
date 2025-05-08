
import { useState, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume1, Volume2, ListMusic } from "lucide-react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: number; // in seconds
  cover: string;
}

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);
  const [showPlaylist, setShowPlaylist] = useState(false);
  
  // For a real application, you would add actual audio files
  const tracks: Track[] = [
    {
      id: 1,
      title: "Paint The Town",
      artist: "Doja Cat",
      duration: 228,
      cover: "https://images.unsplash.com/photo-1565035010268-a3816f98589a?q=80&w=776&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Last Last",
      artist: "Burna Boy",
      duration: 186,
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=870&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Kill Bill",
      artist: "SZA",
      duration: 244,
      cover: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=987&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Essence",
      artist: "Wizkid",
      duration: 204,
      cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3a1?q=80&w=976&auto=format&fit=crop"
    },
  ];
  
  const currentTrack = tracks[currentTrackIndex];
  
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In a real app, this would control audio playback
  };
  
  const handlePrevious = () => {
    setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setCurrentTime(0);
    if (isPlaying) {
      // In a real app, this would start playing the previous track
    }
  };
  
  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev === tracks.length - 1 ? 0 : prev + 1));
    setCurrentTime(0);
    if (isPlaying) {
      // In a real app, this would start playing the next track
    }
  };
  
  const handleTrackSelect = (index: number) => {
    setCurrentTrackIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
    // In a real app, this would start playing the selected track
    setShowPlaylist(false);
  };
  
  return (
    <section className="py-12 bg-lekompo-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-lekompo-orange rounded-full mix-blend-overlay filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-lekompo-purple rounded-full mix-blend-overlay filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-lekompo-orange/30 text-lekompo-purple text-sm font-medium mb-4">
              Featured Tracks
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Preview</span> The Mix
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get a taste of the incredible music you'll experience at Lekompo Balcony Mix. Listen to preview tracks from our featured artists.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-lekompo-dark/90 via-lekompo-purple/20 to-lekompo-dark/90 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-lekompo-purple/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Album Art */}
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={currentTrack.cover} 
                    alt={currentTrack.title}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-500",
                      isPlaying ? "scale-105 animate-pulse-gentle" : ""
                    )}
                  />
                </div>
              </div>
              
              {/* Player Controls */}
              <div className="w-full md:w-2/3 flex flex-col gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{currentTrack.title}</h3>
                  <p className="text-gray-300">{currentTrack.artist}</p>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <Slider
                    value={[currentTime]}
                    max={currentTrack.duration}
                    step={1}
                    onValueChange={(value) => setCurrentTime(value[0])}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(currentTrack.duration)}</span>
                  </div>
                </div>
                
                {/* Playback Controls */}
                <div className="flex items-center justify-center gap-4 md:gap-6 mt-2">
                  <button 
                    onClick={handlePrevious}
                    className="text-white hover:text-lekompo-orange transition-colors p-2"
                  >
                    <SkipBack size={24} />
                  </button>
                  
                  <button 
                    onClick={handlePlayPause}
                    className="w-14 h-14 rounded-full bg-lekompo-purple hover:bg-lekompo-orange transition-colors flex items-center justify-center text-white"
                  >
                    {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
                  </button>
                  
                  <button 
                    onClick={handleNext}
                    className="text-white hover:text-lekompo-orange transition-colors p-2"
                  >
                    <SkipForward size={24} />
                  </button>
                </div>
                
                {/* Volume & Playlist */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2 w-1/3">
                    <Volume2 size={18} className="text-gray-400" />
                    <Slider
                      value={[volume]}
                      max={100}
                      step={1}
                      onValueChange={(value) => setVolume(value[0])}
                      className="cursor-pointer"
                    />
                  </div>
                  
                  <button 
                    onClick={() => setShowPlaylist(!showPlaylist)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1 rounded-full transition-colors",
                      showPlaylist 
                        ? "bg-lekompo-orange text-white" 
                        : "bg-lekompo-purple/30 hover:bg-lekompo-purple/50 text-white"
                    )}
                  >
                    <ListMusic size={16} />
                    <span className="text-sm">Playlist</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Playlist */}
            {showPlaylist && (
              <div className="mt-6 border-t border-lekompo-purple/20 pt-4">
                <h4 className="text-lg font-semibold text-white mb-3">Playlist</h4>
                <div className="space-y-1">
                  {tracks.map((track, index) => (
                    <div
                      key={track.id}
                      onClick={() => handleTrackSelect(index)}
                      className={cn(
                        "flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors",
                        currentTrackIndex === index 
                          ? "bg-lekompo-purple/30" 
                          : "hover:bg-lekompo-purple/10"
                      )}
                    >
                      <img 
                        src={track.cover} 
                        alt={track.title} 
                        className="w-10 h-10 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h5 className="font-medium text-white text-sm">{track.title}</h5>
                        <p className="text-xs text-gray-400">{track.artist}</p>
                      </div>
                      <span className="text-xs text-gray-400">{formatTime(track.duration)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
