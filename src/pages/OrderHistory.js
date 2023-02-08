import CartHistory from '../components/Cart/CartHistory';
import Nav from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import StatusOrder from '../components/Status';

export default function OrderHistory() {
  return (
    <div>
      <div>
        <Nav />
        <div className='flex justify-center p-10'>
          <div className='m-10'>
            <p className='flex justify-center text-3xl font-bold text-slate-900 '>
              My Order
            </p>
          </div>
          <div className='flex'>
            <CartHistory />
            <div className=' flex items-center'>
              <StatusOrder />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
