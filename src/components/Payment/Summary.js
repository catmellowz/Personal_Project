export default function SummaryComponent() {
  return (
    <div>
      <div className='max-w-sm p-8 bg-orange-50 rounded-lg shadow w-[300px] h-[350px]'>
        <p className='mb-2 text-lg font-semibold tracking-tight text-gray-900 '>
          Summary Order
        </p>

        <div className='flex justify-between'>
          <div className='flex items-center p-4'>
            <p className=' text-sm font-bold text-center  text-gray-900 '>
              Pet shower
            </p>
          </div>
          <div className='flex items-center '>
            <p className='text-sm  text-gray-700 dark:text-gray-400'>
              x 1
            </p>
          </div>
          <div className='flex items-center'>
            <p className=' text-sm text-orange-500 '>THB 500</p>
          </div>
        </div>
        <div>
          <div className='h-0.5 w-auto bg-gray-200'></div>
        </div>
        <div className='flex justify-between p-4'>
          <p className='text-sm text-slate-900 '>Total</p>
          <p className='text-sm text-orange-500 '>THB 500</p>
        </div>
      </div>
    </div>
  );
}
