import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Zap,
  Send,
  Globe,
  Shield,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contact</h1>
          <p className="text-lg text-slate-300 mb-8">
            Heeft u vragen of wilt u direct contact? Wij staan altijd voor u klaar. Spoedgevallen worden snel behandeld.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Neem contact op</h2>
            <p className="text-base text-slate-600 mb-6">
              Voor vragen, spoedgevallen of een afspraak kunt u ons op verschillende manieren bereiken.
            </p>
            <div className="space-y-4">
              {/* Email */}
              <Card className="border border-blue-100 shadow-none bg-white">
                <CardContent className="p-4 flex items-center gap-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">E-mail</div>
                    <div className="text-gray-700 text-sm">info@aqua-power.nl</div>
                  </div>
                </CardContent>
              </Card>
              {/* Phone */}
              <Card className="border border-blue-100 shadow-none bg-white">
                <CardContent className="p-4 flex items-center gap-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Telefoon</div>
                    <div className="text-gray-700 text-sm">0686463310</div>
                    <div className="text-gray-700 text-sm">+31 85 820 08 76</div>
                  </div>
                </CardContent>
              </Card>
              {/* WhatsApp */}
              <Card className="border border-blue-100 shadow-none bg-white">
                <CardContent className="p-4 flex items-center gap-4">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <div className="text-gray-700 text-sm">0686463310</div>
                  </div>
                </CardContent>
              </Card>
              {/* Address */}
              <Card className="border border-blue-100 shadow-none bg-white">
                <CardContent className="p-4 flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Adres</div>
                    <div className="text-gray-700 text-sm">Waterweg 45, 3067 RG, Zuid-Holland</div>
                  </div>
                </CardContent>
              </Card>
              {/* Opening Hours */}
              <Card className="border border-blue-100 shadow-none bg-white">
                <CardContent className="p-4 flex items-center gap-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Openingstijden</div>
                    <div className="text-gray-700 text-sm">Ma-Vr: 08:00 - 17:00, Za: 09:00 - 15:00</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Direct Contact Message */}
          <div className="flex flex-col justify-center">
            <Card className="border border-blue-100 shadow-none bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-center text-gray-900">Direct contact opnemen</CardTitle>
                <CardDescription className="text-center text-gray-700">
                  We reageren snel op werkdagen
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-base text-gray-700 mb-4">
                    Voor de beste service raden wij aan direct contact op te nemen via telefoon, e-mail of WhatsApp.
                  </p>
                  <div className="grid gap-3">
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span className="text-base font-medium text-gray-900">0686463310</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span className="text-base font-medium text-gray-900">+31 85 820 08 76</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span className="text-base font-medium text-gray-900">info@aqua-power.nl</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                      <span className="text-base font-medium text-gray-900">0686463310</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="bg-cyan-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Bel ons direct
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
