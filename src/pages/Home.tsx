import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Zap, 
  Sun, 
  Thermometer, 
  Droplets, 
  Shield, 
  Clock, 
  Award, 
  Leaf,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Bath
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      icon: Thermometer,
      title: "Warmtepompen",
      description: "Energiezuinige verwarming en koeling voor elke woning",
      color: "bg-blue-500"
    },
    {
      icon: Droplets,
      title: "Loodgieterswerk",
      description: "Professionele loodgietersoplossingen voor uw woning of bedrijf",
      color: "bg-cyan-500"
    },
    {
      icon: Bath,
      title: "Sanitair",
      description: "Moderne sanitaire oplossingen voor badkamer en toilet",
      color: "bg-blue-500"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Hoogwaardige kwaliteit",
      description: "Betrouwbare en duurzame installaties"
    },
    {
      icon: Clock,
      title: "Snelle service",
      description: "Binnen 24 uur ter plaatse voor spoedgevallen"
    },
    {
      icon: Award,
      title: "Gecertificeerd",
      description: "Erkend installateur met alle benodigde certificaten"
    },
    {
      icon: Leaf,
      title: "100% Duurzaam",
      description: "Milieuvriendelijke oplossingen die energie besparen"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-blue-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6 bg-cyan-400/20 text-cyan-300 border-cyan-400/30 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              10 jaar ervaring in installatie
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              De toekomst van{" "}
              <span className="text-cyan-400">
                energie
              </span>{" "}
              begint vandaag
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Gevestigd in Den Haag, helpen wij je in heel Zuid-Holland en omliggende gebieden met energiezuinige, duurzame oplossingen voor je huis. 
              Met onze persoonlijke aanpak en vakmanschap bespaar je 
              tot 70% op je energiekosten.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">

              <Link to="/projecten">
                <Button size="lg" className="text-lg px-8 py-6 bg-cyan-500 hover:bg-blue-600 text-white border-0 shadow-xl transition-all duration-300">
                  Bekijk projecten
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>


          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/afbeeldingen/5aab2577-d817-46e6-87ce-e9dd0da26fae.png" 
                alt="Technische installatie" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-cyan-400/20 rounded-2xl blur-xl"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Onze Specialisaties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Duurzame installaties die uw energiekosten drastisch verlagen en het milieu ontzien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden transform hover:scale-105 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className={`${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-center mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Link to="/diensten">
                    <Button variant="outline" className="w-full border-2 hover:bg-slate-50 transition-all duration-300">
                      Meer informatie
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Waarom Aqua Power?
            </h2>
            <p className="text-xl text-slate-600">
              Betrouwbare partner voor duurzame energie-oplossingen
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Klaar voor de{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              energietransitie?
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Bespaar tot 70% op uw energiekosten met onze duurzame installaties. 
            Vraag nu een gratis advies aan en ontdek wat mogelijk is.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6 bg-cyan-500 hover:bg-blue-600 text-white border-0 shadow-xl transition-all duration-300">
                <Users className="w-5 h-5 mr-2" />
                Direct contact
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
