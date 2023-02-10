import CartHistory from '../components/Cart/CartHistory';
import Nav from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import StatusOrder from '../components/Status';

export default function OrderHistory() {
  return (
    <div>
      <div>
        <Nav />
        <p className='flex justify-center p-10 text-3xl font-bold '>
          My Order
        </p>
        <div className='flex justify-center p-10'>
          <div className='m-10'></div>
          <div className='flex'>
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
