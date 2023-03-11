import CardProduct from '../../icons/servicecard.jpeg';

export default function OrderCart({
  onClick,
  title,
  price,
  amount,
  image,
}) {
  return (
    <>
      <div>
        <div className='flex justify-evenly'>
          <img
            className='ml-10 h-[200px]'
            src={image}
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
          <div className='flex items-center w-[300px]'>
            <button
              onClick={onClick}
              type='button'
              className='rounded-md bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 '
            >
              Delete
            </button>
          </div>
        </div>
        <div className='p-10'>
          <div className='h-0.5 w-auto bg-gray-200'></div>
        </div>
      </div>
    </>
  );
}
