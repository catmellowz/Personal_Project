import { toast } from 'react-toastify';
import * as authApi from '../../apis/auth-api';
import { useState } from 'react';
import validateRegister from '../../validators/validate-register';

import Input from '../Input';
import Button from '../Button';

const initialInput = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function RegisterContainer({ onClose }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    // console.log(e);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      // console.log(input);
      e.preventDefault();
      const result = validateRegister(input);
      // console.log(result);
      if (result) {
        // console.log(result, 'test');
        setError(result);
      } else {
        setError({});

        await authApi.register(input);

        setInput(initialInput);
        onClose();
        // toast.success('success register. please log in to continue');
      }
    } catch (err) {
      toast(err.response?.data.message);
    }
  };
  return (
    <div className='flex min-h-full items-center justify-center py-6 px-4 sm:px-6 lg:px-8'>
      <div className='w-full space-y-8'>
        <div>
          <h2 className='flex justify-center text-3xl font-bold tracking-tight text-orange-600'>
            Register
          </h2>
        </div>
        <form
          className='mt-8 space-y-6 peer'
          onSubmit={handleSubmitForm}
        >
          <div className='flex justify-between rounded-md shadow-sm'>
            <Input
              placeholder={'First Name'}
              type={'text'}
              name={'firstName'}
              value={input.firstName}
              onChange={handleChangeInput}
              error={error.firstName}
            />

            <Input
              placeholder={'Last Name'}
              type={'text'}
              name={'lastName'}
              value={input.lastName}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <Input
              placeholder={'Email or Username'}
              type={'text'}
              name={'email'}
              value={input.email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <Input
              placeholder={'Password'}
              type={'password'}
              name={'password'}
              value={input.password}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <Input
              placeholder={'Confirm Password'}
              type={'password'}
              name={'confirmPassword'}
              value={input.confirmPassword}
              onChange={handleChangeInput}
            />
          </div>

          <div className='h-0.5 w-auto bg-gray-200'></div>
          <div className='flex justify-center'>
            <Button name={'Sign up'} type={'submit'} />
          </div>
        </form>
      </div>
    </div>
  );
}
