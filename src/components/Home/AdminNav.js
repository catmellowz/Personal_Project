import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import admin from '../../icons/admin.png';
import logo from '../../icons/logo.png';
import useAuth from '../../hooks/useAuth';

export default function AdminNav() {
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();

  // console.log(countCart);
  return (
    <>
      <nav className='bg-orange-50 shadow-lg'>
        <div className='mx-auto max-w-7xl px-2 '>
          <div className=' flex h-16 items-center justify-between'>
            <div className=' inset-y-0 left-0 flex items-center '>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-orange-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              ></button>
            </div>
            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
              <Link to={`/`}>
                <button className='flex flex-shrink-0 items-center'>
                  <img
                    className=' h-8 w-auto'
                    src={logo}
                    alt='logo'
                  />
                </button>
              </Link>
            </div>

            <div>
              <div className='flex justify-center relative ml-3 bg-orange-500 h-[30px] w-[30px] rounded-full'>
                <button
                  className='flex items-center'
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <img
                    className='h-5 w-5 rounded-full'
                    src={admin}
                    alt='adminlogo'
                  />
                </button>
              </div>
              {open ? (
                <Link to={`/`}>
                  <div className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div
                      onClick={() => {
                        logout();
                        setOpen(false);
                        toast('Bye byeeee !');
                      }}
                      className='block px-4 py-2 text-sm text-red-600 hover:text-orange-500 cursor-pointer'
                    >
                      Sign out
                    </div>
                  </div>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
