import React from 'react'
import { Button } from './Button'

const heroStyles = {
  backgroundColor: 'bg-gradient-to-b from-neutral-950 to-neutral-500',
  textAlignment: 'text-center text-neutral-50',
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
  shape: keyof typeof heroStyles.shapes,
}

export const Hero: React.FC<Props> = ({ title, subtitle, shape }) => {
  const { backgroundColor, textAlignment, heroTitle, heroSubtitle, shapes } = heroStyles

  return (
    <header className={`flex flex-col justify-center items-center py-24 min-h-96 gap-8 ${backgroundColor} ${textAlignment} ${shapes[shape]}`}>
      <section className='space-y-4 px-4 w-full md:w-2/4'>
        <h1 className={heroTitle}>{title}</h1>
        <h2 className={heroSubtitle}>{subtitle}</h2>
      </section>
      <section className='px-4 w-full md:w-2/4'>
        <Button label='Button Label' shape='squared' variant='secondary' size='normal' />
      </section>
    </header>
  )
}