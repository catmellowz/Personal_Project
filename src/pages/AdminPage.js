import { useEffect } from 'react';
import Admin from '../components/Admin/Admin';
import AdminOrder from '../components/Admin/AdminOrder';
import useCart from '../hooks/useCart';

export default function AdminPage() {
  const { orderAdmin, date, fetchOrderAdmin } = useCart();

  useEffect(() => {
    fetchOrderAdmin();
  }, []);
  return (
    <>
      <div>
        <Admin />
        <AdminOrder orderAdmin={orderAdmin} date={date}></AdminOrder>
      </div>
    </>
  );
}
