"use client"

import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { companyInfo, branches } from '@/data/company-data'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info - Wider Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-40 h-40">
                  <Image
                    src="/assets/images/logo/ptsewu.png"
                    alt="PT Sewu Pangestu Lestari Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">PT Sewu Pangestu Lestari</h3>
                  <p className="text-gray-600">Solusi Kebersihan & Keamanan Terpercaya</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {companyInfo.description}
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{branches[0].address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <a href="mailto:info@sewupangestu.com" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  info@sewupangestu.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <a href={`tel:${branches[0].phone}`} className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  {branches[0].phone}
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-6">
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                <Twitter className="h-4 w-4 text-gray-600" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                <Linkedin className="h-4 w-4 text-gray-600" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                <Instagram className="h-4 w-4 text-gray-600" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                <Facebook className="h-4 w-4 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Layanan</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Layanan Kebersihan</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Solusi Keamanan</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Paket Terintegrasi</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Konsultasi Gratis</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Dukungan 24/7</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Perusahaan</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Tentang Kami</a></li>
              <li><a href="#advantages" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Keunggulan Kami</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Testimoni</a></li>
              <li><a href="#partners" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Mitra</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Dukungan</h3>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Hubungi Kami</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Syarat Layanan</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} PT Sewu Pangestu Lestari. All rights reserved.
            </p>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-500 text-sm">Terpercaya sejak 2010</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
