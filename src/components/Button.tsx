'use client'

import React from 'react'

const { base, shapes, variants } = {
  base: 'border border-gray-900 p-4 leading-none inline-block min-w-32',

  shapes: {
    squared: '',
    rounded: 'rounded-full',
  },

  variants: {
    primary: 'bg-gray-50 text-gray-900 md:hover:bg-gray-900 md:hover:text-gray-50',
    secondary: 'bg-gray-900 text-gray-50 md:hover:bg-gray-50 md:hover:text-gray-900'
  }
}

interface Props {
  label: string,
  shape: keyof typeof shapes,
  variant: keyof typeof variants,
  onPress: () => void
}

export const Button: React.FC<Props> = ({ label, shape, variant, onPress }) => (
  <button
    className={`${base} ${shapes[shape]} ${variants[variant]}`}
    onClick={onPress}
  >
    {label}
  </button>
)

