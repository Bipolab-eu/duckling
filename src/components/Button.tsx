import Link from 'next/link'
import React from 'react'

const { base, shapes, variants } = {
  base: 'border border-gray-900 p-4 text-center leading-none inline-block min-w-32 w-fit',

  shapes: {
    squared: '',
    rounded: 'rounded-full',
  },

  variants: {
    primary: 'bg-gray-50 text-gray-900 md:hover:bg-gray-900 md:hover:text-gray-50',
    secondary: 'bg-gray-900 text-gray-50 md:hover:bg-gray-50 md:hover:text-gray-900',
    ghost: 'border-none md:hover:bg-gray-900 md:hover:text-gray-50'
  }
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string,
  shape: keyof typeof shapes,
  variant: keyof typeof variants,
  href?: string
  openInNewTab?: boolean
}

export const Button: React.FC<Props> = ({ label, shape, variant, href, openInNewTab, onClick }) => {
  const classname = `${base} ${shapes[shape]} ${variants[variant]}`

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
      className={`${classname}`}
      onClick={onClick}
    >
      {label}
    </button>
}

