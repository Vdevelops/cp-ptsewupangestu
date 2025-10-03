"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building, Factory, Home, Store, Users, Star, CheckCircle } from 'lucide-react'
import { clientSegments } from '@/data/company-data'

const iconMap = {
  Building,
  Factory,
  Home,
  Store
}

export default function ClientSegments() {
  return (
    <section id="clients" className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold mb-4">
            <Users className="w-3 h-3 mr-2 text-blue-600" />
            SEGMEN KLIEN
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 animate-fade-in-up">
            Sektor <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Terpercaya</span>
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto animate-slide-in-left leading-relaxed">
            Kami melayani berbagai sektor industri dengan solusi yang disesuaikan untuk setiap kebutuhan bisnis yang unik
          </p>
        </div>

        {/* Client Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clientSegments.map((segment, index) => {
            const IconComponent = iconMap[segment.icon as keyof typeof iconMap]
            const gradients = [
              'from-slate-600 to-slate-500',
              'from-slate-500 to-slate-400',
              'from-blue-600 to-blue-500',
              'from-slate-400 to-slate-300'
            ]
            
            return (
              <div key={segment.id} className="group relative">
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-300 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Card className="relative bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 h-full group-hover:-translate-y-2">
                  <CardHeader className="text-center pb-4">
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center">
                        <Star className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900 mb-3">
                      {segment.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-600 leading-relaxed">
                      {segment.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-2xl mb-3 shadow-lg">
                        <span className="text-sm font-bold">100+</span>
                      </div>
                      <p className="text-sm text-slate-600 font-medium">Proyek Selesai</p>
                      <div className="flex items-center justify-center mt-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-1" />
                        <span className="text-xs text-slate-500">Terpercaya</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
