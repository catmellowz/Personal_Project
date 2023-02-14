import { useState } from 'react';
import DetailOrder from './DetailOrder';
import ModalAdmin from './ModalAdmin';
import useCart from '../../hooks/useCart';

export default function AdminOrder({ orderAdmin, date }) {
  const [orderDetail, setOrderDetail] = useState('');
  const [open, setOpen] = useState(false);
  const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName} `;
  };

  const { fetchOrderAdmin } = useCart();
  return (
    <div className='flex justify-center pt-10 text-sm ]'>
      <table className='table-fixed border w-[1300px]'>
        <thead className='border'>
          <tr className='bg-orange-50'>
            <th>Order id</th>
            <th>User id</th>
            <th>Customer Name</th>
            <th>date</th>
            <th>total price</th>
            <th>details</th>
            <th>Status</th>
          </tr>
        </thead>

        {orderAdmin.map((el) => (
          <DetailOrder
            key={el.id}
            OrderId={el.id}
            userId={el.userId}
            CustomerName={fullName(
              el.User.firstName,
              el.User.lastName
            )}
            date={date(el.createdAt)}
            totalPrice={el.totalPrice}
            status={el.status}
            onClick={() => {
              setOpen(true);
              setOrderDetail(el);
            }}
            fetchOrderAdmin={fetchOrderAdmin}
          />
        ))}
      </table>
      {open ? (
        <ModalAdmin
          onClose={() => {
            setOpen(false);
            console.log('ss');
          }}
          orderDetail={orderDetail}
        />
      ) : null}
    </div>
  );
}
