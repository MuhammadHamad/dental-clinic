"use client"

import Link from "next/link"
import type { ReactNode } from "react"

interface ServiceLinkProps {
  href: string
  className?: string
  children: ReactNode
}

export function ServiceLink({ href, className, children }: ServiceLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault()
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
      }}
    >
      {children}
    </Link>
  )
}

