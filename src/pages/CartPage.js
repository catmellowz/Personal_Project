import { Link } from 'react-router-dom';
import Nav from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import OrderCart from '../components/Cart/OrderCart';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import * as cartApi from '../apis/cart-api';
import { toast } from 'react-toastify';

export default function CartPage() {
  const [amountCartItem, setAmountCartItem] = useState([]);
  const fetchCartItem = async () => {
    try {
      const res = await cartApi.cartItem();
      setAmountCartItem(res.data.serviceInCart);
      console.log(res);
    } catch (err) {}
  };
  //call item in cart when refresh or go another page and back
  useEffect(() => {
    fetchCartItem();
  }, []);

  const sumAmount = () => {
    const sum = amountCartItem.reduce((sum, value) => {
      return value.price + sum;
    }, 0);
    return sum;
  };

  const deleteCart = async (id) => {
    const res = await cartApi.deleteItem(id);
    await fetchCartItem();
    toast.error('item deleted');
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
            amount={el.total_amount}
            title={el.title}
            price={el.price}
            onClick={() => {
              deleteCart(el.id);
            }}
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
