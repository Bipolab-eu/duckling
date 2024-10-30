import React, { ReactNode } from 'react';
import { Button } from './Button';

const cardStyles = {
  cardContainer: 'bg-neutral-50 drop-shadow-xl overflow-auto',
  cardTitle:  'text-base font-extrabold',
  cardResume: 'text-base font-normal',
  clampResume: 'line-clamp-3',

  shapes: {
    squared: 'rounded',
    rounded: 'rounded-2xl',
  },
}

interface Props {
  title: string,
  resume: string
  url?: string,
  children?: ReactNode,
  shape: keyof typeof cardStyles.shapes,
  clamp?: boolean
}

export const Card: React.FC<Props> = ({ title, resume, url, children, shape, clamp }) => {
  const { cardContainer, cardTitle, cardResume, clampResume, shapes } = cardStyles

  return (
    <div className={`${cardContainer} ${shapes[shape]}`}>
      {children}
      <div className='p-6 space-y-6'>
        <div className='space-y-2'>
          <h1 className={cardTitle}>{title}</h1>
          <p className={`${cardResume} ${clamp ? clampResume : ''}`}>{resume}</p>
        </div>
        {
          url && (
            <Button label="Visitar " href={url} shape="squared" variant="primary" size="small" />
          )
        }
      </div>
    </div>
  );
};