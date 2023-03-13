import { Detail } from '../components/detail';
import { useParams } from 'react-router-dom';
import { mockData } from '../data';
import { Timetable } from '../components/timetable';

export const CampDetail = () => {
  const { id } = useParams();

  return (
    <div className='p-4'>
      <Detail data={mockData.filter((m) => m.id.toString() === id)[0]} />
      <div className='text-xl font-bold mt-12'>Timetable</div>
      <Timetable id={id}/>
    </div>
  );
};
