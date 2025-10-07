"use client"

import type React from "react"

import Link from "next/link"
import type { ReactNode } from "react"

interface FooterLinkProps {
  href: string
  className?: string
  children: ReactNode
}

export function FooterLink({ href, className, children }: FooterLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}

