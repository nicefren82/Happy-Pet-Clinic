import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const whatsappUrl = "https://wa.me/6282280482089?text=Halo%20Dokter,%20saya%20ingin%20tanya%20tentang%20hewan%20saya.";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero onOpenChat={() => setIsChatOpen(true)} />
        
        {/* Features/Stats Section */}
        <div id="features" className="bg-teal-700 py-12">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                 <div className="text-4xl font-bold text-white mb-1">24/7</div>
                 <div className="text-teal-200 text-sm font-medium">Layanan UGD</div>
              </div>
              <div>
                 <div className="text-4xl font-bold text-white mb-1">100%</div>
                 <div className="text-teal-200 text-sm font-medium">Dokter Berpengalaman</div>
              </div>
              <div>
                 <div className="text-4xl font-bold text-white mb-1">GRATIS</div>
                 <div className="text-teal-200 text-sm font-medium">Konsultasi Awal</div>
              </div>
              <div>
                 <div className="text-4xl font-bold text-white mb-1">Lengkap</div>
                 <div className="text-teal-200 text-sm font-medium">Fasilitas Medis</div>
              </div>
           </div>
        </div>

        <Services />
        
        {/* CTA Section */}
        <div className="bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Hewan Kesayangan Anda Butuh Perawatan?
            </h2>
            <p className="mt-4 text-xl text-slate-300">
              Jangan tunda kesehatan mereka. Kunjungi Happy Pet Clinic di Jelutung, Jambi.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-md bg-green-600 text-white font-bold hover:bg-green-700 transition duration-300 flex items-center justify-center"
              >
                Chat WA Dokter (0822-8048-2089)
              </a>
              <button
                onClick={() => setIsChatOpen(true)}
                className="px-8 py-3 rounded-md bg-slate-700 text-white font-bold hover:bg-slate-600 transition duration-300"
              >
                Tanya AI Assistant
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      <ChatWidget 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        onOpen={() => setIsChatOpen(true)}
      />
    </div>
  );
};

export default App;