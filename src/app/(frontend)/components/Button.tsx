'use client'
import React from 'react'
import styles from '../frontend.module.css'

interface ButtonProps {
  /** Button text content */
  children: React.ReactNode
  /** Optional variant: primary, secondary, ghost */
  variant?: 'primary' | 'secondary' | 'ghost'
  /** Optional click handler */
  onClick?: () => void
  /** Optional disabled state */
  disabled?: boolean
  /** Additional CSS classes */
  className?: string
}

/**
 * Reusable Button component using vanilla CSS modules
 * Can be used anywhere in the frontend app
 */
export const Button = ({
  children,
  variant = 'primary',
  onClick,
  disabled,
  className,
}: ButtonProps) => {
  const baseClasses = styles.button

  const variantClasses = {
    primary: styles.buttonPrimary,
    secondary: styles.buttonSecondary,
    ghost: styles.buttonGhost,
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  )
}