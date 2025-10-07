import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Star, Check, ArrowRight } from "lucide-react"
import { NavLink } from "@/components/nav-link"
import { ServiceLink } from "@/components/service-link"
import { FooterLink } from "@/components/footer-link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ThemeToggle } from "@/components/theme-toggle"
import MobileNav from "@/components/mobile-nav-transparent"
import { AppointmentForm } from "@/components/appointment-form"
import { AnimateInView } from "@/components/animate-in-view"

export default function Home() {
  const phoneNumber = "923488842305" // WhatsApp number without + and spaces
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hello, I'd like to book a dental appointment!`

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex flex-1 items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGFsJTIwY2xpbmljJTVDfGVufDB8fDB8fHww"
                alt="Khuzaifa Dental Logo"
                width={40}
                height={40}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wider">KHUZAIFA</span>
              <span className="text-sm tracking-[0.2em] text-muted-foreground uppercase">DENTAL</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center">
            <div className="flex items-center space-x-6 mr-6">
              <NavLink href="#" className="text-sm font-medium hover:text-primary">
                Home
              </NavLink>
              <ServiceLink href="#services" className="text-sm font-medium hover:text-primary">
                Services
              </ServiceLink>
              <NavLink href="#about" className="text-sm font-medium hover:text-primary">
                About Us
              </NavLink>
              <NavLink href="#testimonials" className="text-sm font-medium hover:text-primary">
                Testimonials
              </NavLink>
              <NavLink href="#contact" className="text-sm font-medium hover:text-primary">
                Contact
              </NavLink>
            </div>
            <div className="flex items-center gap-4 border-l pl-6">
              <ThemeToggle />
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden md:block">
                <Button>Book Appointment</Button>
              </Link>
            </div>
          </nav>
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
            <AnimateInView>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Your Smile, Our Priority
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Expert Dental Care in a Comfortable Setting. We're committed to providing the highest quality dental
                    services.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="sm:block hidden">
                      <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                        Chat on WhatsApp
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <ServiceLink href="#services" className="sm:block hidden">
                      <Button variant="outline" className="w-full sm:w-auto">
                        Our Services
                      </Button>
                    </ServiceLink>
                  </div>
                </div>
                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGFsJTIwY2xpbmljJTVDfGVufDB8fDB8fHww"
                    alt="Smiling patient with dentist"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* About the Clinic */}
        <section id="about" className="bg-slate-50 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <AnimateInView>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVudGFsJTIwY2xpbmljJTVDfGVufDB8fDB8fHww"
                    alt="Huzaifa Islam Dental Clinic"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 order-1 lg:order-2">
                  <h2 className="text-3xl font-bold tracking-tighter">About Khuzaifa Dental Clinic</h2>
                  <p className="text-muted-foreground">
                    With years of experience in providing exceptional dental care, Khuzaifa Dental Clinic has
                    established itself as a trusted name in the community. Our state-of-the-art facility is equipped
                    with the latest technology to ensure that you receive the best possible care.
                  </p>
                  <p className="text-muted-foreground">
                    We believe in a patient-first approach, taking the time to understand your concerns and providing
                    personalized treatment plans. Our team is dedicated to making your dental experience as comfortable
                    and stress-free as possible.
                  </p>
                  <div className="flex items-center space-x-2 text-primary">
                    <Check className="h-5 w-5" />
                    <span>Certified dental professionals</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary">
                    <Check className="h-5 w-5" />
                    <span>Modern dental equipment</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary">
                    <Check className="h-5 w-5" />
                    <span>Comfortable and relaxing environment</span>
                  </div>
                </div>
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <AnimateInView>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We offer a comprehensive range of dental services to meet all your oral health needs.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {[
                  {
                    title: "General Dentistry",
                    description:
                      "Comprehensive dental check-ups, cleanings, and preventive care to maintain your oral health.",
                    icon: "🦷",
                  },
                  {
                    title: "Teeth Whitening",
                    description:
                      "Professional teeth whitening treatments to brighten your smile and boost your confidence.",
                    icon: "✨",
                  },
                  {
                    title: "Braces & Aligners",
                    description:
                      "Orthodontic solutions to straighten your teeth and correct bite issues for a perfect smile.",
                    icon: "😁",
                  },
                  {
                    title: "Root Canal Treatment",
                    description: "Painless and effective root canal procedures to save damaged or infected teeth.",
                    icon: "🔍",
                  },
                  {
                    title: "Cosmetic Dentistry",
                    description: "Enhance your smile with veneers, bonding, and other cosmetic dental procedures.",
                    icon: "💎",
                  },
                  {
                    title: "Pediatric Dentistry",
                    description: "Child-friendly dental care to ensure your little ones develop healthy oral habits.",
                    icon: "👶",
                  },
                  {
                    title: "Emergency Dental Care",
                    description:
                      "Prompt and effective treatment for dental emergencies to relieve pain and prevent complications.",
                    icon: "🚑",
                  },
                  {
                    title: "Dental Implants",
                    description:
                      "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
                    icon: "🔧",
                  },
                  {
                    title: "Gum Disease Treatment",
                    description: "Specialized treatments for gum disease to restore and maintain your gum health.",
                    icon: "🩹",
                  },
                ].map((service, index) => (
                  <Card key={index} className="transition-all hover:shadow-lg">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="text-4xl">{service.icon}</div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-slate-50 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <AnimateInView>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us?</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We're committed to providing exceptional dental care in a comfortable environment.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {[
                  {
                    title: "Pain-Free Treatments",
                    description:
                      "We use modern technology and techniques to ensure your comfort during all procedures.",
                    icon: <Check className="h-10 w-10 text-primary" />,
                  },
                  {
                    title: "Experienced Dentist",
                    description:
                      "Our dentist has years of experience and stays updated with the latest dental advancements.",
                    icon: <Check className="h-10 w-10 text-primary" />,
                  },
                  {
                    title: "Affordable Pricing",
                    description:
                      "We offer transparent pricing and flexible payment options to make dental care accessible.",
                    icon: <Check className="h-10 w-10 text-primary" />,
                  },
                  {
                    title: "Convenient Scheduling",
                    description: "Book appointments easily via WhatsApp and get quick responses to your queries.",
                    icon: <Check className="h-10 w-10 text-primary" />,
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center space-y-3">
                    {feature.icon}
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* Patient Testimonials */}
        <section id="testimonials" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <AnimateInView>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Patient Testimonials</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Don't just take our word for it. Here's what our patients have to say.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-4xl mt-12">
                <Carousel className="w-full">
                  <CarouselContent>
                    {[
                      {
                        name: "Sarah Johnson",
                        testimonial:
                          "I've always been anxious about dental visits, but Dr. Huzaifa made me feel completely at ease. The clinic is modern, clean, and the staff is incredibly friendly. Highly recommend!",
                        rating: 5,
                      },
                      {
                        name: "Michael Chen",
                        testimonial:
                          "The teeth whitening treatment I received here was amazing! My smile has never looked better. The procedure was quick, painless, and the results exceeded my expectations.",
                        rating: 5,
                      },
                      {
                        name: "Priya Sharma",
                        testimonial:
                          "I brought my 5-year-old daughter for her first dental check-up, and Dr. Huzaifa was so patient and gentle with her. Now she's actually excited about going to the dentist!",
                        rating: 5,
                      },
                      {
                        name: "David Wilson",
                        testimonial:
                          "I had a dental emergency and was seen the same day. The root canal procedure was virtually painless, and the follow-up care was excellent. This clinic is a gem!",
                        rating: 5,
                      },
                    ].map((testimonial, index) => (
                      <CarouselItem key={index}>
                        <Card className="border-none shadow-none">
                          <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center space-y-4">
                              <div className="flex space-x-1">
                                {Array(testimonial.rating)
                                  .fill(0)
                                  .map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                  ))}
                              </div>
                              <p className="text-lg italic">"{testimonial.testimonial}"</p>
                              <p className="font-semibold">- {testimonial.name}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center mt-4">
                    <CarouselPrevious className="relative mr-2" />
                    <CarouselNext className="relative ml-2" />
                  </div>
                </Carousel>
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* Book an Appointment */}
        <section id="appointment" className="bg-primary dark:bg-gray-800 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <AnimateInView>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter text-white">Book Your Appointment</h2>
                  <p className="text-white/90">
                    Schedule your dental appointment with ease. Fill out the form or chat with us directly on WhatsApp
                    for quick responses.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-white" />
                      <span className="text-white">Quick confirmation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-white" />
                      <span className="text-white">Flexible scheduling</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-white" />
                      <span className="text-white">Reminder notifications</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
                        Chat on WhatsApp
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <AppointmentForm />
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* Contact & Location */}
        <section id="contact" className="py-12 md:py-24 bg-slate-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <AnimateInView>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact & Location</h2>
                  <p className="max-w-[900px] text-muted-foreground dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Visit our clinic or get in touch with us for any inquiries.
                  </p>
                </div>
              </div>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="h-[400px] rounded-lg overflow-hidden bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.4425840928527!2d71.57492661205461!3d34.00501992112037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b85a2446c9%3A0x923c5a785e7f688c!2sGul%20Plaza%2C%20Peshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709433238899!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">Contact Information</h3>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-muted-foreground dark:text-gray-300">
                        Gulbahar no 4 Ishrat cinema chowk gull plaza Peshawar
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <a
                        href="tel:+923488842305"
                        className="text-muted-foreground dark:text-gray-300 hover:text-primary transition-colors"
                      >
                        +92 348 8842305
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a
                        href="mailto:huzaifaislamdentalclinic@gmail.com"
                        className="text-muted-foreground dark:text-gray-300 hover:text-primary transition-colors"
                      >
                        huzaifaislamdentalclinic@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">Opening Hours</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Monday - Friday</p>
                          <p className="text-muted-foreground dark:text-gray-300">9:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Saturday</p>
                          <p className="text-muted-foreground dark:text-gray-300">9:00 AM - 4:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Sunday</p>
                          <p className="text-muted-foreground dark:text-gray-300">
                            Closed (Emergency services available)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                        Chat on WhatsApp
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateInView>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-slate-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 py-8">
          <AnimateInView>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGFsJTIwY2xpbmljJTVDfGVufDB8fDB8fHww"
                    alt="Khuzaifa Dental Clinic Logo"
                    width={40}
                    height={40}
                    className="rounded object-cover"
                  />
                  <span className="text-lg font-bold">Khuzaifa Dental Clinic</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Providing quality dental care with a gentle touch. Your smile is our priority.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <FooterLink href="#" className="text-sm text-muted-foreground hover:text-primary">
                      Home
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#services" className="text-sm text-muted-foreground hover:text-primary">
                      Services
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#about" className="text-sm text-muted-foreground hover:text-primary">
                      About Us
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#testimonials" className="text-sm text-muted-foreground hover:text-primary">
                      Testimonials
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#contact" className="text-sm text-muted-foreground hover:text-primary">
                      Contact
                    </FooterLink>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <FooterLink href="#" className="text-sm text-muted-foreground hover:text-primary">
                      General Dentistry
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#" className="text-sm text-muted-foreground hover:text-primary">
                      Teeth Whitening
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#" className="text-sm text-muted-foreground hover:text-primary">
                      Braces &amp; Aligners
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#" className="text-sm text-muted-foreground hover:text-primary">
                      Root Canal Treatment
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#" className="text-sm text-muted-foreground hover:text-primary">
                      Cosmetic Dentistry
                    </FooterLink>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <span className="sr-only">WhatsApp</span>
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground">Follow us on social media for dental tips and updates.</p>
              </div>
            </div>
            <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Khuzaifa Dental Clinic. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="#" className="text-xs text-muted-foreground hover:underline">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-xs text-muted-foreground hover:underline">
                  Terms of Service
                </Link>
              </div>
            </div>
          </AnimateInView>
        </div>
      </footer>
    </div>
  )
}

