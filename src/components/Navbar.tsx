
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Music2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Artists", href: "#artists" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-lekompo-black/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 text-xl font-display font-bold animate-fade-in-left">
          <Music2 className="h-6 w-6 text-lekompo-yellow animate-pulse" />
          <div>
            <span className="gradient-text animate-gradient">LEKOMPO</span>
            <span className="gradient-text-alt animate-gradient ml-1">CHILLAS MIX</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-lekompo-blue transition-colors duration-300 hover:-translate-y-1 animate-fade-in-right"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-lekompo-blue hover:bg-lekompo-green text-white transition-transform duration-300 hover:scale-105 animate-fade-in-right" style={{ animationDelay: "500ms" }}
          onClick={() => window.location.href = 'https://www.howler.co.za/events/lekompo-mix-6-with-shebeshxt-kharishma-naqua-adb1'}>
            Get Tickets
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none animate-fade-in-right"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} className="animate-zoom-in" /> : <Menu size={24} className="animate-zoom-in" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-lekompo-black/95 backdrop-blur-lg shadow-xl transform transition-transform ease-in-out duration-500 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end">
            <button 
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6 mt-10">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl text-white hover:text-lekompo-yellow transition-all duration-300 hover:translate-x-2 animate-fade-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-lekompo-blue hover:bg-lekompo-green text-white w-full mt-4 transition-transform duration-300 hover:scale-105 animate-fade-in-left" style={{ animationDelay: "500ms" }}>
              Get Tickets
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
