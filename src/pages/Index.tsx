import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Droplets, Thermometer, Phone, Mail, MapPin, Clock, Shield, Users, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";

const Index = () => {
  const services = [
    {
      icon: Droplets,
      title: "Sanitair & Leidingwerk",
      description: "Complete badkamer renovaties, leidingwerk en reparaties. Van kleine reparaties tot complete nieuwbouw projecten.",
      features: ["Badkamer renovatie", "Leidingwerk", "Kraan reparaties", "Toilet installaties"],
      gradient: "from-blue-500 via-cyan-500 to-blue-400"
    },
    {
      icon: Thermometer,
      title: "CV & Verwarming",
      description: "Installatie en onderhoud van CV-ketels, radiatoren en vloerverwarming voor optimaal wooncomfort.",
      features: ["CV-ketel installatie", "Radiator plaatsing", "Vloerverwarming", "Onderhoud"],
      gradient: "from-blue-500 via-cyan-500 to-blue-600"
    },
    {
      icon: Wrench,
      title: "Onderhoud & Service",
      description: "Preventief onderhoud voor al je installaties in Zuid-Holland. Snel en persoonlijk.",
      features: ["Jaarlijks onderhoud", "Preventief onderhoud"],
      gradient: "from-cyan-500 via-blue-500 to-cyan-600"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Vakmanschap",
      description: "Vakkundige uitvoering met persoonlijke aandacht in Zuid-Holland",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: Clock,
      title: "Betrouwbaar",
      description: "Altijd op tijd en binnen afgesproken budget",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: Users,
      title: "Persoonlijk",
      description: "Persoonlijke service en advies op maat",
      gradient: "from-cyan-400 to-blue-400"
    },
    {
      icon: Star,
      title: "Kwaliteit",
      description: "Alleen A-merken en professionele uitvoering",
      gradient: "from-blue-400 to-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
      {/* Header */}
      <header className="bg-[#F3EAD7] text-green-800 shadow-xl relative">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/Logo/Aquapower-removebg-preview.png" alt="Aqua Power Logo" className="h-10 w-auto" />
              <h1 className="text-3xl font-bold text-green-700">
                Aqua Power
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-green-700 hover:text-green-600 transition-colors font-medium">Home</Link>
              <Link to="/about" className="text-green-700 hover:text-green-600 transition-colors font-medium">Over Ons</Link>
              <a href="#diensten" className="text-green-700 hover:text-green-600 transition-colors font-medium">Diensten</a>
              <a href="#contact" className="text-green-700 hover:text-green-600 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-500"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/25 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-white/30 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Erkend installatiebedrijf sinds 1995
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Uw betrouwbare partner voor{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-white bg-clip-text text-transparent animate-pulse">
                sanitair & verwarming
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Van kleine reparaties tot complete badkamer renovaties. Aqua Power staat voor 
              vakmanschap, betrouwbaarheid en persoonlijke service in heel Zuid-Holland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Button size="lg" className="text-lg px-8 py-4 bg-cyan-500 hover:bg-blue-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Phone className="h-5 w-5 mr-2" />
                Direct bellen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-cyan-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Onze Diensten
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete installatie- en onderhoudsdiensten voor particulieren en bedrijven
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden transform hover:scale-105 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardHeader className="text-center pb-4 relative">
                  <div className={`bg-gradient-to-br ${service.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-gray-600 mb-4 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full mr-3 shadow-sm`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className={`w-full mt-6 border-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-white hover:to-gray-50 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105`}>
                    Meer informatie
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-300/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Waarom Aqua Power?
            </h2>
            <p className="text-xl text-gray-600">
              Meer dan 25 jaar ervaring in de installatiebranche
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-br ${item.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6`}>
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Contact & 
                <span className="bg-gradient-to-r from-yellow-300 to-cyan-200 bg-clip-text text-transparent"> Service</span>
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Heeft u vragen of wilt u een afspraak maken? Neem direct contact met ons op. 
                Wij staan 24/7 voor u klaar bij storingen.
              </p>
                              <div className="space-y-6">
                <div className="flex items-center text-white group">
                  <div className="bg-white/20 p-3 rounded-xl mr-4 group-hover:bg-white/30 transition-colors duration-300">
                    <Phone className="h-6 w-6" />
                  </div>
                  <span className="text-lg">0686463310</span>
                </div>
                <div className="flex items-center text-white group">
                  <div className="bg-white/20 p-3 rounded-xl mr-4 group-hover:bg-white/30 transition-colors duration-300">
                    <Phone className="h-6 w-6" />
                  </div>
                  <span className="text-lg">+31 85 820 08 76</span>
                </div>
                <div className="flex items-center text-white group">
                  <div className="bg-white/20 p-3 rounded-xl mr-4 group-hover:bg-white/30 transition-colors duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <span className="text-lg">info@aqua-power.nl</span>
                </div>
                <div className="flex items-center text-white group">
                  <div className="bg-white/20 p-3 rounded-xl mr-4 group-hover:bg-white/30 transition-colors duration-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <span className="text-lg">Amsterdam en omgeving</span>
                </div>
                <div className="flex items-center text-white group">
                  <div className="bg-white/20 p-3 rounded-xl mr-4 group-hover:bg-white/30 transition-colors duration-300">
                    <Clock className="h-6 w-6" />
                  </div>
                  <span className="text-lg">Ma-Vr: 08:00-17:00</span>
                </div>
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Gratis Offerte
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Naam *</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefoon</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bericht</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 resize-none" placeholder="Beschrijf uw project of vraag..."></textarea>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Neem contact op
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-3 rounded-xl shadow-lg">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    Aqua Power
                  </h3>
                  <p className="text-gray-400 text-sm">Installatiebedrijf</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Uw betrouwbare partner voor alle sanitair- en verwarmingsinstallaties in Amsterdam en omgeving.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-200">Diensten</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-cyan-300 transition-colors duration-300 cursor-pointer">Sanitair & Badkamers</li>
                <li className="hover:text-cyan-300 transition-colors duration-300 cursor-pointer">CV & Verwarming</li>
                <li className="hover:text-cyan-300 transition-colors duration-300 cursor-pointer">Leidingwerk</li>
                <li className="hover:text-cyan-300 transition-colors duration-300 cursor-pointer">Onderhoud & Service</li>

              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-200">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <p className="hover:text-cyan-300 transition-colors duration-300">Zuid-Holland en omgeving</p>
                <p className="hover:text-cyan-300 transition-colors duration-300">0686463310</p>
                <p className="hover:text-cyan-300 transition-colors duration-300">+31 85 820 08 76</p>
                <p className="hover:text-cyan-300 transition-colors duration-300">info@aqua-power.nl</p>
                <p className="text-sm text-gray-400">KvK: 12345678 | BTW: NL123456789B01</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700/50 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Aqua Power. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
