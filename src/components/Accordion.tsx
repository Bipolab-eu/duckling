import React from 'react'

interface Props {
  title: string,
  text: string
}
import { Icons } from './icons'

export const Accordion: React.FC<Props> = ({ title, text }) => {
  const { chevronDown } = Icons

  return (
    <details name='reqs' className='accordion'>
      <summary className='accordion-summary'>
        {title}
        {chevronDown}
      </summary>
      <div className='accordion-content'>
        <p>{text}</p>
      </div>
    </details>
  )
}
