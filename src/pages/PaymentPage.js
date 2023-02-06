import { useState } from 'react';
import Button from '../components/Button';
import Footer from '../components/Home/Footer';
import Nav from '../components/Home/Navbar';
import PaymentModal from '../components/Payment/PaymentModal';
import SlipBox from '../components/Payment/SlipComponent';
import SummaryComponent from '../components/Payment/Summary';

export default function PaymentPage() {
  const [file, setFile] = useState(null);
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <p className='flex justify-center pt-8 m-10 text-3xl font-bold text-slate-900 '>
          Payment
        </p>
      </div>
      <div className='flex justify-evenly'>
        <div>
          <SummaryComponent />
        </div>
        <div>
          <SlipBox />
        </div>
      </div>
      <div className='flex justify-center p-12'>
        <div className=' h-auto w-[150px]'>
          <Button name={'Confirm Payment'} />
        </div>
      </div>
      <div>
        <Footer />
      </div>

      {/* <PaymentModal /> */}
    </div>
  );
}
