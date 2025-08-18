/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, Search, UserPlus, Phone, Globe } from 'lucide-react';
import AuthDialogButton from '../header/LoginButton';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { LanguageSelector } from '../LangSwitcher';

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

  const changeLang = (lang: string) => {
    // remove current lang prefix from path
    const segments = pathname.split('/');
    segments[1] = lang; // replace the locale
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <header className="sticky top-0 z-50 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-[#FFA03F]">StayNest</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="flex items-center space-x-1 text-slate-700 hover:text-[#FFA03F] transition-colors">
              <Home size={18} />
              <span>{data.home}</span>
            </a>
            <a href="#browse" className="flex items-center space-x-1 text-slate-700 hover:text-[#FFA03F] transition-colors">
              <Search size={18} />
              <span>{data.browse}</span>
            </a>
            <a href="#host" className="flex items-center space-x-1 text-slate-700 hover:text-[#FFA03F] transition-colors">
              <UserPlus size={18} />
              <span>{data.host}</span>
            </a>
            <a href="#contact" className="flex items-center space-x-1 text-slate-700 hover:text-[#FFA03F] transition-colors">
              <Phone size={18} />
              <span>{data.contact}</span>
            </a>
          </nav>

          {/* Right side: Auth + Lang Switch */}
          <div className="hidden md:flex items-center space-x-4">
             <LanguageSelector />
            <AuthDialogButton />

            {/* Language Switcher */}
           
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
