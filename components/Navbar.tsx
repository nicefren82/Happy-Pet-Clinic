import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = "https://wa.me/6282280482089?text=Halo%20Happy%20Pet%20Clinic,%20saya%20ingin%20konsultasi.";

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Layanan', href: '#services' },
    { name: 'Fasilitas', href: '#features' },
    { name: 'Lokasi', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Pastikan file logo Anda bernama 'happy-pet-logo.png' dan berada di folder public */}
              <img 
                className="h-16 w-auto" 
                src="/happy-pet-logo.png" 
                alt="Happy Pet Clinic Logo" 
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-teal-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 text-white px-5 py-2 rounded-full font-medium hover:bg-teal-700 transition-colors shadow-md flex items-center"
            >
              WA Sekarang
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-teal-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-teal-600 hover:bg-teal-700 mt-4"
              onClick={() => setIsOpen(false)}
            >
              Hubungi Kami via WA
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;