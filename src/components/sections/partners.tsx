"use client"

import { Card, CardContent } from '@/components/ui/card'
import { partners } from '@/data/company-data'
import { ExternalLink } from 'lucide-react'

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Trusted Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with the best in the industry to ensure you get the highest quality service and experiences
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner) => (
            <Card key={partner.id} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-sky-300">
              <CardContent className="p-8 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-400">
                      {partner.name.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  {partner.website && (
                    <a 
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sky-600 hover:text-sky-700 text-sm"
                    >
                      Visit Website
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Partnership Benefits</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our strategic partnerships ensure you get the best deals, exclusive access, and premium services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-sky-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Best Prices</h4>
              <p className="text-gray-600">
                Exclusive rates and special offers from our partner airlines, hotels, and tour operators.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-sky-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Premium Service</h4>
              <p className="text-gray-600">
                Access to VIP lounges, priority check-ins, and premium amenities through our partnerships.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-sky-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Reliable Support</h4>
              <p className="text-gray-600">
                Round-the-clock support from our partner network ensures your journey is smooth and worry-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

