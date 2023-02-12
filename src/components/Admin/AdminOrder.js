import DetailOrder from './DetailOrder';

export default function AdminOrder({ orderAdmin, date }) {
  const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName} `;
  };
  return (
    <div className='flex justify-center pt-10 text-sm'>
      <table className='table-fixed border w-[800px]'>
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
          />
        ))}
      </table>
    </div>
  );
}
