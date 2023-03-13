import { Camp } from '../components/camp';
import { CreateCard } from '../components/createCard';
import { mockData } from '../data';

const Home = () => {
  return (
    <div className='w-full h-screen bg-gray-50 p-4'>
      <div className='flex mb-3 justify-between'>
        <CreateCard />
        <div className='flex flex-col items-end'>
          <div>Welcome, Admin</div>
          <div>
            You have <i>{mockData.length}</i> camps to manage
          </div>
        </div>
      </div>
      <div className='font-bold text-xl'>Upcoming Camp</div>
      <div className='flex'>
        {mockData.map((camp) => (
          <div className='w-1/4 p-2'>
            <Camp data={camp} />
          </div>
        ))}
      </div>
      <div className='font-bold text-xl'>Ended Camp</div>
      <div className='flex'>
        {mockData.map((camp) => (
          <div className='w-1/4 p-2'>
            <Camp data={camp} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
