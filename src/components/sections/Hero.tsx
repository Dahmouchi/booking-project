/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';

type HeroProps = {
  data: {
    title: string;
    highlight: string;
    subtitle: string;
    destination: string;
    placeholderDestination: string;
    arrival: string;
    departure: string;
    guests: string;
    placeholderGuests: string;
    search: string;
  };
};

export default function Hero({ data }: HeroProps) {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  return (
    <section className="relative lg:px-16 overflow-hidden">
      {/* Floating background flight */}
      <motion.img
        className="absolute top-10 right-10 w-[30vh] h-auto bg-cover"
        src="/flight.png"
        alt="flight"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 h-full">
        {/* Left Section */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 h-full flex flex-col items-center justify-center">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
              {data.title}{' '}
              <motion.span
                className="text-[#ff914d] inline-block"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {data.highlight}
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
              {data.subtitle}
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className='w-full'
          >
            <Card className="p-6 bg-white shadow-xl border-0  mx-auto w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Destination */}
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {data.destination}
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      type="text"
                      placeholder={data.placeholderDestination}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10 h-12 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                </div>

                {/* Check-in */}
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {data.arrival}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="pl-10 h-12 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                </div>

                {/* Check-out */}
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {data.departure}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="pl-10 h-12 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {data.guests}
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      type="number"
                      placeholder={data.placeholderGuests}
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      min="1"
                      className="pl-10 h-12 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-[#ff914d] hover:bg-teal-700 text-white px-8 py-3 text-lg font-semibold transition-transform hover:scale-105"
                >
                  <Search className="mr-2 h-5 w-5" />
                  {data.search}
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Right Section (Hero Image) */}
        <motion.div
          className="w-full h-full flex justify-center items-center"
          
          
           animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <img
            src="/images/room.png"
            alt="Hero Background"
            className="w-2/3 h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
