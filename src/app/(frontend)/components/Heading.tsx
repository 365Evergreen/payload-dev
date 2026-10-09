'use client'
import React from 'react'
import styles from '../frontend.module.css'

interface HeadingProps {
  /** Heading level: 1-6 */
  level: 1 | 2 | 3 | 3 | 4 | 5 | 6
  /** Heading text content */
  children: React.ReactNode
  /** Optional className override */
  className?: string
  /** Optional custom fontSize/lineHeight */
  customStyle?: React.CSSProperties
}

/**
 * Reusable Heading component using vanilla CSS modules
 * Maps to CSS custom properties from styles.css
 */
export const Heading = ({
  level,
  children,
  className,
  customStyle,
}: HeadingProps) => {
  const tag = `h${level}` as keyof React.HTMLAttributes<HTMLHeadingElement>

  return (
    <div
      className={`${styles[`h${level}`] || styles.h1} ${className || ''}`}
      style={customStyle}
    >
      {children}
    </div>
  )
}