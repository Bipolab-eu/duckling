import React, { ReactNode } from 'react'

const heroStyles = {
  backgroundColor: 'bg-gradient-to-b from-neutral-950 to-neutral-500',
  textAlignment: 'text-left',
  heroTitle: 'text-2xl text-neutral-50 font-extrabold md:text-4xl',
  heroSubtitle: 'text-lg text-neutral-50 font-medium md:text-2xl',

  shapes: {
    squared: 'rounded-none',
    rounded: 'rounded-2xl',
  },
}

interface Props {
  title: string,
  subtitle: string,
  shape: keyof typeof heroStyles.shapes,
  children?: ReactNode
}

export const Hero: React.FC<Readonly<Props>> = ({
  title,
  subtitle,
  shape,
  children
}) => {

  const { backgroundColor, textAlignment, heroTitle, heroSubtitle, shapes } = heroStyles

  return (
    <header className={`flex items-center min-h-96 py-24 ${backgroundColor} ${textAlignment} ${shapes[shape]}`}>
      <div className='container mx-auto'>
        <section className='inline-block space-y-4 px-4 w-full md:w-2/4'>
          <h1 className={heroTitle}>{title}</h1>
          <h2 className={heroSubtitle}>{subtitle}</h2>
          {children}
        </section>
      </div>
    </header>
  )
}