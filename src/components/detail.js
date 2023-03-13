import React from 'react';

export const Detail = (data) => {
  const { name, description } = data.data;
  
  return (
    <>
      <div>
        <div className='text-2xl font-bold'>{name}</div>
        <div>{description}</div>
      </div>
    </>
  );
};
