import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PortfolioCarousel from '@/components/PortfolioCarousel';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-white text-green-700 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-green-700 hover:text-green-600 transition-colors">
              <ArrowLeft size={24} />
              <span className="text-lg font-semibold">Terug naar Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <img src="/Logo/Aquapower-removebg-preview.png" alt="Aqua Power Logo" className="h-12 w-auto" />
              <h1 className="text-3xl font-bold text-green-700">Over Aqua Power</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-600 mb-6">
            Uw Betrouwbare Partner
          </h2>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto leading-relaxed opacity-80">
            Al 10 jaar gespecialiseerd in onze diensten, staat Aqua Power uit Den Haag voor kwaliteit, 
            betrouwbaarheid en vakmanschap. Wij zijn uw specialist voor alle sanitair-, CV- en onderhoudswerkzaamheden 
            in heel Zuid-Holland en omliggende gebieden.
          </p>
        </div>

        {/* Company Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Onze Missie</h3>
              <p className="text-blue-600 leading-relaxed opacity-80">
                Wij streven ernaar om jou te voorzien van hoogwaardige installatiediensten 
                tegen een eerlijke prijs. Jouw comfort en tevredenheid staan centraal in alles wat wij doen in Zuid-Holland en omgeving.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-cyan-500 mb-4">Onze Ervaring</h3>
              <p className="text-blue-600 leading-relaxed opacity-80">
                Als twee vakkundige vrienden uit Den Haag hebben wij samen vele projecten succesvol 
                voltooid in heel Zuid-Holland. Van kleine reparaties tot complete badkamerrenovaties - wij doen het allemaal met persoonlijke aandacht bij jou thuis.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-blue-600 mb-6">
            Persoonlijke Aanpak
          </h3>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto opacity-80">
            Als klein team van twee vakkundige vrienden bieden wij persoonlijke service. De eigenaar komt zelf langs voor advies en begeleiding van elk project.
          </p>
        </div>

        {/* Portfolio Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-blue-600 mb-6">
              Onze Realisaties
            </h3>
            <p className="text-lg text-blue-600 max-w-2xl mx-auto mb-8 opacity-80">
              Bekijk een selectie van onze recent voltooide projecten. Van moderne badkamers tot efficiënte CV-installaties.
            </p>
          </div>
          
          <PortfolioCarousel />
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center bg-blue-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold mb-4">Kwaliteit</h4>
              <p>Wij gebruiken alleen de beste materialen en technieken voor duurzame resultaten.</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-cyan-500 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold mb-4">Betrouwbaarheid</h4>
              <p>Op tijd, binnen budget en volgens afspraak. Daar kunt u op rekenen.</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-blue-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold mb-4">Service</h4>
              <p>Persoonlijke aandacht en nazorg staan centraal in onze dienstverlening.</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-blue-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">Klaar voor uw volgende project?</h3>
              <p className="text-xl mb-8 opacity-90">
                Neem contact met ons op voor een vrijblijvende offerte
              </p>
              <Link to="/">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-cyan-50 font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Opnemen
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
