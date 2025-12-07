import React from 'react';
import { Stethoscope, Home, Syringe, Scissors, Activity, HeartPulse } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'UGD & Rawat Inap',
    description: 'Layanan gawat darurat (UGD) 24 jam dan fasilitas rawat inap yang nyaman dan terpantau untuk pemulihan hewan.',
    icon: <Activity className="h-8 w-8 text-white" />,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    title: 'Operasi & Bedah',
    description: 'Melayani operasi besar/kecil, sterilisasi (jantan/betina), hingga operasi caesar (Sectio Caesarea) dengan peralatan steril.',
    icon: <Stethoscope className="h-8 w-8 text-white" />,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    title: 'USG & Cek Lab',
    description: 'Diagnosa lebih akurat dengan teknologi USG dan cek kesehatan rutin (Control Healthy) untuk deteksi dini.',
    icon: <HeartPulse className="h-8 w-8 text-white" />,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    title: 'Vaksinasi Lengkap',
    description: 'Sedia vaksin rabies dan vaksin lengkap lainnya untuk mencegah penyakit menular berbahaya pada anjing dan kucing.',
    icon: <Syringe className="h-8 w-8 text-white" />,
    image: 'https://images.unsplash.com/photo-1628009368231-7603352984c3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '5',
    title: 'Grooming Treatment',
    description: 'Mandi sehat dan perawatan khusus (treatment) untuk masalah kutu, jamur, dan exim agar kulit hewan kembali sehat.',
    icon: <Scissors className="h-8 w-8 text-white" />,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '6',
    title: 'Titip Sehat',
    description: 'Layanan penitipan hewan (pet boarding) saat Anda bepergian. Hewan diawasi, diberi makan, dan diajak bermain.',
    icon: <Home className="h-8 w-8 text-white" />,
    image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&q=80&w=400'
  }
];

const Services: React.FC = () => {
  return (
    <div id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Fasilitas & Layanan</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Perawatan Medis Terlengkap di Jambi
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Dari pemeriksaan rutin hingga tindakan operasi rumit, tim dokter kami siap membantu kesayangan Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white border border-slate-100">
              <div className="flex-shrink-0 relative h-48">
                <img className="h-full w-full object-cover" src={service.image} alt={service.title} />
                <div className="absolute top-4 right-4 bg-teal-600 rounded-full p-2 shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base text-slate-500">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6">
                  <a href="https://wa.me/6282280482089" className="text-base font-semibold text-teal-600 hover:text-teal-500 flex items-center">
                    Tanya via WA <span aria-hidden="true" className="ml-1">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;