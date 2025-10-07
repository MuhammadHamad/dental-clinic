"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Home, Stethoscope, Info, Star, Phone, MessageCircle, Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const { theme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? "auto" : "hidden"
  }

  // Close menu when pressing escape key
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
        document.body.style.overflow = "auto"
      }
    }
    window.addEventListener("keydown", handleEsc)

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: "Home", href: "#" },
    { icon: <Stethoscope className="w-5 h-5" />, label: "Services", href: "#services" },
    { icon: <Info className="w-5 h-5" />, label: "About Us", href: "#about" },
    { icon: <Star className="w-5 h-5" />, label: "Testimonials", href: "#testimonials" },
    { icon: <Phone className="w-5 h-5" />, label: "Contact", href: "#contact" },
    { icon: <Calendar className="w-5 h-5" />, label: "Book Appointment", href: "#appointment" },
  ]

  const clinicInfo = [
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Mon-Fri: 9:00 AM - 6:00 PM",
      sublabel: "Sat: 9:00 AM - 4:00 PM",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Gulbahar no 4",
      sublabel: "Ishrat cinema chowk gull plaza Peshawar",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "+92 348 8842305",
      href: "tel:+923488842305",
    },
  ]

  const menuContent = (
    <div
      className={`fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={toggleMenu} />

      {/* Menu content with theme-responsive background */}
      <div
        className={`fixed right-0 top-0 bottom-0 w-[300px] ${
          theme === "dark" ? "bg-gray-900" : "bg-[#1e3a8a]"
        } text-white overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <div className="absolute top-4 right-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className={`text-white hover:${theme === "dark" ? "bg-gray-800" : "bg-white/10"}`}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

        {/* Header Section */}
        <div className="p-6 pb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGFsJTIwY2xpbmljJTVDfGVufDB8fDB8fHww"
                alt="Clinic Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">Khuzaifa Dental</h3>
              <p className="text-sm text-white/80">Expert Dental Care</p>
            </div>
          </div>

          {/* WhatsApp Button */}
          <Link
            href={`https://api.whatsapp.com/send?phone=923488842305&text=Hello, I'd like to book a dental appointment!`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="px-4 pb-4">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  toggleMenu()

                  // Find the target element and scroll to it
                  const targetId = item.href.replace("#", "")

                  if (targetId === "") {
                    // For home link, scroll to top
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  } else {
                    const targetElement = document.getElementById(targetId)
                    if (targetElement) {
                      setTimeout(() => {
                        targetElement.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        })
                      }, 300) // Small delay to allow menu to close first
                    }
                  }
                }}
                className={`flex items-center gap-3 px-4 py-3 text-white/90 hover:${
                  theme === "dark" ? "bg-gray-800" : "bg-white/10"
                } rounded-lg transition-colors`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Clinic Information */}
          <div className={`mt-6 border-t ${theme === "dark" ? "border-gray-700" : "border-white/20"} pt-6 space-y-4`}>
            {clinicInfo.map((info, index) =>
              info.href ? (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-3 px-4 py-2 text-white/90 hover:text-white transition-colors"
                >
                  {info.icon}
                  <span>{info.label}</span>
                </a>
              ) : (
                <div key={index} className="flex items-start gap-3 px-4 py-2 text-white/90">
                  {info.icon}
                  <div className="flex flex-col">
                    <span>{info.label}</span>
                    {info.sublabel && <span className="text-sm text-white/70">{info.sublabel}</span>}
                  </div>
                </div>
              ),
            )}
          </div>
        </nav>
      </div>
    </div>
  )

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={toggleMenu}
        className="relative z-50 h-10 w-10 bg-transparent border-gray-300 dark:border-gray-700"
      >
        {isOpen ? (
          <X className="h-5 w-5 text-gray-900 dark:text-white" />
        ) : (
          <Menu className="h-5 w-5 text-gray-900 dark:text-white" />
        )}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Portal the menu to the document body */}
      {mounted && createPortal(menuContent, document.body)}
    </>
  )
}

