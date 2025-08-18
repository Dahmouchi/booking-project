/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Search, Calendar, Heart, Shield } from 'lucide-react';



interface HowItWorksProps {
  data: {
    steps: { title: string; description: string }[];
    title: string;
    subtitle: string;
    cta: string;
  };
  dir?: 'ltr' | 'rtl';
}

const icons = [Search, Calendar, Heart, Shield];
const colors = ['text-[#FFA03F]', 'text-blue-600', 'text-rose-600', 'text-emerald-600'];

export default function HowItWorks({ data, dir = 'ltr' }: HowItWorksProps) {
  return (
    <section className="bg-white" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{data.title}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{data.subtitle}</p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.steps.map((step, index) => {
            const IconComponent = icons[index];
            return (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50"
              >
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full text-slate-600 font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 ${colors[index]}`}>
                      <IconComponent size={32} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-slate-600">
            <div className="w-8 h-0.5 bg-[#FFA03F]"></div>
            <span className="text-sm font-medium">{data.cta}</span>
            <div className="w-8 h-0.5 bg-[#FFA03F]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
