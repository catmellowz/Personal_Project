import { Link } from 'react-router-dom';
import Button from '../Button';
import Modal from '../Modal';

export default function PaymentModal() {
  return (
    <Modal
      width={400}
      height={300}
      //   className='flex flex-col items-center justify-center'
    >
      <div className='py-6 px-4'>
        <div className='w-full p-6 flex flex-col items-center justify-center'>
          <p className=' text-3xl font-bold  text-lime-500'>
            Payment Successful
          </p>
          <p className='text-lg font-bold  '>THANK YOU!!</p>

          <p className='text-center text-sm font-bold pb-8 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Se d sed orci velit. Donec euismod, sem at mattis scel
          </p>
          <Link to={`/orderhistory`}>
            <Button name={'view my order'} />
          </Link>
        </div>
      </div>
    </Modal>
  );
}
