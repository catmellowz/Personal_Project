import Nav from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import Card from '../components/Service/Card';

export default function ServicePage() {
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
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}
