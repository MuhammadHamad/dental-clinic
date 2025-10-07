"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleMenu}
        className="relative z-50 h-10 w-10 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 shadow-sm"
      >
        {isOpen ? (
          <X className="h-5 w-5 text-gray-900 dark:text-white" />
        ) : (
          <Menu className="h-5 w-5 text-gray-900 dark:text-white" />
        )}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-transparent backdrop-blur-sm">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-end mb-8">
              <Button variant="outline" size="icon" onClick={toggleMenu} className="h-10 w-10">
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col space-y-6 items-center justify-center flex-1">
              <Link href="#" onClick={toggleMenu} className="text-2xl font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                href="#services"
                onClick={toggleMenu}
                className="text-2xl font-medium hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                href="#about"
                onClick={toggleMenu}
                className="text-2xl font-medium hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#testimonials"
                onClick={toggleMenu}
                className="text-2xl font-medium hover:text-primary transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                onClick={toggleMenu}
                className="text-2xl font-medium hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

