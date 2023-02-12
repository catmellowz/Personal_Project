import Modal from '../Modal';
import slip from '../../icons/sliptest.jpeg';
import useCart from '../../hooks/useCart';

export default function ModalAdmin({ onClose, orderDetail }) {
  const { date } = useCart();
  return (
    <div>
      <Modal>
        <div className='p-10 bg-orange-50 w-[1000px] shadow-sm rounded-lg m-10'>
          <div className='absolute flex justify-end'>
            <button
              className=' relative left-[930px] bottom-[30px] text-[20px]'
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className='flex justify-between'>
            <div className='text-orange-500 text-lg'>
              OrderId : {orderDetail.order.id}
            </div>
            <div className='text-orange-500 text-lg pb-10'>
              Date: {date(orderDetail.order.createdAt)}
            </div>
          </div>
          <div className='col-span-3'>
            {orderDetail.order.OrderItems.map((e) => (
              <div className='grid grid-cols-3' key={e.id}>
                <div className='gird justify-items-start'>
                  {e.Service.title}
                </div>
                <div className='text-center'>x {e.amount}</div>
                <div className='text-end'>THB {e.price}</div>
              </div>
            ))}
          </div>
          <div className='h-0.5 w-auto bg-gray-200 m-10'></div>
          <div className='flex justify-evenly text-lg '>
            <div>Total</div>
            <div>THB {orderDetail.order.totalPrice}</div>
          </div>
          <div className='text-center text-lg font-bold text-orange-500 pt-10'>
            Pay Slip
          </div>
          <div className='flex justify-center p-10'>
            <img
              className='h-[500px] shadow-lg border rounded-lg border-orange-500 '
              src={orderDetail.order.slipImage}
              alt='slip'
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
