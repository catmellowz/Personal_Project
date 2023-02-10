import { Link } from 'react-router-dom';
import Nav from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import OrderCart from '../components/Cart/OrderCart';
import Button from '../components/Button';
import { useEffect } from 'react';
import useCart from '../hooks/useCart';
// import * as cartApi from '../apis/cart-api';
// import { toast } from 'react-toastify';

export default function CartPage() {
  const { amountCartItem, fetchCartItem, sumAmount, deleteCart } =
    useCart();

  //call item in cart when refresh or go another page and back
  useEffect(() => {
    fetchCartItem();
  }, []);

  return (
    <div>
      <Nav />
      <div className='m-10'>
        <p className='flex justify-center text-3xl font-bold '>
          My Cart
        </p>
      </div>
      <div>
        {amountCartItem.map((el) => (
          <OrderCart
            key={el.Service.id}
            amount={el.total_amount}
            title={el.Service.title}
            price={el.Service.price}
            onClick={() => {
              deleteCart(el.service_id);
            }}
          />
        ))}
      </div>
      <div className='flex justify-between'>
        <p className=' pl-20 text-lg font-bold t'>Total</p>
        <p className='pr-20 text-lg font-bold '>THB {sumAmount()}</p>
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
