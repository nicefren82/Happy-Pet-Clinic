import React from 'react';
import { ArrowRight, Activity, Clock, Heart } from 'lucide-react';

const Hero: React.FC<{ onOpenChat: () => void }> = ({ onOpenChat }) => {
  const whatsappUrl = "https://wa.me/6282280482089?text=Halo%20Happy%20Pet%20Clinic,%20saya%20ingin%20klaim%20gratis%20konsultasi.";

  return (
    <div className="relative bg-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-teal-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-teal-200 bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wide mb-4">
                 Klinik Hewan Terbaik di Jambi
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Layanan Lengkap</span>{' '}
                <span className="block text-teal-600 xl:inline">& Gratis Konsultasi</span>
              </h1>
              <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Happy Pet Clinic menyediakan layanan USG, Operasi Besar/Kecil, Vaksinasi, Steril, hingga Rawat Inap & Titip Sehat. UGD siap 24 Jam untuk kondisi darurat.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10 transition-all"
                  >
                    Booking via WA
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={onOpenChat}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200 md:py-4 md:text-lg md:px-10 transition-all"
                  >
                    Tanya AI Dulu
                    <Activity className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left text-sm text-slate-500">
                <div className="flex items-center justify-center sm:justify-start gap-2 bg-white/50 p-2 rounded-lg">
                  <Clock className="text-teal-500 h-5 w-5" />
                  <span>Praktik 09:00 - 21:00</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 bg-white/50 p-2 rounded-lg">
                  <Heart className="text-teal-500 h-5 w-5" />
                  <span>UGD 24 Jam</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 bg-white/50 p-2 rounded-lg">
                  <Activity className="text-teal-500 h-5 w-5" />
                  <span>USG & Operasi</span>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=2525&auto=format&fit=crop"
          alt="Happy veterinarian treating a dog"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-transparent lg:via-teal-50/20"></div>
      </div>
    </div>
  );
};

export default Hero;