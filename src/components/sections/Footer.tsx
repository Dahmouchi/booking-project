'use client';

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'À propos', href: '#' },
    { name: 'Carrières', href: '#' },
    { name: 'Presse', href: '#' },
    { name: 'Blog', href: '#' }
  ],
  support: [
    { name: 'Centre d\'aide', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Sécurité', href: '#' },
    { name: 'Statut', href: '#' }
  ],
  legal: [
    { name: 'Conditions d\'utilisation', href: '#' },
    { name: 'Politique de confidentialité', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'Mentions légales', href: '#' }
  ],
  hosting: [
    { name: 'Devenir hôte', href: '#' },
    { name: 'Guide de l\'hôte', href: '#' },
    { name: 'Assurance hôte', href: '#' },
    { name: 'Ressources', href: '#' }
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-teal-400 mb-4">StayNest</h3>
                <p className="text-slate-300 leading-relaxed">
                  Votre plateforme de confiance pour des séjours authentiques et des expériences inoubliables partout dans le monde.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail className="h-5 w-5 text-teal-400" />
                  <span>contact@staynest.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Phone className="h-5 w-5 text-teal-400" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="h-5 w-5 text-teal-400" />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Entreprise</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-slate-300 hover:text-teal-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-slate-300 hover:text-teal-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hosting Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Hébergement</h4>
              <ul className="space-y-3">
                {footerLinks.hosting.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-slate-300 hover:text-teal-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Légal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-slate-300 hover:text-teal-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Restez informé</h4>
              <p className="text-slate-300">
                Recevez nos dernières offres et actualités directement dans votre boîte mail.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-400"
              />
              <button className="bg-[#FFA03F] hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                S&apos;abonner
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              © 2024 StayNest. Tous droits réservés.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-6 w-6" />
                  </a>
                );
              })}
            </div>

            {/* Language/Currency Selector */}
            <div className="flex items-center space-x-4 text-sm">
              <select className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-teal-400">
                <option>Français</option>
                <option>English</option>
                <option>Español</option>
              </select>
              <select className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-teal-400">
                <option>EUR €</option>
                <option>USD $</option>
                <option>GBP £</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

