import CardProduct from '../../icons/servicecard.jpeg';
import Cart from '../../icons/cartplus.png';

export default function Card() {
  return (
    <div className='w-[250px] bg-orange-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div>
        <img
          className='rounded-t-lg'
          src={CardProduct}
          alt='cardproduct'
        />
      </div>
      <div className='p-5'>
        <div className='text-center'>
          <p className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Hair and Nail Cut
          </p>

          <p className='text-xs mb-3 text-gray-700 '>
            Bath and hair cut service we pay attention to every
            detail.
          </p>
        </div>
        <div className='flex justify-between'>
          <div className='pt-2'>
            <p>THB 500</p>
          </div>
          <button className='flex justify-center px-3 py-2 bg-orange-500 rounded-lg hover:bg-orange-600'>
            <img className='h-6 w-auto' src={Cart} alt='logo' />
          </button>
        </div>
      </div>
    </div>
  );
}
