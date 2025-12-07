import React from 'react';
import { Instagram, Twitter, MapPin, Phone, Clock, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-4 flex items-center">
              Happy Pet Clinic
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Klinik hewan terpercaya di Kota Jambi. Kami menyediakan layanan medis lengkap mulai dari vaksinasi, sterilisasi, USG, hingga operasi caesar dengan penuh kasih sayang.
            </p>
            <div className="inline-block bg-teal-900 text-teal-200 text-xs px-2 py-1 rounded">
              Gratis Konsultasi
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Layanan Medis</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-teal-400 transition-colors cursor-default">USG & Rontgen</span></li>
              <li><span className="hover:text-teal-400 transition-colors cursor-default">Operasi Caesar (SC)</span></li>
              <li><span className="hover:text-teal-400 transition-colors cursor-default">Steril Jantan/Betina</span></li>
              <li><span className="hover:text-teal-400 transition-colors cursor-default">Grooming Kutu/Jamur</span></li>
              <li><span className="hover:text-teal-400 transition-colors cursor-default">Rawat Inap & Jalan</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Jam Praktik</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-teal-500 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Senin - Minggu</p>
                  <p>09:00 - 21:00 WIB</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 mr-2 flex items-center justify-center text-red-500 shrink-0 font-bold">24</div>
                <div>
                  <p className="font-semibold text-white">Unit Gawat Darurat (UGD)</p>
                  <p>Buka 24 Jam</p>
                </div>
              </li>
            </ul>
          </div>

          <div id="contact">
            <h3 className="text-white text-lg font-bold mb-4">Kontak Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-teal-500 shrink-0" />
                <span>Jl. Hayam Wuruk No. 14,<br />Jelutung, Kota Jambi</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-teal-500 shrink-0" />
                <a href="https://wa.me/6282280482089" className="hover:text-white underline decoration-dotted">
                  0822-8048-2089 (WA)
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/6282280482089" 
                  className="mt-2 inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-full transition-colors"
                >
                  <Send className="w-3 h-3 mr-2" /> Chat WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Happy Pet Clinic Jambi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;