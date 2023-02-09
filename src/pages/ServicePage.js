import Nav from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import Card from '../components/Service/Card';
import useCart from '../hooks/useCart';
import { useEffect, useState } from 'react';
import * as serviceApi from '../apis/service-api';

export default function ServicePage() {
  const { addCart } = useCart();
  const [services, setServices] = useState([]);

  useEffect(() => {
    // console.log('aaa');
    const fetchService = async () => {
      try {
        const res = await serviceApi.getService();
        setServices(res.data.services);

        // console.log(res);
      } catch (err) {}
    };

    fetchService();
  }, []);

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
      <div className='px-40'>
        <div className='grid grid-rows-2 grid-flow-col gap-4'>
          {services.map((el) => (
            <div className='flex justify-center'>
              <Card
                key={el.id}
                onClick={() => {
                  addCart(el.id);
                }}
                image={el.image}
                title={el.title}
                description={el.description}
                price={el.price}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
