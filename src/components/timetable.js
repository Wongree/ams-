import { useEffect } from 'react';
import { timetable } from '../data';

export const Timetable = ({ id }) => {
  const data = timetable.filter((f) => f.id.toString() === id)[0];
  const time = [
    '9.00-10.00',
    '10.00-11.00',
    '11.00-12.00',
    '12.00-13.00',
    '13.00-14.00',
    '14.00-15.00',
    '15.00-16.00',
    '16.00-17.00',
    '17.00-18.00',
    '18.00-19.00',
    '19.00-20.00',
    '20.00-21.00',
  ];
  return (
    <>
      {data ? (
        <div className='grid grid-cols-12 gap-4'>
          {time.map((t) => (
            <div className='col-span-1 border-2 inline-grid'>{t}</div>
          ))}
          {data.schedule.map((d) => (
            <div
              className={`inline-grid border-2 col-start-${
                d.start - 8
              } col-end-${d.end - 8} bg-blue-400`}>
              {d.title}
            </div>
          ))}
        </div>
      ) : (
        <div>Schedule unavailable</div>
      )}
    </>
  );
};
