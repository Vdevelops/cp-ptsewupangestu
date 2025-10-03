"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Building, Wrench, MapPin, Calendar, Users, Star, ArrowRight, Eye } from 'lucide-react'
import { showcaseItems } from '@/data/company-data'

export default function Showcase() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'project' | 'layanan'>('all')
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const filteredItems = selectedCategory === 'all' 
    ? showcaseItems 
    : showcaseItems.filter(item => item.category === selectedCategory)

  return (
    <section id="showcase" className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold mb-4">
            <Star className="w-3 h-3 mr-2 text-blue-600" />
            SHOWCASE PROJECT & LAYANAN
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 animate-fade-in-up">
            Portfolio <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Kami</span>
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto animate-slide-in-left leading-relaxed">
            Lihat berbagai proyek dan layanan yang telah kami selesaikan dengan standar tinggi dan kepuasan klien yang maksimal
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setSelectedCategory('project')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === 'project'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
            }`}
          >
            <Building className="w-4 h-4 mr-2 inline" />
            Proyek
          </button>
          <button
            onClick={() => setSelectedCategory('layanan')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === 'layanan'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
            }`}
          >
            <Wrench className="w-4 h-4 mr-2 inline" />
            Layanan
          </button>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Card className="relative overflow-hidden bg-white border border-slate-200 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Placeholder for image */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                      <Building className="w-16 h-16 text-blue-400" />
                    </div>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                    hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm font-medium">Lihat Detail</span>
                        </div>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.category === 'project' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {item.category === 'project' ? 'Proyek' : 'Layanan'}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Details on hover */}
                  <div className={`transition-all duration-300 ${
                    hoveredItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="space-y-3 mb-4">
                      <h4 className="font-semibold text-slate-900 text-sm">Detail Layanan:</h4>
                      <ul className="space-y-2">
                        {item.details.map((detail, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                    <div className="flex items-center space-x-4">
                      {item.client && (
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{item.client}</span>
                        </div>
                      )}
                      {item.year && (
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.year}</span>
                        </div>
                      )}
                    </div>
                    {item.location && (
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Tertarik dengan Portfolio Kami?
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Konsultasikan kebutuhan proyek atau layanan Anda dengan tim profesional kami untuk mendapatkan solusi terbaik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Konsultasi Gratis
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Lihat Semua Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

