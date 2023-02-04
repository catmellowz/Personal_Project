import Upload from '../../icons/file-upload.png';

export default function SlipBox() {
  return (
    <div>
      <div className='flex items-center justify-center bg-orange-50 w-[300px] h-[300px]  rounded shadow'>
        <img src={Upload} className='w-[200px] h-[200px]' />
      </div>
      <div className='pt-4 '>
        <input type='file'></input>
      </div>
    </div>
  );
}
