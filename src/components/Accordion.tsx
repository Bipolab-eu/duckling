import React from 'react'

interface Props {
  title: string,
  text: string
}
import { Icons } from './Icons'

export const Accordion: React.FC<Props> = ({ title, text }) => {
  const { chevronDown } = Icons

  return (
    <details
      name='reqs'
      className='bg-gray-50 text-gray-900 rounded-2xl border border-gray-900 group'>
      <summary className='p-4 list-none flex justify-between items-center cursor-pointer leading-none'>
        {title}
        <div className="group-open:duration-75 group-open:rotate-180">
          {chevronDown}
        </div>
      </summary>
      <div className='p-4'>
        <p>{text}</p>
      </div>
    </details>
  )
}
