
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Zap, 
  Download, 
  Phone, 
  CheckCircle, 
  Clock, 
  Shield,
  Calculator,
  FileText
} from "lucide-react";

const Quote = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 text-cyan-300 border-cyan-400/30 backdrop-blur-sm">
            <Calculator className="w-4 h-4 mr-2" />
            Gratis advies & offerte
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Offerte{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
              Aanvragen
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Krijg binnen 24 uur een persoonlijke offerte voor uw duurzame installatie. 
            Geheel vrijblijvend en op maat gemaakt.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-center bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
                    Gratis Energie-advies
                  </CardTitle>
                  <CardDescription className="text-center text-lg">
                    Vul onderstaande gegevens in voor uw persoonlijke offerte
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Voornaam *</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white"
                          placeholder="Uw voornaam"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Achternaam *</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white"
                          placeholder="Uw achternaam"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">E-mailadres *</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="uw.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Telefoonnummer *</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="+31 6 12345678"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Adres *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="Straat + huisnummer"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Postcode *</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white"
                          placeholder="1234 AB"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Plaats *</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white"
                          placeholder="Woonplaats"
                        />
                      </div>
                    </div>

                    {/* Interest */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-3">Interesse in *</label>
                      <div className="space-y-3">
                        {[
                          'Warmtepomp',
                          'Zonnepanelen', 
                          'Waterinstallatie',
                          'Onderhoud & Service',
                          'Combinatie van bovenstaande'
                        ].map((option) => (
                          <label key={option} className="flex items-center">
                            <input 
                              type="checkbox" 
                              className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                            />
                            <span className="ml-3 text-slate-700">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Huidige energiekosten per jaar</label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white">
                        <option>Selecteer bereik</option>
                        <option>€1.000 - €2.000</option>
                        <option>€2.000 - €3.000</option>
                        <option>€3.000 - €4.000</option>
                        <option>€4.000 - €5.000</option>
                        <option>Meer dan €5.000</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Aanvullende informatie</label>
                      <textarea 
                        rows={4} 
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white resize-none"
                        placeholder="Vertel ons meer over uw wensen en situatie..."
                      ></textarea>
                    </div>

                    <div className="flex items-start">
                      <input type="checkbox" className="mt-1 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                      <span className="ml-3 text-sm text-slate-600">
                        Ik ga akkoord met de verwerking van mijn gegevens conform de privacyverklaring *
                      </span>
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-4 text-lg shadow-xl">
                      <Zap className="w-5 h-5 mr-2" />
                      Verstuur aanvraag
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Benefits & Options */}
            <div className="space-y-8">
              {/* What to Expect */}
              <Card className="shadow-lg border-0 bg-gradient-to-br from-cyan-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-slate-900">
                    <Clock className="w-6 h-6 mr-3 text-cyan-600" />
                    Wat kunt u verwachten?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Binnen 24 uur contact opname',
                    'Gratis technisch advies op locatie',
                    'Persoonlijke offerte op maat',
                    'Duidelijke uitleg over mogelijkheden',
                    'Subsidie-advies en hulp bij aanvragen'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Alternative Options */}
              <Card className="shadow-lg border-0 bg-gradient-to-br from-orange-50 to-amber-50">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Andere opties</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Direct bellen: 0621301486
                  </Button>
                  
                  <Button variant="outline" className="w-full border-2 border-slate-300 hover:bg-slate-50">
                    <FileText className="w-5 h-5 mr-2" />
                    Bel-me-terug aanvragen
                  </Button>
                  
                  <Button variant="outline" className="w-full border-2 border-slate-300 hover:bg-slate-50">
                    <Download className="w-5 h-5 mr-2" />
                    Download productbrochure
                  </Button>
                </CardContent>
              </Card>

              {/* Guarantee */}
              <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">100% Vrijblijvend</h4>
                  <p className="text-slate-600">
                    Geen verplichtingen. U ontvangt een eerlijke offerte zonder verrassingen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
