import detail from '../../icons/file-search.png';
import * as pyApi from '../../apis/payment-api';

export default function DetailOrder({
  OrderId,
  userId,
  CustomerName,
  totalPrice,
  date,
  onClick,
  status,
}) {
  const updateStatus = async (status) => {
    try {
      const res = await pyApi.statusOrder({
        orderId: OrderId,
        status,
      });
    } catch (err) {}
  };

  const renderStatusButton = () => {
    if (status === 'ONPROCESS') {
      return (
        <div>
          <button
            onClick={() => updateStatus('APPROVE')}
            className='w-[80px] rounded bg-green-400 hover:bg-green-500 text-[12px]'
            s
          >
            approve
          </button>

          <button
            onClick={() => updateStatus('CANCEL')}
            className='w-[80px] rounded bg-red-400 hover:bg-red-500 text-[12px]'
            s
          >
            reject
          </button>
        </div>
      );
    }

    if (status === 'APPROVE') {
      return (
        <button
          className='w-[120px] p-2 rounded bg-orange-500 hover:bg-orange-600 text-[12px]'
          s
        >
          Order Approved
        </button>
      );
    }

    return (
      <button className='w-[120px] p-2 rounded bg-red-500 hover:bg-red-600 text-[12px]'>
        Order Rejected
      </button>
    );
  };

  return (
    <tbody className='text-center '>
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
        <td className='flex justify-center'>
          {renderStatusButton()}
        </td>
      </tr>
    </tbody>
  );
}
