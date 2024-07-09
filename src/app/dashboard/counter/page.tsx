import { CartCounter } from '@/app/shopping-cart';

export const metadata = {
  title: 'Shopping Cart',
  description: 'This is a counter page',
};

const CounterPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Products is tne buy car</span>
      <CartCounter value={20}/>
    </div>
  );
};

export default CounterPage;
