import { useState } from 'react';

import Button from '../components/Button';
import RegisterModal from '../components/Login/RegisterModal';

export default function RegisterContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className='flex justify-center'>
        <Button
          name={'Create new'}
          onClick={() => {
            setOpen(true);
            // console.log('sss');
          }}
        />
      </div>
      {open ? (
        <RegisterModal
          onClose={() => {
            setOpen(false);
          }}
        />
      ) : null}
    </div>
  );
}
