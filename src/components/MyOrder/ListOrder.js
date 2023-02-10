import StatusOrder from '../../components/MyOrder/Status';

export default function ListOrder() {
  return (
    <div className='flex items-center '>
      <div className='flex justify-between w-[1000px]'>
        <div>pet shower</div>
        <div>x 1</div>
        <div>THB 500</div>
      </div>

      {/* <div className=' flex items-center justify-center w-[200px] '>
        <StatusOrder />
      </div> */}
    </div>
  );
}
