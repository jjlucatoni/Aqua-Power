import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, ArrowRight, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import PortfolioCarousel from '@/components/PortfolioCarousel';

const customImages = [
  // Leidingen
  { src: '/leidingen/WhatsApp Image 2025-05-16 at 15.35.49_2d2f2c66.jpg', title: 'Leidingen', description: '' },
  { src: '/leidingen/WhatsApp Image 2025-05-16 at 15.35.49_26704def.jpg', title: 'Leidingen', description: '' },
  { src: '/leidingen/WhatsApp Image 2025-05-16 at 15.35.49_42131e68.jpg', title: 'Leidingen', description: '' },
  { src: '/leidingen/WhatsApp Image 2025-05-16 at 15.35.50_9d663128.jpg', title: 'Leidingen', description: '' },
  { src: '/leidingen/WhatsApp Image 2025-05-16 at 15.35.50_514435a4.jpg', title: 'Leidingen', description: '' },
  { src: '/leidingen/WhatsApp Image 2025-05-16 at 15.35.50_e9adb21d.jpg', title: 'Leidingen', description: '' },
  { src: '/leidingen/WhatsApp Image 2025-05-16 at 15.35.50_64494a0d.jpg', title: 'Leidingen', description: '' },
  // Wartenpompen
  { src: '/wartenpompen/WhatsApp Image 2025-05-16 at 15.35.49_2422b6fe.jpg', title: 'Warmtepompen', description: '' },
  { src: '/wartenpompen/WhatsApp Image 2025-05-16 at 15.35.49_be05084c.jpg', title: 'Warmtepompen', description: '' },
  { src: '/wartenpompen/WhatsApp Image 2025-05-16 at 15.35.49_e83e3b69.jpg', title: 'Warmtepompen', description: '' },
  // Badkamer
  { src: '/badkamer/WhatsApp Image 2025-05-16 at 15.35.50_657e903e.jpg', title: 'Badkamer', description: '' },
  { src: '/badkamer/WhatsApp Image 2025-05-16 at 15.35.50_3781080f.jpg', title: 'Badkamer', description: '' },
  { src: '/badkamer/WhatsApp Image 2025-05-16 at 15.35.50_94bd3e95.jpg', title: 'Badkamer', description: '' },
  { src: '/badkamer/WhatsApp Image 2025-05-16 at 15.35.50_0b18ab20.jpg', title: 'Badkamer', description: '' },
  { src: '/badkamer/WhatsApp Image 2025-05-16 at 15.35.50_a84f30a1.jpg', title: 'Badkamer', description: '' },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Onze{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Projecten
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Bekijk een selectie van onze recente projecten. Dit zijn enkele voorbeelden van ons vakmanschap.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Projecten
          </h2>
          <PortfolioCarousel images={customImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Word jij ons
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> volgende project in Zuid-Holland?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Wij helpen je graag met je installatie- of renovatieproject in Zuid-Holland. Neem contact met ons op voor persoonlijk advies.
          </p>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
