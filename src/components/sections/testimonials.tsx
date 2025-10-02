"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Star, Quote, Users, Award, Heart } from 'lucide-react'
import { testimonials } from '@/data/company-data'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold mb-4">
            <Heart className="w-3 h-3 mr-2 text-blue-600" />
            TESTIMONI KLIEN
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 animate-fade-in-up">
            Kata <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Mereka</span>
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto animate-slide-in-left leading-relaxed">
            Dengarkan pengalaman klien kami yang puas dengan layanan kebersihan dan keamanan terintegrasi yang profesional
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl"></div>
            <Card className="relative bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  {/* Quote Icon */}
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Quote className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                    &ldquo;{testimonials[currentTestimonial].content}&rdquo;
                  </blockquote>

                  {/* Customer Info */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <span className="text-xl font-bold text-white">
                        {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-slate-600 mb-4 font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mb-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl"></div>
          <div className="relative bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold mb-4">
                <Users className="w-3 h-3 mr-2 text-blue-600" />
                TESTIMONI LAINNYA
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Apa Kata Klien Kami?</h3>
              <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Pengalaman nyata dari klien yang telah mempercayai layanan kami dengan kepuasan yang tinggi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="group relative">
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-slate-400 to-slate-300 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Card className={`relative bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 h-full group-hover:-translate-y-1 ${
                    index === currentTestimonial ? 'ring-2 ring-blue-200' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                          <span className="text-lg font-bold text-white">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900">{testimonial.name}</h4>
                          <p className="text-sm text-slate-600">{testimonial.role}</p>
                        </div>
                      </div>
                      <blockquote className="text-sm text-slate-700 mb-4 leading-relaxed">
                        &ldquo;{testimonial.content}&rdquo;
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <div className="text-xs text-slate-500">
                          {testimonial.rating}/5
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
