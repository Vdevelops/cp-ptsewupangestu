"use client"

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Wrench, Clock, DollarSign, Shield, Award, CheckCircle } from 'lucide-react'
import { advantages } from '@/data/company-data'

const iconMap = {
  Users,
  Wrench,
  Clock,
  DollarSign
  
}

export default function Advantages() {
  return (
    <section id="advantages" className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Keunggulan Kami</h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
            Mengapa klien memilih PT Sewu Pangestu Lestari sebagai mitra terpercaya dalam solusi kebersihan dan keamanan
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {advantages.map((advantage) => {
            const IconComponent = iconMap[advantage.icon as keyof typeof iconMap]
            
            return (
              <Card key={advantage.id} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-blue-100 group-hover:bg-blue-200 p-3 rounded-full w-fit mb-3 transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-blue-700" />
                  </div>
                  <CardTitle className="text-base font-bold text-slate-900 mb-2">
                    {advantage.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-slate-600">
                    {advantage.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        {/* Value Proposition */}
        <div className="bg-blue-50 rounded-lg p-4 md:p-6">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Komitmen Kualitas</h3>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan terbaik dengan standar internasional yang konsisten dan terpercaya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-blue-600 text-white p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Shield className="h-6 w-6" />
              </div>
              <h4 className="text-base font-semibold text-slate-900 mb-2">Sertifikasi Internasional</h4>
              <p className="text-xs text-slate-600">
                Tim kami memiliki sertifikasi internasional yang diakui untuk menjamin kualitas layanan yang konsisten
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="text-base font-semibold text-slate-900 mb-2">Penghargaan Industri</h4>
              <p className="text-xs text-slate-600">
                Diakui sebagai perusahaan terbaik dalam industri kebersihan dan keamanan dengan prestasi yang membanggakan
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h4 className="text-base font-semibold text-slate-900 mb-2">Garansi Kepuasan</h4>
              <p className="text-xs text-slate-600">
                100% kepuasan klien dengan sistem monitoring dan evaluasi berkelanjutan yang transparan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
