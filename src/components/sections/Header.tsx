/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, Search, UserPlus, Phone, Globe } from 'lucide-react';
import AuthDialogButton from '../header/LoginButton';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { LanguageSelector } from '../LangSwitcher';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence

type HeaderProps = {
  data: {
    home: string;
    browse: string;
    host: string;
    contact: string;
    login: string;
  };
  currentLang: 'en' | 'fr' | 'ar';
};

export default function Header({ data, currentLang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // New state for scroll animation
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      console.log('User is logged in:', session.user);
    } else {
      console.log('No user session found');
    }
  }, [session]);

  // Scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) { // Trigger after 50px scroll
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const changeLang = (lang: string) => {
    // remove current lang prefix from path
    const segments = pathname.split('/');
    segments[1] = lang; // replace the locale
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <motion.header
      initial={false}
      animate={scrolled ? 'scrolled' : 'top'}
      variants={{
        top: { backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: 'none', backdropFilter: 'blur(0px)' },
        scrolled: { backgroundColor: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(8px)' }
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="sticky top-0 z-50"
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-20 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="/images/logov1.png" alt="" className="w-36 h-auto" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Home Link */}
            <motion.a
              href="#home"
              className="flex items-center space-x-1 text-slate-700 hover:text-[#ff914d] transition-colors relative overflow-hidden group"
              whileHover="hover"
              whileTap="tap"
              variants={{
                hover: { y: -2 },
                tap: { scale: 0.95 }
              }}
            >
              <Home size={18} />
              <span>{data.home}</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff914d]"
                initial={{ scaleX: 0 }}
                variants={{
                  hover: { scaleX: 1 },
                  tap: { scaleX: 0 }
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </motion.a>
            {/* Host Link */}
            <motion.a
              href="#host"
              className="flex items-center space-x-1 text-slate-700 hover:text-[#ff914d] transition-colors relative overflow-hidden group"
              whileHover="hover"
              whileTap="tap"
              variants={{
                hover: { y: -2 },
                tap: { scale: 0.95 }
              }}
            >
              <UserPlus size={18} />
              <span>{data.host}</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff914d]"
                initial={{ scaleX: 0 }}
                variants={{
                  hover: { scaleX: 1 },
                  tap: { scaleX: 0 }
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </motion.a>
            {/* Contact Link */}
            <motion.a
              href="#contact"
              className="flex items-center space-x-1 text-slate-700 hover:text-[#ff914d] transition-colors relative overflow-hidden group"
              whileHover="hover"
              whileTap="tap"
              variants={{
                hover: { y: -2 },
                tap: { scale: 0.95 }
              }}
            >
              <Phone size={18} />
              <span>{data.contact}</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff914d]"
                initial={{ scaleX: 0 }}
                variants={{
                  hover: { scaleX: 1 },
                  tap: { scaleX: 0 }
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </motion.a>
          </nav>

          {/* Right side: Auth + Lang Switch */}
          <div className="flex items-center space-x-4">
             <LanguageSelector />
            <AuthDialogButton />
            
          </div>
        </div>
      </div>

      
    </motion.header>
  );
}