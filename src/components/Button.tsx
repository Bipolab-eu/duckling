import Link from 'next/link'
import React from 'react'

const { base, shapes, variants, sizes } = {
  base: 'border border-gray-900 text-center leading-none inline-block min-w-32 w-fit',

  shapes: {
    squared: '',
    rounded: 'rounded-full',
  },

  variants: {
    primary: 'bg-gray-50 text-gray-900 md:hover:bg-gray-900 md:hover:text-gray-50',
    secondary: 'bg-gray-900 text-gray-50 md:hover:bg-gray-50 md:hover:text-gray-900',
    ghost: 'border-none md:hover:bg-gray-900 md:hover:text-gray-50'
  },

  sizes: {
    large: 'p-6 text-xl',
    normal: 'p-4 text-base',
    small: 'p-2 text-sm'
  }
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string,
  shape: keyof typeof shapes,
  variant: keyof typeof variants,
  size: keyof typeof sizes,
  href?: string
  openInNewTab?: boolean
}

export const Button: React.FC<Props> = ({
  label,
  shape,
  variant,
  size,
  href,
  openInNewTab,
  onClick
}) => {
  const classname = `${base} ${shapes[shape]} ${variants[variant]} ${sizes[size]}`

  return href
    ? (
      <Link
        href={href}
        className={`${classname}`}
        target={openInNewTab ? '_blank' : '_self'}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
      >{label}
      </Link>
    )
    :
    <button
      className={`${classname} text-s`}
      onClick={onClick}
    >
      {label}
    </button>
}

