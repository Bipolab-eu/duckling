import React from 'react'
import { Button } from './Button'

const navbarStyles = {
  backgroundColor: 'sm:bg-neutral-100',
}

export const Navbar: React.FC = () => {
  const { backgroundColor } = navbarStyles
  return (
    <header className={`hidden sm:block p-4 fixed w-full z-10 ${backgroundColor}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1>Logo</h1>
        <nav className='flex gap-x-2'>
          <Button href='#' label='Page Link' shape='squared' variant='ghost' size='normal' />
        </nav>
      </div>
    </header>
  )
}
