/* WIP */
import React from 'react';

interface Props {
 title: string
}

export const Card: React.FC<Props> = ({ title }) => {
  return (
    <div className='bg-gray-400'>
      <div className="bg-blue-800 w-full p-4"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};

export default Card;
