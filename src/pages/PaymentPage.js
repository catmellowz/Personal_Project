import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Button from '../components/Button';
import Footer from '../components/Home/Footer';
import Nav from '../components/Home/Navbar';
import PaymentModal from '../components/Payment/PaymentModal';
import SlipBox from '../components/Payment/SlipComponent';
import SummaryComponent from '../components/Payment/Summary';
import useCart from '../hooks/useCart';
import * as pyApi from '../apis/payment-api';
import * as cartApi from '../apis/cart-api';

export default function PaymentPage() {
  const {
    amountCartItem,
    fetchCartItem,
    sumAmount,
    fetchAmountCart,
  } = useCart();
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const getSlip = async () => {
    try {
      const formData = new FormData();
      if (file) {
        formData.append('slipImage', file);
      }
      const res = await pyApi.getSlip(formData);
      console.log(res);

      return res.data;
    } catch (err) {}
  };

  const createOrder = async () => {
    try {
      if (file) {
        setisLoading(true);
        const link = await getSlip();

        const res = await pyApi.createOrder({
          slipImage: link.result,
        });
        await clearCart();
        setShowModal(true);
        setisLoading(false);
      } else {
        toast.error('Please attach pay slip to confirm your order.');
      }
    } catch (err) {}
  };

  const clearCart = async () => {
    try {
      const res = await cartApi.clearCart();
      await fetchCartItem();
      await fetchAmountCart();
    } catch (err) {}
  };

  useEffect(() => {
    fetchCartItem();
  }, []);
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <p className='flex justify-center pt-8 m-10 text-3xl font-bold '>
          Payment
        </p>
      </div>
      <div className='flex justify-evenly'>
        <div>
          <SummaryComponent
            summary={amountCartItem}
            sumAmount={sumAmount}
          />
        </div>
        <div>
          <SlipBox file={file} setFile={setFile} />
        </div>
      </div>
      <div className='flex justify-center p-12'>
        {!isLoading ? (
          <div className=' h-auto w-[160px]'>
            <Button name={'Confirm Payment'} onClick={createOrder} />
          </div>
        ) : (
          <button
            type='button'
            className=' flex justify-center items-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-orange-600 '
          >
            <div className='m-2 bg-white h-[10px] w-[10px] animate-spin'></div>
            processing ...
          </button>
        )}
      </div>
      <div>
        <Footer />
      </div>
      {showModal ? <PaymentModal /> : ''}
    </div>
  );
}
