'use client'

import React from 'react'

interface Props {
  label: string,
  variant: 'btn-primary' | 'btn-secondary',
  onPress: () => void
}

export const Button: React.FC<Props> = ({ label, variant, onPress }) => (
  <button
    className={variant}
    onClick={onPress}
  >
    {label}
  </button>
)

