/* eslint-disable @next/next/no-img-element */
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Wifi, Car, Coffee, Waves } from 'lucide-react';
import Script from 'next/script';
import { useEffect } from 'react';

const properties = [
  {
    id: 1,
    title: 'Villa moderne avec vue sur mer',
    location: 'Nice, France',
    price: 180,
    rating: 4.9,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    amenities: [
      { icon: Wifi, label: 'WiFi' },
      { icon: Car, label: 'Parking' },
      { icon: Waves, label: 'Piscine' }
    ],
    badge: 'Coup de cœur'
  },
  {
    id: 2,
    title: 'Appartement cosy centre-ville',
    location: 'Paris, France',
    price: 95,
    rating: 4.7,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    amenities: [
      { icon: Wifi, label: 'WiFi' },
      { icon: Coffee, label: 'Cuisine' }
    ],
    badge: 'Nouveau'
  },
  {
    id: 3,
    title: 'Chalet montagne authentique',
    location: 'Chamonix, France',
    price: 220,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    amenities: [
      { icon: Wifi, label: 'WiFi' },
      { icon: Car, label: 'Parking' },
      { icon: Coffee, label: 'Cuisine' }
    ],
    badge: 'Superhost'
  },
  {
    id: 4,
    title: 'Loft industriel design',
    location: 'Lyon, France',
    price: 130,
    rating: 4.6,
    reviews: 73,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    amenities: [
      { icon: Wifi, label: 'WiFi' },
      { icon: Coffee, label: 'Cuisine' }
    ],
    badge: null
  },
  {
    id: 5,
    title: 'Maison de campagne charme',
    location: 'Provence, France',
    price: 160,
    rating: 4.9,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    amenities: [
      { icon: Wifi, label: 'WiFi' },
      { icon: Car, label: 'Parking' },
      { icon: Waves, label: 'Piscine' }
    ],
    badge: 'Coup de cœur'
  },
  {
    id: 6,
    title: 'Studio moderne quartier branché',
    location: 'Marseille, France',
    price: 75,
    rating: 4.5,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    amenities: [
      { icon: Wifi, label: 'WiFi' },
      { icon: Coffee, label: 'Cuisine' }
    ],
    badge: null
  }
];

export default function FeaturedProperties() {
    useEffect(() => {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { PageLanguage: "en" },
          "google_translate_element"
        );
      };
    }, []);
  return (
    <section className="py-16 md:py-24 bg-slate-50">
       <Script
     src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    ></Script>
{/* Google Translate CSS */}
    <link
     rel="stylesheet"
     type="text/css"
     href="https://www.gstatic.com/_/translate_http/_/ss/k=translate_http.tr.26tY-h6gH9w.L.W.O/am=CAM/d=0/rs=AN8SPfpIXxhebB2A47D9J-MACsXmFF6Vew/m=el_main_css"
    />
        <div id="google_translate_element" style={{ position: 'fixed', right: 0, top: 100, zIndex: 1000, backgroundColor:'rgba(255, 255, 255, 0.7)', borderRadius:'10px', padding:'5px' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Propriétés en vedette
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Découvrez une sélection de nos logements les plus appréciés
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card 
              key={property.id} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden bg-white"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                {property.badge && (
                  <Badge 
                    className="absolute top-4 left-4 bg-[#FFA03F] hover:bg-teal-700 text-white"
                  >
                    {property.badge}
                  </Badge>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-slate-800">
                      {property.rating}
                    </span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title and Location */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-slate-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex items-center space-x-4 mb-4">
                  {property.amenities.map((amenity, index) => {
                    const IconComponent = amenity.icon;
                    return (
                      <div key={index} className="flex items-center space-x-1 text-slate-500">
                        <IconComponent className="h-4 w-4" />
                        <span className="text-xs">{amenity.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Price and Reviews */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-slate-800">
                      €{property.price}
                    </span>
                    <span className="text-slate-600 text-sm"> / nuit</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    {property.reviews} avis
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-[#FFA03F] hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Voir plus de propriétés
          </button>
        </div>
      </div>
    </section>
  );
}

