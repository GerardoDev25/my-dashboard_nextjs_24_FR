'use client';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, subtractOne } from '@/store/counter/counterSlice';

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <>
      <span className='text-9xl'>{count}</span>
      <div className='flex'>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
          onClick={() => dispatch(subtractOne())}
          disabled={count <= 0}
        >
          -1
        </button>
      </div>
    </>
  );
};
