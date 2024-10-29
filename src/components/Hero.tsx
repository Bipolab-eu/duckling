import React from 'react'
import { Button } from './Button'

const { backgroundColor, textAlignment, heroTitle, heroSubtitle, shapes } = {
  backgroundColor: 'bg-gradient-to-b from-neutral-950 to-neutral-500',
  textAlignment: 'items-center text-center text-neutral-50',
  heroTitle:    'text-2xl md:text-4xl font-extrabold',
  heroSubtitle: 'text-lg  md:text-2xl font-medium',

  shapes: {
    squared: 'rounded-none',
    rounded: 'rounded-2xl',
  },
}

interface Props {
  title: string,
  subtitle: string,
  shape: keyof typeof shapes,
}

export const Hero: React.FC<Props> = ({ title, subtitle, shape }) => {
  return (
    <header className={`flex flex-col justify-center h-96 gap-8 p-4 ${backgroundColor} ${textAlignment} ${shapes[shape]}`}>
      <section className={`grid gap-2 md:w-2/4`}>
        <h1 className={`${heroTitle}`}>{title}</h1>
        <h2 className={`${heroSubtitle}`}>{subtitle}</h2>
      </section>
      <Button label='Button Label' shape='squared' variant='secondary' size='normal' />
    </header>
  )
}