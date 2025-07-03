import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Thermometer, 
  Sun, 
  Droplets, 
  Wrench, 
  CheckCircle, 
  ArrowRight, 
  Shield,
  TrendingUp,
  Clock,
  Zap,
  Phone,
  ClipboardCheck,
  Hammer
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Loodgieterswerk",
      description: "Professionele loodgietersoplossingen voor uw woning of bedrijf",
      longDescription: "Met 10+ jaar ervaring als vakkundige installateurs uit Zuid-Holland staan wij klaar voor al je loodgieterswerkzaamheden. Van lekkages tot complete installaties, wij zorgen persoonlijk voor een betrouwbare en duurzame oplossing bij jou thuis.",
      benefits: [
        "Snelle service bij calamiteiten",
        "Vakkundige installatie",
        "Preventief onderhoud",
        "Eerlijk advies",
        "Professionele werkzaamheden"
      ],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
      gradient: "from-blue-500 to-cyan-500",
      price: "Op maat"
    },
    {
      icon: Droplets,
      title: "Water, CV en Gas",
      description: "Complete installatie en onderhoud van water-, CV- en gasinstallaties",
      longDescription: "Wij verzorgen de aanleg, het onderhoud en de reparatie van je water-, CV- en gasinstallaties in Zuid-Holland en omgeving. Met onze persoonlijke aanpak zorgen we voor veilige en efficiënte systemen in jouw woning.",
      benefits: [
        "Vakkundige uitvoering",
        "Veilige gasinstallaties",
        "Energiezuinige oplossingen",

        "Compleet pakket van ontwerp tot onderhoud"
      ],
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop",
      gradient: "from-cyan-500 to-blue-500",
      price: "Op maat"
    },
    {
      icon: Droplets,
      title: "Sanitair",
      description: "Moderne sanitaire oplossingen voor badkamer en toilet",
      longDescription: "Van een eenvoudige toiletvervanging tot complete badkamerrenovaties. Wij installeren alle sanitaire voorzieningen met oog voor detail en kwaliteit.",
      benefits: [
        "Uitgebreid assortiment",
        "Deskundig advies",
        "Vakkundige installatie",
        "Waterbesparing",
        "Hoogwaardige installaties"
      ],
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
      gradient: "from-blue-500 to-cyan-500",
      price: "Op maat"
    },
    {
      icon: Sun,
      title: "Airco's",
      description: "Comfortabele klimaatbeheersing voor uw woning of kantoor",
      longDescription: "Onze airco-oplossingen zorgen voor een aangenaam binnenklimaat, zowel in de zomer als in de winter. Wij leveren en installeren energiezuinige systemen van topkwaliteit.",
      benefits: [
        "Energiezuinige systemen",
        "Stille werking",
        "Koelen én verwarmen",
        "Smart home integratie",
        "Professionele installatie"
      ],
      image: "/leidingen/4b333b3c-9019-47fc-bbe1-32265734c257.png",
      gradient: "from-blue-600 to-blue-400",
      price: "Vanaf €1.500"
    },
    {
      icon: Thermometer,
      title: "Warmtepompen",
      description: "Energiezuinige verwarming en koeling voor uw woning",
      longDescription: "Warmtepompen zijn de toekomst van duurzaam verwarmen. Ze halen energie uit de buitenlucht, grond of water en kunnen uw woning zowel verwarmen als koelen.",
      benefits: [
        "Tot 75% energiebesparing",
        "Geschikt voor verwarming én koeling", 
        "Verhoogt de waarde van uw woning",
        "Subsidie mogelijk tot €4.000",
        "Zeer stil in bedrijf"
      ],
      image: "/wartenpompen/WhatsApp Image 2025-05-16 at 15.35.49_e83e3b69.jpg",
      gradient: "from-cyan-500 to-blue-500",
      price: "Vanaf €8.500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 text-cyan-300 border-cyan-400/30 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            Jouw installateurs in Zuid-Holland
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Onze{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Diensten
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Persoonlijke oplossingen voor jouw energie- en waterinstallaties in Zuid-Holland en omgeving. 
            Wij helpen je van advies tot installatie en onderhoud.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                    />
                    <div className={`absolute -top-4 -right-4 w-full h-full bg-gradient-to-br ${service.gradient} opacity-20 rounded-2xl blur-xl`}></div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">{service.longDescription}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Voordelen:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                          <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  

                  

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Ons Werkproces
            </h2>
            <p className="text-xl text-slate-600">
              Van eerste contact tot nazorg - zo werken wij
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Phone, title: "Opdracht", description: "Ontvangst van projectaanvraag via aannemer of klant voor diverse installatiewerkzaamheden." },
              { icon: ClipboardCheck, title: "Voorbereiding & Planning", description: "Situatieanalyse, materiaalselectie en efficiënte werkplanning door de eigenaar zelf." },
              { icon: Hammer, title: "Installatie", description: "Professionele uitvoering van installatiewerkzaamheden volgens afspraak en kwaliteitsnormen." },
              { icon: CheckCircle, title: "Oplevering & Controle", description: "Zorgvuldige oplevering met uitgebreide kwaliteitscontrole voor optimaal resultaat." }
            ].map((step, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
