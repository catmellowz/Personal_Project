import { Link } from 'react-router-dom';
import Nav from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import OrderCart from '../components/Cart/OrderCart';
import Button from '../components/Button';
import useCart from '../hooks/useCart';

export default function CartPage() {
  const { deleteCart } = useCart();
  return (
    <div>
      <Nav />
      <div className='m-10'>
        <p className='flex justify-center text-3xl font-bold text-slate-900 '>
          My Cart
        </p>
      </div>
      <div>
        <OrderCart onClick={deleteCart} />
      </div>
      <div className='flex justify-between'>
        <p className=' pl-20 text-lg font-bold text-slate-900 '>
          Total
        </p>
        <p className='pr-20 text-lg font-bold text-slate-900 '>
          THB 500
        </p>
      </div>

      <div className='flex justify-center ml-10 mt-5'>
        <Link to={`/payment`}>
          <Button name={'Checkout'} />
        </Link>
      </div>

      <Footer />
    </div>
  );
}
