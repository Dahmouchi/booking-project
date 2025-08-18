/* eslint-disable @next/next/no-img-element */
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marie Dubois',
    location: 'Paris, France',
    rating: 5,
    comment: 'Une expérience exceptionnelle ! L\'appartement était exactement comme sur les photos, propre et bien situé. L\'hôte était très accueillant et disponible. Je recommande vivement !',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    property: 'Villa moderne avec vue sur mer'
  },
  {
    id: 2,
    name: 'Thomas Martin',
    location: 'Lyon, France',
    rating: 5,
    comment: 'Séjour parfait en famille ! La maison était spacieuse, bien équipée et dans un quartier calme. Les enfants ont adoré la piscine. Nous reviendrons certainement !',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    property: 'Maison de campagne charme'
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    location: 'Marseille, France',
    rating: 5,
    comment: 'Excellent rapport qualité-prix ! Le studio était parfait pour un week-end en amoureux. Très bien décoré et idéalement situé pour visiter la ville. Service client au top !',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    property: 'Studio moderne quartier branché'
  },
  {
    id: 4,
    name: 'Pierre Moreau',
    location: 'Nice, France',
    rating: 5,
    comment: 'Voyage d\'affaires réussi grâce à ce logement. Connexion WiFi excellente, espace de travail confortable et proche du centre. L\'hôte a été très professionnel.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    property: 'Loft industriel design'
  },
  {
    id: 5,
    name: 'Julie Rousseau',
    location: 'Toulouse, France',
    rating: 5,
    comment: 'Week-end magique à la montagne ! Le chalet était chaleureux et authentique. Vue imprenable sur les sommets. L\'expérience parfaite pour se ressourcer.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    property: 'Chalet montagne authentique'
  },
  {
    id: 6,
    name: 'Antoine Leroy',
    location: 'Bordeaux, France',
    rating: 5,
    comment: 'Première fois sur cette plateforme et je suis conquis ! Réservation simple, communication fluide avec l\'hôte, et logement impeccable. Bravo !',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    property: 'Appartement cosy centre-ville'
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Ce que disent nos voyageurs
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Des milliers de voyageurs nous font confiance pour leurs séjours
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-[#FFA03F] opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star 
                      key={index} 
                      className="h-5 w-5 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-700 mb-6 leading-relaxed">
                  &quot;{testimonial.comment}&quot;
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </Avatar>
                  <div>
                    <div className="font-semibold text-slate-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.location}
                    </div>
                    <div className="text-xs text-[#FFA03F] font-medium">
                      {testimonial.property}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#FFA03F]">4.9</div>
            <div className="text-slate-600">Note moyenne</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FFA03F]">98%</div>
            <div className="text-slate-600">Clients satisfaits</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FFA03F]">50K+</div>
            <div className="text-slate-600">Avis positifs</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FFA03F]">24/7</div>
            <div className="text-slate-600">Support client</div>
          </div>
        </div>
      </div>
    </section>
  );
}

