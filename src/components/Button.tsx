'use client'

import React from 'react'

const styles = {
  base: 'border border-gray-900 p-4 text-sm text-center leading-none rounded-full inline-block min-w-32 w-fit',

  variants: {
    primary: 'bg-gray-50 text-gray-900 hover:bg-gray-900 hover:text-gray-50',
    secondary: 'bg-gray-900 text-gray-50 hover:bg-gray-50 hover:text-gray-900'
  }
}

interface Props {
  label: string,
  variant: keyof typeof styles.variants,
  onPress: () => void
}

export const Button: React.FC<Props> = ({ label, variant, onPress }) => (
  <button
    className={`${styles.base} ${styles.variants[variant]}`}
    onClick={onPress}
  >
    {label}
  </button>
)

