import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div>
    <nav className={
        `bg-[#F3EAD7] border-b border-green-300 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`
      }>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="relative flex flex-col md:flex-row items-center justify-between py-1">
          <div className="flex justify-center w-full md:w-auto">
            <div className="flex items-center justify-center"><Link to="/" aria-label="Home" className="flex">
              <img 
                src="/Logo/Aquapower-removebg-preview.png" 
                alt="Aqua Power Logo" 
                className="h-[80px] md:h-[120px] w-auto transition-all duration-300 hover:scale-105"
              /></Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link to="/" className="text-green-700 hover:text-green-600 transition-colors font-bold text-xl">
              Home
            </Link>
            <Link to="/diensten" className="text-green-700 hover:text-green-600 transition-colors font-bold text-xl">
              Diensten
            </Link>
            <Link to="/projecten" className="text-green-700 hover:text-green-600 transition-colors font-bold text-xl">
              Projecten
            </Link>
            <Link to="/about" className="text-green-700 hover:text-green-600 transition-colors font-bold text-xl">
              Over Ons
            </Link>
            <Link to="/contact" className="text-green-700 hover:text-green-600 transition-colors font-bold text-xl">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-300">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-green-700 hover:text-green-600 transition-colors font-bold text-xl" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/diensten" className="text-green-700 hover:text-green-600 transition-colors font-bold text-xl" onClick={() => setIsMenuOpen(false)}>
                Diensten
              </Link>
              <Link to="/projecten" className="text-green-700 hover:text-green-600 transition-colors font-bold text-xl" onClick={() => setIsMenuOpen(false)}>
                Projecten
              </Link>
              <Link to="/about" className="text-green-700 hover:text-green-600 transition-colors font-bold text-xl" onClick={() => setIsMenuOpen(false)}>
                Over Ons
              </Link>
              <Link to="/contact" className="text-green-700 hover:text-green-600 transition-colors font-bold text-xl" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
      <div className="h-24 md:h-32 bg-[#F3EAD7]"></div>
    </div>
  );
};

export default Navigation;

