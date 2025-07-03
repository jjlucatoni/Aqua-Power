import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Helmet } from 'react-helmet-async';

const Reviews = () => {
  const reviews = [
    {
      author: "Jan de Vries",
      rating: 5,
      text: "Uitstekende service! Aqua Power heeft onze complete badkamer gerenoveerd. Professioneel werk, netjes uitgevoerd en binnen de afgesproken tijd. Zeer tevreden!",
      date: "2024-01-10",
      location: "Den Haag"
    },
    {
      author: "Maria Jansen",
      rating: 5,
      text: "Snelle en vakkundige hulp bij een lekkage. Binnen 2 uur ter plaatse en het probleem was snel opgelost. Eerlijke prijzen en goede communicatie.",
      date: "2024-01-05",
      location: "Zoetermeer"
    },
    {
      author: "Peter van der Berg",
      rating: 5,
      text: "Nieuwe CV-ketel geïnstalleerd. Alles perfect uitgevoerd, schoon opgeruimd en uitleg gegeven over de bediening. Aanrader!",
      date: "2023-12-28",
      location: "Rotterdam"
    },
    {
      author: "Sophie Bakker",
      rating: 5,
      text: "Warmtepomp installatie van A tot Z geregeld. Deskundig advies, keurige uitvoering en goede nazorg. Top bedrijf!",
      date: "2023-12-15",
      location: "Delft"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aqua Power",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": reviews.length,
      "bestRating": "5",
      "worstRating": "5"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.text,
      "datePublished": review.date
    }))
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Wat Onze Klanten Zeggen
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-slate-700">4.9/5</span>
            <span className="text-slate-600">• {reviews.length} beoordelingen</span>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ontdek waarom klanten in Den Haag en Zuid-Holland voor Aqua Power kiezen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-full">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-slate-500">
                        {new Date(review.date).toLocaleDateString('nl-NL')}
                      </span>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      "{review.text}"
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-slate-900">
                        {review.author}
                      </p>
                      <p className="text-sm text-slate-500">
                        📍 {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Ook tevreden met onze service? Deel uw ervaring!
          </p>
          <div className="inline-flex items-center space-x-4">
            <a 
              href="https://www.google.com/search?q=aqua+power+den+haag+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ⭐ Beoordeel ons op Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 