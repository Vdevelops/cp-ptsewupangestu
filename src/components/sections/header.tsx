"use client"

import { Button } from '@/components/ui/button'
import { Sparkles, Shield, Users, Building } from 'lucide-react'
import { companyInfo } from '@/data/company-data'
import Image from 'next/image'

export default function Header() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white smooth-scroll component-transition">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-white">
      </div>
      
      {/* Clean Professional Background Elements - Blue Theme Only */}
      <div className="absolute top-20 left-20 w-60 h-60 bg-blue-100/30 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200/20 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}} />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-100/20 rounded-full blur-xl animate-pulse-slow" />
      
      {/* Additional Blue Elements */}
      <div className="absolute top-32 right-32 w-24 h-24 bg-blue-200/15 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-32 left-32 w-32 h-32 bg-blue-300/10 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200/15 rounded-full blur-md animate-pulse-slow" style={{animationDelay: '4s'}} />
      
      {/* Minimal Geometric Shapes */}
      <div className="absolute top-16 right-16 w-6 h-6 bg-blue-300/20 rotate-45 animate-rotate"></div>
      <div className="absolute bottom-16 left-16 w-4 h-4 bg-blue-400/15 rotate-12 animate-rotate" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-300/25 rounded-full animate-pulse"></div>
      
      {/* Small Professional Dots */}
      <div className="absolute top-24 left-1/4 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-blue-500/25 rounded-full animate-pulse" style={{animationDelay: '2.2s'}}></div>
      <div className="absolute bottom-24 left-1/5 w-1.5 h-1.5 bg-blue-400/20 rounded-full animate-pulse" style={{animationDelay: '3.7s'}}></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-300/25 rounded-full animate-pulse" style={{animationDelay: '4.3s'}}></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile & Tablet Layout - Responsive */}
        <div className="lg:hidden">
          {/* Hero Content */}
          <div className="text-center animate-fade-in-up space-y-4 py-8 sm:py-12 md:py-16">
            {/* Tag */}
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium relative border border-blue-100">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="hidden xs:inline">Solusi Kebersihan & Keamanan Terpercaya</span>
              <span className="xs:hidden">Solusi Terpercaya</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight leading-tight px-2">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Solusi</span>
              <span className="text-gray-900"> Kebersihan & Keamanan</span>
              <span className="block text-gray-900">Profesional</span>
            </h1>

            {/* Description */}
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto px-4">
              <p>Transformasi bisnis Anda dengan solusi kebersihan dan keamanan terintegrasi yang komprehensif. Dipercaya 500+ klien, menghadirkan keunggulan melalui inovasi dan layanan profesional berstandar internasional.</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 pt-4 px-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-6 sm:px-8 py-3 font-medium transition-all duration-300 rounded-lg hover:scale-105 w-full xs:w-auto shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  Konsultasi Gratis
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300 px-6 sm:px-8 py-3 font-medium transition-all duration-300 rounded-lg hover:scale-105 w-full xs:w-auto shadow-md hover:shadow-lg"
              >
                <span className="flex items-center justify-center">
                  Pelajari Lebih Lanjut
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>

          {/* Services Section - Responsive Grid */}
          <div className="py-6 sm:py-8">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Layanan Kami</h2>
              <p className="text-sm text-gray-600 px-4">Solusi terintegrasi untuk kebutuhan bisnis Anda</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
              {/* Cleaning Service */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex-shrink-0">
                    <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">Layanan Kebersihan</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Pembersihan profesional dengan standar internasional</p>
                  </div>
                </div>
              </div>

              {/* Security Service */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex-shrink-0">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">Sistem Keamanan</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Keamanan 24/7 dengan teknologi terdepan</p>
                  </div>
                </div>
              </div>

              {/* Integrated Service */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex-shrink-0">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">Solusi Terintegrasi</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Kombinasi kebersihan dan keamanan dalam satu paket</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="text-left animate-fade-in-up space-y-5 relative">
              {/* Decorative Background Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-200/30 rounded-full animate-pulse"></div>
              <div className="absolute top-8 -right-4 w-6 h-6 bg-cyan-300/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-8 -left-2 w-4 h-4 bg-teal-400/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              
              {/* Tag */}
              <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 px-3 py-1.5 rounded-full text-sm font-medium relative border border-blue-100">
                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Solusi Kebersihan & Keamanan Terpercaya
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400/50 rounded-full animate-pulse"></div>
              </div>

            {/* Main Headline */}
            <div className="space-y-1 relative">
              <div className="absolute -left-2 top-0 w-1 h-8 bg-gradient-to-b from-indigo-400 to-blue-600 rounded-full"></div>
              <h1 className="text-6xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Solusi</span>
                <span className="text-gray-900"> Kebersihan & Keamanan</span>
                <span className="block text-gray-900">Profesional</span>
              </h1>
              <div className="absolute -right-2 bottom-0 w-1 h-6 bg-gradient-to-b from-cyan-300 to-teal-500 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="text-lg text-gray-600 leading-relaxed max-w-2xl relative">
              <p>Transformasi bisnis Anda dengan solusi kebersihan dan keamanan terintegrasi yang komprehensif. Dipercaya 500+ klien, menghadirkan keunggulan melalui inovasi dan layanan profesional berstandar internasional.</p>
              <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-cyan-300/40 rounded-full animate-pulse"></div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 relative">
              {/* Decorative Elements for Buttons */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-indigo-300/40 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-8 py-3 font-medium transition-all duration-300 rounded-lg hover:scale-105 w-full sm:w-auto shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="flex items-center justify-center relative z-10">
                  Konsultasi Gratis
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300 px-8 py-3 font-medium transition-all duration-300 rounded-lg hover:scale-105 w-full sm:w-auto shadow-md hover:shadow-lg relative"
              >
                <span className="flex items-center justify-center">
                  Pelajari Lebih Lanjut
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>

          {/* Right Content - Elegant Creative Layout */}
          <div className="relative animate-slide-in-right">
            <div className="relative min-h-[500px] flex items-center justify-center">
              
              {/* Central Company Logo - Logo Only */}
              <div className="relative z-10">
                <div className="relative">
                  {/* Simple Background Glow */}
                  <div className="absolute inset-0 bg-blue-200 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  
                  {/* Extra Large Logo Only */}
                  <div className="relative flex items-center justify-center transform hover:scale-110 hover:rotate-2 transition-all duration-300">
                    <Image
                      src="/assets/images/logo/ptsewu.png"
                      alt="PT Sewu Pangestu Lestari Logo"
                      width={224}
                      height={224}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Cleaning Service - With Gap */}
              <div className="absolute top-12 left-12 animate-float group cursor-pointer">
                <div className="relative flex flex-col items-center">
                  <div className="flex items-center justify-center group-hover:scale-125 transition-all duration-300 mb-4">
                    <Sparkles className="h-8 w-8 text-blue-500 drop-shadow-lg" />
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm text-blue-600 text-sm px-4 py-2 rounded-lg font-semibold whitespace-nowrap shadow-lg border border-blue-200">
                    Layanan Kebersihan
                  </div>
                </div>
              </div>

              {/* Security Service - With Gap */}
              <div className="absolute top-12 right-12 animate-float group cursor-pointer" style={{animationDelay: '1s'}}>
                <div className="relative flex flex-col items-center">
                  <div className="flex items-center justify-center group-hover:scale-125 transition-all duration-300 mb-4">
                    <Shield className="h-8 w-8 text-blue-600 drop-shadow-lg" />
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm text-blue-700 text-sm px-4 py-2 rounded-lg font-semibold whitespace-nowrap shadow-lg border border-blue-200">
                    Sistem Keamanan
                  </div>
                </div>
              </div>

              {/* Terintegrasi Service - With Gap */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float group cursor-pointer" style={{animationDelay: '2s'}}>
                <div className="relative flex flex-col items-center">
                  <div className="flex items-center justify-center group-hover:scale-125 transition-all duration-300 mb-4">
                    <Users className="h-8 w-8 text-blue-700 drop-shadow-lg" />
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm text-blue-800 text-sm px-4 py-2 rounded-lg font-semibold whitespace-nowrap shadow-lg border border-blue-200">
                    Solusi Terintegrasi
                  </div>
                </div>
              </div>

              {/* Decorative Elements - Minimal Professional */}
              <div className="absolute top-8 left-1/2 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
              <div className="absolute top-1/4 right-8 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/4 left-8 w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>

              {/* Clean Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
                <defs>
                  <linearGradient id="blueGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1"/>
                  </linearGradient>
                  <linearGradient id="blueGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.1"/>
                  </linearGradient>
                  <linearGradient id="blueGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="url(#blueGradient1)" strokeWidth="1.5" strokeDasharray="8,4" className="animate-pulse"/>
                <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="url(#blueGradient2)" strokeWidth="1.5" strokeDasharray="8,4" className="animate-pulse" style={{animationDelay: '1s'}}/>
                <line x1="50%" y1="50%" x2="50%" y2="75%" stroke="url(#blueGradient3)" strokeWidth="1.5" strokeDasharray="8,4" className="animate-pulse" style={{animationDelay: '2s'}}/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}