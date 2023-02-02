import React, { useState } from 'react';
import { toast } from 'react-toastify';
import logo from '../icons/logo.png';
import loginPic from '../icons/login-pic.jpeg';
import Input from '../components/Input';
import Button from '../components/Button';
import RegisterModal from '../components/Register/RegisterModal';

export default function LoginPage() {
  const [open, setOpen] = useState(false);
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };
  return (
    <div>
      <div className='pt-4 pl-10'>
        <img className='h-12 w-auto' src={logo} alt='logo' />
      </div>

      <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='h-48'>
          <img
            className='max-w-[60%] m-auto'
            src={loginPic}
            alt='login-pic'
          />
        </div>
        <div className='w-full max-w-sm space-y-8'>
          <div>
            <h2 className='mt-6 text-3xl font-bold tracking-tight text-orange-600'>
              Login
            </h2>
          </div>
          <form
            className='mt-8 space-y-6'
            action='#'
            method='POST'
            onSubmit={handleSubmitForm}
          >
            <input
              type='hidden'
              name='remember'
              defaultValue='true'
            />
            <div className='space-y-4 rounded-md shadow-sm'>
              <Input
                placeholder={'Email or Mobile phone'}
                type={'text'}
                name={'email Or mobilephone'}
              />
              <Input
                placeholder={'Password'}
                type={'password'}
                name={'password'}
              />
            </div>

            <div>
              <Button name={'Sign in'} />
            </div>
          </form>
          <div className='h-0.5 w-auto bg-gray-200'></div>
          <div>
            <Button
              name={'Create new'}
              onClick={() => {
                setOpen(true);
                console.log('sss');
              }}
            />
          </div>
        </div>
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
