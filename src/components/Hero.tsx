'use client'

import React from 'react'
import { Button } from './Button'

interface Props {
  title: string,
  subtitle: string
}

export const Hero: React.FC<Props> = ({ title, subtitle }) => {
  function foo() {
    return console.log('hola mundo')
  }

  return (
    <header className='p-4 md:p-0 rounded-2xl bg-pink-700 flex justify-center items-center gap-4 h-96'>
      <section className='md:w-1/2 flex flex-col gap-4 items-center text-center text-gray-50'>
        <h1 className='text-lg md:text-4xl font-semibold'>{title}</h1>
        <h2 className='md:text-xl'>{subtitle}</h2>
        <Button label="Dona" variant="primary" shape="rounded" onPress={foo} />
      </section>
    </header>
  )
}
