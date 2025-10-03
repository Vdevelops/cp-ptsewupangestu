"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sparkles, Shield, Package, CheckCircle, ArrowRight, Star, Clock, Award } from 'lucide-react'
import { services } from '@/data/company-data'

const iconMap = {
  Sparkles,
  Shield,
  Package
}

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold mb-4">
            <Star className="w-3 h-3 mr-2 text-blue-600" />
            LAYANAN KAMI
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 animate-fade-in-up">
            Solusi <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Terintegrasi</span>
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto animate-slide-in-left leading-relaxed">
            Layanan kebersihan dan keamanan profesional dengan standar internasional yang disesuaikan untuk kebutuhan bisnis Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            const gradients = [
              'from-slate-600 to-slate-500',
              'from-slate-500 to-slate-400', 
              'from-blue-600 to-blue-500'
            ]
            const bgGradients = [
              'from-slate-50 to-gray-50',
              'from-gray-50 to-slate-50',
              'from-blue-50 to-slate-50'
            ]

            return (
              <div key={service.id} className="group relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-300 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Card className="relative bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center">
                        <Star className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-medium py-3 transition-all duration-300 group-hover:shadow-lg">
                      Pelajari Lebih Lanjut
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
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
