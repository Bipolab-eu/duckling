// See Tailwind Documentation: https://tailwindcss.com/docs/aspect-ratio#using-custom-values
// or go to tailwind.config.ts and see aspect ratio theme extend.

import Image from 'next/image'
import React from 'react'

const pictureStyles = {
  shapes: {
    squared: 'rounded',
    rounded: 'rounded-2xl'
  },

  ratios: {
    '16/9': 'aspect-video',
    '1/1': 'aspect-square',
    '5/4': 'aspect-5/4',
    '4/5': 'aspect-4/5',
    '4/3': 'aspect-4/3',
    '3/4': 'aspect-3/4',
    '3/2': 'aspect-3/2',
    '2/3': 'aspect-2/3',
  }
}

interface Props {
  url: string,
  width: number,
  height: number,
  alt: string,
  shape?: keyof typeof pictureStyles.shapes
  aspect: keyof typeof pictureStyles.ratios
}

export const Picture: React.FC<Props> = ({ url, width, height, alt, shape = 'squared', aspect }) => {
  const { shapes, ratios } = pictureStyles

  return (
    <Image
      className={`${ratios[aspect]} ${shapes[shape]} w-full h-auto object-cover`}
      src={url}
      width={width}
      height={height}
      alt={alt}
    />
  )
}
