import InputBox from '../components/camp';

const Home = () => {
  return (
    <div className='w-screen h-screen flex justify-center bg-gray-50 '>
      <a className="container mx-auto px-4">Camp</a>
      <div className='w-screen h-screen flex justify-center items-center bg-gray-50 '>
            <InputBox />
      </div>
    </div>
  );
};

export default Home;