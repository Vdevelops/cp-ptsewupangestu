"use client"

import { MapPin, Phone, Building, Users, Award, Target, Eye, Star, CheckCircle, Sparkles } from 'lucide-react'
import { companyInfo, branches } from '@/data/company-data'

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-white smooth-scroll component-transition">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold mb-4">
            <Sparkles className="w-3 h-3 mr-2 text-blue-600" />
            TENTANG KAMI
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 animate-fade-in-up">
            Mengapa Memilih <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Kami?</span>
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto animate-slide-in-left leading-relaxed">
            {companyInfo.description}
          </p>
        </div>

        {/* Company Stats - Subtle Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* First Stat - Subtle Blue */}
          <div className="text-center group">
            <div className="relative mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-500 rounded-full flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-all duration-300">
                <Building className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-700 mb-2">{companyInfo.founded}</h3>
            <p className="text-slate-600 font-medium text-sm">Tahun Berpengalaman</p>
          </div>

          {/* Second Stat - Subtle Gray */}
          <div className="text-center group">
            <div className="relative mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-400 rounded-full flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-all duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-600 mb-2">{companyInfo.employees}</h3>
            <p className="text-slate-600 font-medium text-sm">Personel Terlatih</p>
          </div>

          {/* Third Stat - Subtle Blue */}
          <div className="text-center group">
            <div className="relative mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-all duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-blue-600 mb-2">{companyInfo.customers}</h3>
            <p className="text-slate-600 font-medium text-sm">Klien Terpercaya</p>
          </div>
        </div>

        {/* Mission & Vision - Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-300 rounded-full opacity-20"></div>
            <div className="relative bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-500 rounded-lg flex items-center justify-center mr-3">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Misi Perusahaan</h3>
                  <p className="text-slate-600 font-medium text-sm">Komitmen Terhadap Kualitas</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                {companyInfo.mission}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-300 rounded-full opacity-20"></div>
            <div className="relative bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <Eye className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Visi Perusahaan</h3>
                  <p className="text-blue-600 font-medium text-sm">Masa Depan yang Cerah</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                {companyInfo.vision}
              </p>
            </div>
          </div>
        </div>

        {/* Company Values - Inline Design */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Nilai-Nilai Perusahaan</h3>
          <p className="text-slate-600 text-sm mb-8 max-w-2xl mx-auto">
            Prinsip-prinsip fundamental yang menjadi fondasi dalam setiap layanan yang kami berikan
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center gap-2 bg-gradient-to-r from-slate-50 to-gray-50 px-4 py-3 rounded-full">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-500 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-slate-900 text-sm">Kualitas Terjamin</h4>
                <p className="text-xs text-slate-600">Standar internasional</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-slate-50 px-4 py-3 rounded-full">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-400 rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-slate-900 text-sm">Tim Profesional</h4>
                <p className="text-xs text-slate-600">Personel bersertifikat</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-slate-50 px-4 py-3 rounded-full">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
                <Award className="h-4 w-4 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-slate-900 text-sm">Terpercaya</h4>
                <p className="text-xs text-slate-600">Reputasi teruji</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
