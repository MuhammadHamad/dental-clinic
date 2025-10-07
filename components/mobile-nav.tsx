"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'

export default function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  // Close menu when clicking on a link
  const closeMenu = React.useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }, [])

  // Close menu when pressing escape key
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [closeMenu])

  return (
    <div className="relative z-50">
      {/* Hamburger button with solid background */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-10 h-10 rounded-md bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700"
        style={{ backgroundColor: 'white' }} /* Forcing solid background */
        aria-label="Toggle menu"
      >
        <Menu className="h-5 w-5 text-gray-900 dark:text-white" />
      </button>

      {/* Overlay - solid black with no transparency */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black z-40"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }} /* Solid overlay */
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu - completely solid background */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-gray-900 z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ 
          backgroundColor: 'white', /* Forcing solid background in light mode */
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)' /* Adding shadow for depth */
        }}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button 
              onClick={closeMenu}
              className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-100 dark:bg-gray-800"
              style={{ backgroundColor: '#f3f4f6' }} /* Forcing solid background */
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-gray-900 dark:text-white" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            <Link
              href="#"
              onClick={closeMenu}
              className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="#services"
              onClick={closeMenu}
              className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              onClick={closeMenu}
              className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#testimonials"
              onClick={closeMenu}
              className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              onClick={closeMenu}
              className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          
          <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Khuzaifa Dental Clinic
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

