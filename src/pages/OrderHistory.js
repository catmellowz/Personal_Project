import Nav from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import StatusOrder from '../components/MyOrder/Status';
import ListOrder from '../components/MyOrder/ListOrder';
import useCart from '../hooks/useCart';

export default function OrderHistory() {
  const { order } = useCart();
  return (
    <div>
      <div>
        <Nav />
        <p className='flex justify-center p-10 text-3xl font-bold '>
          My Order
        </p>
        {/* map orderId totalPrice status */}
        <div className='grid justify-items-center'>
          {order.map((el) => (
            <div
              className='p-10 bg-orange-50 w-11/12 shadow-sm rounded-lg'
              key={el.id}
            >
              <div className='grid grid-cols-4'>
                <div className='col-span-3'>
                  {/* map contents in card */}
                  {el.OrderItems.map((e) => (
                    <div key={e.id}>
                      <ListOrder
                        title={e.Service.title}
                        amount={e.amount}
                        price={e.price}
                      />
                    </div>
                  ))}
                </div>

                <div className=' flex items-center justify-center w-[200px] '>
                  <StatusOrder status={el.status} />
                </div>
              </div>
              <div className='h-0.5 w-auto bg-gray-200 m-10'></div>
              <div className='flex justify-evenly text-lg '>
                <div>Total</div>
                <div>THB {el.totalPrice}</div>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
