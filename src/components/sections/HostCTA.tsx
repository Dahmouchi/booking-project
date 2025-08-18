/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Euro, Shield, Users, ArrowRight } from 'lucide-react';


interface Stat {
  value: string;
  label: string;
}

interface HostCTAProps {
  data: {
    headerLabel: string;
    title: string;
    description: string;
    benefits: { title: string; description: string }[];
    ctaPrimary: string;
    ctaSecondary: string;
    stats: Stat[];
  };
  dir?: 'ltr' | 'rtl';
}

const icons = [Euro, Shield, Users];

export default function HostCTA({ data, dir = 'ltr' }: HostCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFA03F] to-[#f48617] text-white" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Home className="h-5 w-5" />
                <span className="text-sm font-medium">{data.headerLabel}</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 whitespace-pre-line">{data.title}</h2>
              
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">{data.description}</p>
            </div>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              {data.benefits.map((benefit, index) => {
                const IconComponent = icons[index];
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-teal-200" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-teal-100">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-white text-[#FFA03F] hover:bg-teal-50 font-semibold px-8 py-3">
                {data.ctaPrimary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3">
                {data.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Right Content - Image/Stats */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Host welcoming"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {data.stats.slice(0, 2).map((stat, index) => (
              <Card
                key={index}
                className={`absolute ${index === 0 ? '-bottom-6 -left-6' : '-top-6 -right-6'} bg-white shadow-xl border-0`}
              >
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-[#FFA03F] mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {data.stats.slice(2).map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-teal-200 mb-2">{stat.value}</div>
                <div className="text-teal-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
