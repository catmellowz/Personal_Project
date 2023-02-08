import detail from '../../icons/file-search.png';

export default function DetailOrder() {
  return (
    <tbody className='text-center'>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>John Smith</td>
        <td>02/03/2023</td>
        <td>1,500</td>
        <td>
          <button>
            <img src={detail} className='h-[20px]' />
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
