'use client';
import { SimpleWidget } from './Simplewidget';
import { IoCartOutline } from 'react-icons/io5';
import { useAppSelector } from '@/store';

export const WidgetGrid = () => {
  const isCart = useAppSelector((store) => store.counter.count);

  return (
    <div className='flex flex-wrap p-2'>
      <SimpleWidget
        title={isCart + ''}
        subtitle='Added products'
        label='Counter'
        Icon={<IoCartOutline className='text-blue-600' size={70} />}
        href='/dashboard/counter'
      />
    </div>
  );
};
