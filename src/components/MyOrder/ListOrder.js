export default function ListOrder({ title, amount, price }) {
  return (
    <div>
      <div className='grid grid-cols-3 justify-items-center'>
        <div>{title}</div>
        <div>x {amount}</div>
        <div>THB {price}</div>
      </div>
    </div>
  );
}
