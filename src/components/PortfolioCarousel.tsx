import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { X } from "lucide-react";

const PortfolioCarousel = ({ images }: { images?: { src: string; title: string; description: string }[] }) => {
  const portfolioImages = images || [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
      title: "Moderne Badkamer Renovatie",
      description: "Complete badkamerrenovatie met luxe afwerking"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      title: "CV-Installatie",
      description: "Energiezuinige CV-ketel installatie"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      title: "Sanitair Werkzaamheden",
      description: "Professionele sanitair installatie"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      title: "Leidingwerk",
      description: "Moderne leidinginstallaties"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      title: "Onderhoudswerkzaamheden",
      description: "Periodiek onderhoud en reparaties"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      title: "Keuken Installatie",
      description: "Sanitair voor moderne keukens"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      title: "Douche Installatie",
      description: "Luxe douchecabines en installaties"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      title: "Technische Installaties",
      description: "Geavanceerde technische systemen"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
      title: "Badkamer Renovatie 2",
      description: "Stijlvolle badkamer met moderne uitstraling"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
      title: "Toilet Renovatie",
      description: "Complete toilet renovatie inclusief tegels"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
      title: "Verwarmingssysteem",
      description: "Moderne vloerverwarming installatie"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      title: "Kraanwerk",
      description: "Hoogwaardige kranen en fittingen"
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop",
      title: "Waterleiding Reparatie",
      description: "Professionele leidingwerk en reparaties"
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      title: "Badkuip Installatie",
      description: "Luxe badkuipen en whirlpools"
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop",
      title: "Radiator Installatie",
      description: "Design radiatoren en verwarmingselementen"
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
      title: "Loodgieterwerk",
      description: "Vakkundige loodgieterswerkzaamheden"
    },
    {
      id: 17,
      src: "https://images.unsplash.com/photo-1599629954004-42d18d46ef90?w=800&h=600&fit=crop",
      title: "Nieuwe Installaties",
      description: "Complete nieuwbouw installaties"
    },
    {
      id: 18,
      src: "https://images.unsplash.com/photo-1603712928945-ddcc23dd3e6c?w=800&h=600&fit=crop",
      title: "Afwerking Project",
      description: "Perfecte afwerking en detaillering"
    }
  ];

  // State to manage the currently selected image for full-screen view
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lock body scroll when the full-screen image is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedImage]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Carousel className="w-full" opts={{ align: "start", loop: true }}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {portfolioImages.map((image) => (
            <CarouselItem key={image.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg cursor-pointer" onClick={() => setSelectedImage(image.src)}>
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    />

                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-blue-600 text-white border-0 hover:bg-blue-700 shadow-lg" />
        <CarouselNext className="bg-blue-600 text-white border-0 hover:bg-blue-700 shadow-lg" />
      </Carousel>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage!}
            alt="Project full view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default PortfolioCarousel;
