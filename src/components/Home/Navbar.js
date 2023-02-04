import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoManage from '../../icons/logo-manage.png';
import logo from '../../icons/logo.png';
import cart from '../../icons/shopping-cart.svg';
import useAuth from '../../hooks/useAuth';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { authenticatedUser } = useAuth();
  return (
    <>
      <nav className='bg-orange-50 shadow-lg'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 items-center justify-between'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
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
              {authenticatedUser ? (
                <div className='flex grow justify-center space-x-4'>
                  <Link
                    to={`/`}
                    className='text-orange-500  hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium '
                    aria-current='page'
                  >
                    Home
                  </Link>

                  <Link
                    to='/service'
                    className='text-slate-900 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Service
                  </Link>
                </div>
              ) : null}
            </div>
            {!authenticatedUser ? (
              <Link to={`/login`}>
                <div className='text-slate-900 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Login
                </div>
              </Link>
            ) : null}
            <div className='absolute flex items-center pr-2 sm:static sm:inset-auto'>
              {authenticatedUser ? (
                <Link to={`/cart`}>
                  <img
                    className='pr-3 mb-2 first:h-6 w-auto '
                    src={cart}
                    alt='logo'
                  />
                </Link>
              ) : null}

              <div className='relative ml-3'>
                {authenticatedUser ? (
                  <button
                    type='button'
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    <img
                      className='h-8 w-8 rounded-full'
                      src={LogoManage}
                      alt='logologin'
                    />
                  </button>
                ) : null}

                {open ? (
                  <div className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <Link
                      to='/orderhistory'
                      className='block px-4 py-2 text-sm text-gray-700 hover:text-orange-500'
                    >
                      My order
                    </Link>
                    <div className='block px-4 py-2 text-sm text-red-600 hover:text-orange-500'>
                      Sign out
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
