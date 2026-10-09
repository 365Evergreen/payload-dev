'use client'
import React from 'react'
import styles from '../frontend.module.css'

interface CardProps {
  /** Card content */
  children: React.ReactNode
  /** Optional header content */
  header?: React.ReactNode
  /** Optional footer content */
  footer?: React.ReactNode
  /** Optional click handler on the card */
  onClick?: () => void
  /** Additional CSS classes */
  className?: string
}

/**
 * Reusable Card component using vanilla CSS modules
 * Provides a consistent card layout with header/footer support
 */
export const Card = ({
  children,
  header,
  footer,
  onClick,
  className,
}: CardProps) => {
  return (
    <div
      className={`${styles.card} ${className || ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className={styles.cardHeader}>{header}</div>
      <div className={styles.cardBody}>{children}</div>
      <div className={styles.cardFooter}>{footer}</div>
    </div>
  )
}