import { SimpleWidget } from '@/component';

const MainPage = () => {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>General Info</span>
      <div className='flex flex-wrap p-2'>
        <SimpleWidget />
      </div>
    </div>
  );
};
export default MainPage;
