import { Detail } from '../components/detail';
import { useParams } from 'react-router-dom';
import { mockData } from '../data';

export const CampDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <Detail data={mockData.filter((m) => m.id.toString() === id)[0]} />
    </div>
  );
};
