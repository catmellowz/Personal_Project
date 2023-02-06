import Nav from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import Card from '../components/Service/Card';
import useCart from '../hooks/useCart';

export default function ServicePage() {
  const { addCart } = useCart();

  return (
    <div>
      <Nav />
      <div className='m-10'>
        <p className='flex justify-center text-3xl font-bold text-slate-900 '>
          Our Service
        </p>
        <p className='flex justify-center '>
          Our best Service with best price for your fluffy
        </p>
      </div>
      <div className='flex flex-nowarp justify-evenly'>
        <Card onClick={addCart} />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}
