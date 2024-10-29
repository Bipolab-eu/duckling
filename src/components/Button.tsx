import Link from 'next/link'
import React from 'react'

const { base, shapes, variants, sizes } = {
  base: 'text-center leading-none inline-block w-fit h-fit',

  shapes: {
    squared: 'rounded',
    rounded: 'rounded-full',
  },

  variants: {
    primary:   'bg-neutral-800 text-neutral-50  sm:hover:brightness-150',
    secondary: 'bg-neutral-400 text-neutral-800 sm:hover:brightness-125',
    ghost:     'text-neutral-800 sm:hover:brightness-150'
  },

  sizes: {
    large:  'p-5 min-w-24 text-xl',
    normal: 'p-4 min-w-20 text-base',
    small:  'p-3 min-w-16 text-xs',
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
        className={classname}
        target={openInNewTab ? '_blank' : '_self'}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
      >{label}
      </Link>
    )
    :
    <button
      className={classname}
      onClick={onClick}
    >
      {label}
    </button>
}
