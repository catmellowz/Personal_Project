import CartHistory from '../components/Cart/CartHistory';
import Nav from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';

export default function OrderHistory() {
  return (
    <div>
      <Nav />
      <div className='m-10'>
        <p className='flex justify-center text-3xl font-bold text-slate-900 '>
          My Order
        </p>
      </div>
      <CartHistory />
      <Footer />
    </div>
  );
}
