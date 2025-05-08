
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedArtists from "@/components/FeaturedArtists";
import EventSchedule from "@/components/EventSchedule";
import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedArtists />
      <EventSchedule />
      <MusicPlayer />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
