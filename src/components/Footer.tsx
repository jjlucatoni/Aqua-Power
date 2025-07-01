import { Button } from "@/components/ui/button";
import { Zap, Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F3EAD7] text-green-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#F3EAD7]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex items-start gap-4 flex-1">
            
            <img 
              src="/Logo/Aquapower-removebg-preview.png" 
              alt="Aqua Power Logo" 
              className="h-[80px] md:h-[120px] w-auto flex-shrink-0" 
            />
            <p className="text-green-700 mb-2 leading-relaxed text-sm text-left">
              Jouw lokale installateurs. Van warmtepompen tot zonnepanelen - wij zorgen persoonlijk voor energiezuinige oplossingen.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
            
            <h4 className="text-base font-semibold mb-2 text-green-700">Snelle Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/diensten" className="text-green-700 hover:text-green-700 transition-colors">Diensten</Link></li>
              <li><Link to="/projecten" className="text-green-700 hover:text-green-700 transition-colors">Projecten</Link></li>
              <li><Link to="/contact" className="text-green-700 hover:text-green-700 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
            <h4 className="text-base font-semibold mb-2 text-green-700">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-green-700">
                <Phone className="h-4 w-4 mr-2 text-green-700" />
                <span>0621301486</span>
              </div>
              <div className="flex items-center text-green-700">
                <MessageSquare className="h-4 w-4 mr-2 text-green-700" />
                <span>WhatsApp: 0621301486</span>
              </div>
              <div className="flex items-center text-green-700">
                <Mail className="h-4 w-4 mr-2 text-green-700" />
                <span>info@aquapower.nl</span>
              </div>
              <div className="flex items-center text-green-700">
                <MapPin className="h-4 w-4 mr-2 text-green-700" />
                <span>Zuid-Holland & omgeving</span>
              </div>
              <div className="flex items-center text-green-700">
                <Clock className="h-4 w-4 mr-2 text-green-700" />
                <span>Ma-Vr: 08:00-17:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-300 mt-4 pt-2 text-center">
          <p className="text-slate-400 text-sm">
            &copy; 2024 Aqua Power. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
