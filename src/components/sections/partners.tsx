"use client"

import { partners } from '@/data/company-data'
import { Handshake } from 'lucide-react'
import Image from 'next/image'

export default function Partners() {
  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners]

  return (
    <section id="partners" className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold mb-4">
            <Handshake className="w-3 h-3 mr-2 text-blue-600" />
            MITRA TERPERCAYA
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Partner <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Terpercaya</span>
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Kami bekerja sama dengan perusahaan terbaik di industri untuk memastikan Anda mendapatkan layanan dan pengalaman berkualitas tinggi
          </p>
        </div>

        {/* Infinite Scrolling Logos */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8"
              >
                <div className="group cursor-pointer">
                  {/* Logo only - no white box */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto group-hover:scale-110 transition-all duration-300">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain group-hover:drop-shadow-lg transition-all duration-300"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center"><span class="text-lg sm:text-xl lg:text-2xl font-bold text-slate-600 group-hover:text-blue-600 transition-colors duration-300">${partner.name.split(' ').map(word => word[0]).join('')}</span></div>`;
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Stats */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Keunggulan Partnership Kami
              </h3>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Kemitraan strategis kami memastikan Anda mendapatkan layanan terbaik, akses eksklusif, dan pengalaman premium
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl sm:text-2xl">💰</span>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">
                  Harga Terbaik
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Tarif eksklusif dan penawaran khusus dari mitra terpercaya kami
                </p>
              </div>

              <div className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl sm:text-2xl">⭐</span>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">
                  Layanan Premium
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Akses ke fasilitas VIP dan layanan prioritas melalui kemitraan kami
                </p>
              </div>

              <div className="text-center group sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl sm:text-2xl">🔒</span>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">
                  Dukungan Terpercaya
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Dukungan 24/7 dari jaringan mitra kami memastikan layanan yang lancar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

