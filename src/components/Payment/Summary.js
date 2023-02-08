import * as cartApi from '../../apis/cart-api';

export default function SummaryComponent({ summary, sumAmount }) {
  return (
    <div>
      <div className='px-4 py-6 bg-orange-50 rounded-lg shadow w-[300px] h-[350px]'>
        <p className='mb-2 text-lg font-semibold tracking-tight'>
          Summary Order
        </p>
        <div className='h-[220px] overflow-auto'>
          {summary.map((el) => (
            <div className='flex items-center p-4 '>
              <div className='flex w-[100px]'>
                <p className=' text-sm font-bold text-start '>
                  {el.Service.title}
                </p>
              </div>
              <div className='flex'>
                <div className='flex pl-2 '>
                  <p className='text-sm'>x {el.total_amount}</p>
                </div>
                <div className='flex pl-2'>
                  <p className=' text-sm text-orange-500 '>
                    THB {el.Service.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className='h-0.5 w-auto bg-gray-200'></div>
        </div>
        <div className='flex justify-between p-4'>
          <p className='text-sm'>Total</p>
          <p className='text-sm text-orange-500 '>
            THB {sumAmount()}
          </p>
        </div>
      </div>
    </div>
  );
}
