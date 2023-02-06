import { Link } from 'react-router-dom';
import Nav from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import OrderCart from '../components/Cart/OrderCart';
import Button from '../components/Button';
import useCart from '../hooks/useCart';
import { useEffect, useState } from 'react';
import * as cartApi from '../apis/cart-api';

export default function CartPage() {
  const { deleteCart } = useCart();
  const [amountCartItem, setAmountCartItem] = useState([]);

  useEffect(() => {
    const fetchCartItem = async () => {
      try {
        const res = await cartApi.cartItem();
        setAmountCartItem(res.data.modifiedService);
        console.log(res);
      } catch (err) {}
    };
    fetchCartItem();
  }, []);

  const sumAmount = () => {
    const sum = amountCartItem.reduce((sum, value) => {
      return value.price + sum;
    }, 0);
    return sum;
  };

  return (
    <div>
      <Nav />
      <div className='m-10'>
        <p className='flex justify-center text-3xl font-bold text-slate-900 '>
          My Cart
        </p>
      </div>
      <div>
        {amountCartItem.map((el) => (
          <OrderCart
            key={el.id}
            amount={el.amount}
            title={el.title}
            price={el.price}
            onClick={deleteCart}
          />
        ))}
      </div>
      <div className='flex justify-between'>
        <p className=' pl-20 text-lg font-bold text-slate-900 '>
          Total
        </p>
        <p className='pr-20 text-lg font-bold text-slate-900 '>
          THB {sumAmount()}
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
