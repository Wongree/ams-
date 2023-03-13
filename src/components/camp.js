import React from 'react';
import { Link } from 'react-router-dom';

export const Camp = (data) => {
  const { name, id } = data.data;
  return (
    <Link to={`/event/${id}`}>
      <div className='rounded shadow-md h-[100px] p-2'>
        <div className='text-black'>{name}</div>
      </div>
    </Link>
  );
};
