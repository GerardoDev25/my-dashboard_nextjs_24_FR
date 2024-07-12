import { SimpleWidget, WidgetGrid } from '@/component';

const MainPage = () => {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>General Info</span>
      <WidgetGrid />
    </div>
  );
};
export default MainPage;
