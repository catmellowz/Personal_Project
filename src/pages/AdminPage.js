import Admin from '../components/Admin/Admin';
import AdminOrder from '../components/Admin/AdminOrder';
import useCart from '../hooks/useCart';

export default function AdminPage() {
  const { orderAdmin, date } = useCart();

  return (
    <>
      <div>
        <Admin />
        <AdminOrder orderAdmin={orderAdmin} date={date} />
      </div>
    </>
  );
}
