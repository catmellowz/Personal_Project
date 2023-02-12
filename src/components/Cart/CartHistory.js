import CardProduct from '../../icons/servicecard.jpeg';

export default function CartHistory({ title, amount, price }) {
  return (
    <>
      <div>
        <div className='flex justify-evenly'>
          <img
            className='ml-10 h-96 md:h-auto md:w-48 rounded'
            src={CardProduct}
            alt='cardproduct'
          />
          <div className='flex items-center w-[400px] p-4'>
            <p className=' text-sm font-bold text-center tracking-tight text-gray-900 dark:text-white'>
              {title}
            </p>
          </div>
          <div className='flex items-center '>
            <p className='font-sm w-[200px] text-gray-700 dark:text-gray-400'>
              x {amount}
            </p>
          </div>
          <div className='flex items-center'>
            <p className='w-[300px] font-sm text-gray-700 dark:text-gray-400'>
              THB {price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
