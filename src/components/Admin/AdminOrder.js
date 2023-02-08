import DetailOrder from './DetailOrder';

export default function AdminOrder() {
  return (
    <div className='flex justify-center pt-10 text-sm'>
      <table class='table-fixed border w-[800px]'>
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
        <DetailOrder />
        <DetailOrder />
        <DetailOrder />
        <DetailOrder />
      </table>
    </div>
  );
}
