import Nav from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import StatusOrder from '../components/MyOrder/Status';
import ListOrder from '../components/MyOrder/ListOrder';

export default function OrderHistory() {
  return (
    <div>
      <div>
        <Nav />
        <p className='flex justify-center p-10 text-3xl font-bold '>
          My Order
        </p>

        <div className='grid justify-items-center'>
          <div className='flex justify-center items-center p-10 bg-orange-50 w-11/12 shadow-sm rounded-lg'>
            <div>
              <ListOrder />
              <ListOrder />
              <ListOrder />
            </div>
            <div className=' flex items-center justify-center w-[200px] '>
              <StatusOrder />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
