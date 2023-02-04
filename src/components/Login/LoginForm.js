import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Input from '../Input';
import Button from '../Button';

import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await login(emailOrUsername, password);
      toast('success login :D');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };
  return (
    <div>
      <form className='mt-8 space-y-6' onSubmit={handleSubmitForm}>
        <div className='space-y-4 rounded-md shadow-sm'>
          <Input
            placeholder={'Email or Username'}
            type={'text'}
            name={'email Or username'}
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
          />
          <Input
            placeholder={'Password'}
            type={'password'}
            name={'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='flex justify-center'>
          <Button name={'Sign in'} type={'submit'} />
        </div>
      </form>
    </div>
  );
}
