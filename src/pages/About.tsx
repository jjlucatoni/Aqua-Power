import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Shield, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SEOHead from '@/components/SEOHead';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navigation />
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Over Ons</h1>
          <p className="text-lg text-slate-300 mb-8">
            Leer ons team, onze missie en waarden kennen. Wij zetten ons in voor betrouwbare, duurzame installaties in heel Zuid-Holland.
          </p>
        </div>
      </section>
      {/* Header */}
      <header className="hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors">
              <ArrowLeft size={24} />
              <span className="text-lg font-semibold">Terug naar Home</span>
            </Link>
            <img
              src="/Logo/Aquapower-removebg-preview.png"
              alt="Aqua Power Logo"
              className="h-16 md:h-24 w-auto mx-auto" />
            <h1 className="sr-only">Over Aqua Power</h1>
            <div className="w-6 md:w-20"></div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Uw Betrouwbare Partner
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Al 10 jaar gespecialiseerd in onze diensten, staat Aqua Power uit Den Haag voor kwaliteit, betrouwbaarheid en vakmanschap. Wij zijn uw specialist voor alle sanitair-, CV- en onderhoudswerkzaamheden in heel Zuid-Holland.
          </p>
        </div>

        {/* Company Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-white via-blue-50 to-cyan-50 border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Onze Missie</h3>
              <p className="text-slate-700 leading-relaxed">
                Wij streven ernaar om jou te voorzien van hoogwaardige installatiediensten tegen een eerlijke prijs. Jouw comfort en tevredenheid staan centraal in alles wat wij doen in Zuid-Holland.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white via-blue-50 to-cyan-50 border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Onze Ervaring</h3>
              <p className="text-slate-700 leading-relaxed">
                Als twee vakkundige vrienden uit Den Haag hebben wij samen vele projecten succesvol voltooid in heel Zuid-Holland. Van kleine reparaties tot warmtepompinstallaties - wij doen het allemaal met persoonlijke aandacht bij jou thuis.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Persoonlijke Aanpak
          </h3>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            Als klein team van twee vakkundige vrienden bieden wij persoonlijke service. De eigenaar komt zelf langs voor advies en begeleiding van elk project.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center bg-gradient-to-br from-white via-blue-50 to-cyan-50 border-0 shadow-lg">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-slate-900">Kwaliteit</h4>
              <p className="text-slate-700 text-center">Wij gebruiken alleen de beste materialen en technieken voor duurzame resultaten.</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-white via-blue-50 to-cyan-50 border-0 shadow-lg">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-slate-900">Betrouwbaarheid</h4>
              <p className="text-slate-700 text-center">Op tijd, binnen budget en volgens afspraak. Daar kunt u op rekenen.</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-white via-blue-50 to-cyan-50 border-0 shadow-lg">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-slate-900">Service</h4>
              <p className="text-slate-700 text-center">Persoonlijke aandacht en nazorg staan centraal in onze dienstverlening.</p>
            </CardContent>
          </Card>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default About;
