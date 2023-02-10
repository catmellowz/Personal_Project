import Upload from '../../icons/file-upload.png';

export default function SlipBox({ file, setFile }) {
  return (
    <div>
      <div className='flex items-center justify-center bg-orange-50 w-[300px] h-[350px]  rounded shadow'>
        {file ? (
          <img
            src={file ? URL.createObjectURL(file) : Upload}
            className='w-[250px] h-[300px]'
            alt='file'
          />
        ) : (
          <div className='flex flex-col items-center justify-center'>
            <img
              src={Upload}
              className='w-[100px] h-[100px]'
              alt='icon'
            />
            <p>Please upload slip</p>
          </div>
        )}
      </div>
      <div className='pt-4 '>
        <input
          type='file'
          onChange={(e) => {
            if (e.target.files[0]) {
              //when choose pic and choose again then cancel wont be define but still the same pic
              setFile(e.target.files[0]);
            }
            console.log(e.target.files);
          }}
        ></input>
      </div>
    </div>
  );
}
