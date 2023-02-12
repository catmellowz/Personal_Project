import detail from '../../icons/file-search.png';

export default function DetailOrder({
  OrderId,
  userId,
  CustomerName,
  totalPrice,
  date,
  onClick,
}) {
  return (
    <tbody className='text-center'>
      <tr>
        <td>{OrderId}</td>
        <td>{userId}</td>
        <td>{CustomerName}</td>
        <td>{date}</td>
        <td>{totalPrice}</td>
        <td>
          <button onClick={onClick}>
            <img src={detail} className='h-[20px]' alt='icon' />
          </button>
        </td>
        <td className='flex gap-2'>
          <button
            className='w-[80px] rounded bg-green-400 hover:bg-green-500 text-[12px]'
            s
          >
            approve
          </button>
          <button
            className='w-[80px] rounded bg-red-400 hover:bg-red-500 text-[12px]'
            s
          >
            reject
          </button>
        </td>
      </tr>
    </tbody>
  );
}
