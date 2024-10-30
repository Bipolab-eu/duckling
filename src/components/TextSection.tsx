import React from 'react'

interface Props {
  title: string,
  text: string
}

const textSectionStyles = {
  textAlignment: 'text-center text-neutral-800',
  sectionTitle:  'text-2xl font-extrabold',
  sectionText:   'text-lg  font-medium',
}

export const TextSection: React.FC<Props> = ({ title, text }) => {
  const { textAlignment, sectionTitle, sectionText } = textSectionStyles

  return (
    <section className={`flex flex-col justify-center items-center py-24 min-h-96 ${textAlignment}`}>
      <article className='space-y-8 px-4 md:w-2/4'>
        <h1 className={sectionTitle}>{title}</h1>
        <p className={sectionText}>{text}</p>
      </article>
    </section>
  )
}
