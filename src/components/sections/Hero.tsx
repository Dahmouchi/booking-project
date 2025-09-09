/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(255,145,77,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-[#b91d00] dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
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
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <div className="relative min-h-screen w-full  overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
      </div>

      <section className="relative lg:px-16 overflow-hidden lg:mt-10">
        {/* Floating background flight */}
        <motion.img
          className="absolute top-10 right-10 lg:w-[30vh] w-[10vh] h-auto bg-cover"
          src="/flight.png"
          alt="flight"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full lg:pb-8">
          {/* Left Section */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 h-full flex flex-col gap-4 items-center justify-center">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
                {data.title}{" "}
                <motion.span
                  className="text-[#b91d00] inline-block"
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
              className="w-full"
            >
              <Card className="p-6 bg-white shadow-xl border  mx-auto w-full">
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
                    className="w-full md:w-auto bg-[#b91d00] hover:bg-teal-700 text-white px-8 py-3 text-lg font-semibold transition-transform hover:scale-105"
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
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <img
              src="/images/room.png"
              alt="Hero Background"
              className="w-2/3 h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
