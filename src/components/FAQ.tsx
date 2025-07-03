import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from 'react-helmet-async';

const FAQ = () => {
  const faqData = [
    {
      question: "Wat kost een sanitair installatie in Den Haag?",
      answer: "De kosten voor sanitair installatie variëren afhankelijk van het type werk. Een eenvoudige kraan vervangen kost vanaf €75, een complete badkamer renovatie vanaf €3.500. Wij geven altijd een gratis offerte vooraf."
    },
    {
      question: "Hoe snel kunnen jullie langskomen bij een spoedgeval?",
      answer: "Bij spoedgevallen streven wij ernaar binnen 2 uur ter plaatse te zijn in Den Haag en omgeving. Voor reguliere afspraken kunnen wij meestal binnen 24-48 uur langskomen."
    },
    {
      question: "Welke gebieden bedienen jullie naast Den Haag?",
      answer: "Wij bedienen heel Zuid-Holland, inclusief Rotterdam, Zoetermeer, Delft, Leiden, Gouda en alle omliggende gemeentes. Voor locaties verder weg vragen wij mogelijk reiskosten."
    },
    {
      question: "Geven jullie garantie op het uitgevoerde werk?",
      answer: "Ja, wij geven 2 jaar garantie op alle uitgevoerde werkzaamheden en gebruikte materialen. Voor A-merk producten geldt vaak een langere fabrieksgarantie."
    },
    {
      question: "Kunnen jullie ook in het weekend werken?",
      answer: "Voor spoedgevallen zijn wij 7 dagen per week bereikbaar. Reguliere werkzaamheden plannen wij normaal gesproken van maandag tot vrijdag tussen 08:00-17:00."
    },
    {
      question: "Welke betaalmethodes accepteren jullie?",
      answer: "Wij accepteren contant geld, pinbetalingen, bankoverschrijvingen en factuurbetalingen. Voor particuliere klanten hanteren wij meestal een betalingstermijn van 14 dagen."
    },
    {
      question: "Doen jullie ook onderhoud aan warmtepompen?",
      answer: "Ja, wij zijn gespecialiseerd in onderhoud, reparatie en installatie van warmtepompen. Wij hebben ervaring met alle grote merken en typen warmtepompen."
    },
    {
      question: "Wat moet ik doen bij een waterlek?",
      answer: "Bij een waterlek: 1) Sluit direct de hoofdkraan af, 2) Schakel indien nodig elektriciteit uit, 3) Bel ons direct op +31 85 820 08 76 voor spoedassistentie, 4) Probeer het water op te vangen."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Veelgestelde Vragen
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Vind snel antwoorden op de meest gestelde vragen over onze installatie diensten in Den Haag en Zuid-Holland.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
                <span className="font-semibold text-slate-900">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Heeft u nog andere vragen? Neem gerust contact met ons op.
          </p>
          <div className="inline-flex items-center space-x-4">
            <a href="tel:+31858200876" className="text-blue-600 hover:text-blue-700 font-medium">
              📞 +31 85 820 08 76
            </a>
            <span className="text-slate-400">|</span>
            <a href="mailto:info@aqua-power.nl" className="text-blue-600 hover:text-blue-700 font-medium">
              ✉️ info@aqua-power.nl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 