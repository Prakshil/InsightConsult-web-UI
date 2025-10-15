"use client"
import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // height of fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div>
        <header className={`header w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}>
            <nav className='navbar flex justify-between items-center h-20 p-4 max-w-7xl mx-auto sm:px:6 md:px-12 lg:px-24'>
                <div className='text-2xl font-bold md:text-3xl lg:text-4xl text-amber-500 cursor-pointer font-heading tracking-wider'>
                    Insight<span className='text-gray-800'>Consult</span>
                </div>
                <ul className={`nav-menu flex gap-8 font-body font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                    <li>
                        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className='text-[16px] sm:text-[18px] hover:text-amber-400 transition'>Home</a>
                    </li>
                    <li>
                        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className='text-[16px] sm:text-[18px] hover:text-amber-400 transition'>About</a>
                    </li>
                    <li>
                        <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className='text-[16px] sm:text-[18px] hover:text-amber-400 transition'>Services</a>
                    </li>
                    <li>
                        <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className='text-[16px] sm:text-[18px] hover:text-amber-400 transition'>Pricing</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className='text-[16px] sm:text-[18px] hover:text-amber-400 transition'>Contact</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className='btn-primary px-6 py-2.5 rounded-lg font-accent font-semibold bg-amber-400 hover:bg-amber-300 transition text-sm sm:text-base text-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'>Get Started</a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header