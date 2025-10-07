"use client"

import type React from "react"

import Link from "next/link"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault()
        if (href === "#") {
          window.scrollTo({ top: 0, behavior: "smooth" })
        } else {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
        }
      }}
    >
      {children}
    </Link>
  )
}

