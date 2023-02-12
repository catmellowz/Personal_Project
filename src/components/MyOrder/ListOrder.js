export default function ListOrder({ title, amount, price }) {
  return (
    <div>
      <div className='grid grid-cols-3'>
        <div className='gird justify-items-start'>{title}</div>
        <div className='text-center'>x {amount}</div>
        <div className='text-center'>THB {price}</div>
      </div>
    </div>
  );
}
