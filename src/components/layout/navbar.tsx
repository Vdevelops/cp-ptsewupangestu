"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/data/company-data'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      setIsScrolled(window.scrollY > 50)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white border-b border-gray-200 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="relative w-25 h-25 group-hover:scale-110 transition-all duration-300">
              <Image
                src="/assets/images/logo/ptsewu.png"
                alt="PT Sewu Pangestu Lestari Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.title}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeSection === item.href.substring(1)
                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-600 border border-indigo-100'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.title}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 p-2 hover:scale-110 transition-all duration-300"
            >
              {isOpen ? <X className="h-5 w-5 animate-spin" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden animate-slide-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navItems.map((item, index) => (
                <button
                  key={item.title}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-600 border border-indigo-100'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.title}
                </button>
              ))}
              <div className="pt-2">
                <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white text-sm font-medium py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}