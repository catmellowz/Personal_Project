import RegisterContainer from '../auth/RegisterModalContainer';

import logo from '../icons/logo.png';
import loginPic from '../icons/login-pic.jpeg';
import LoginForm from '../components/Login/LoginForm';

export default function LoginPage() {
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
        <div className='w-full max-w-sm space-y-4'>
          <div>
            <h2 className='mt-6 text-3xl font-bold tracking-tight text-orange-600'>
              Login
            </h2>
            <LoginForm />
          </div>

          <div className='h-0.5 w-auto bg-gray-200'></div>
          <RegisterContainer />
        </div>
      </div>
    </div>
  );
}
