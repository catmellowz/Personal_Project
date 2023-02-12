export default function StatusOrder({ status }) {
  return (
    <div>
      {status === 'ONPROCESS' ? (
        <div className='flex justify-center bg-yellow-500 rounded p-2 w-[120px] h-[40px]'>
          {status}
        </div>
      ) : null}

      {status === 'CANCEL' ? (
        <div className='flex justify-center bg-red-500 rounded p-2 w-[120px] h-[40px]'>
          {status}
        </div>
      ) : null}

      {status === 'APPROVE' ? (
        <div className='flex justify-center bg-green-500 rounded p-2 w-[120px] h-[40px]'>
          {status}
        </div>
      ) : null}
    </div>
  );
}
