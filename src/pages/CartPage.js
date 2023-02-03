import Nav from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import OrderCart from '../components/Cart/OrderCart';

export default function CartPage() {
  return (
    <div>
      <Nav />
      <div className='m-10'>
        <p className='flex justify-center text-3xl font-bold text-slate-900 '>
          My Cart
        </p>
      </div>
      <div>
        <OrderCart />
      </div>

      <Footer />
    </div>
  );
}
