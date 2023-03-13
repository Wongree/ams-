import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

export const CreateCard = () => {
  return (
    <div className='w-1/4'>
      <Link to={`/create`}>
        <div className='rounded shadow-md h-[100px] p-2 flex flex-col justify-center items-center'>
          <FontAwesomeIcon icon={faCalendarPlus} />
          <div>Create new camp</div>
        </div>
      </Link>
    </div>
  );
};
