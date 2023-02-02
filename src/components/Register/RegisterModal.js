import Input from '../Input';
import Button from '../Button';
import Modal from '../Modal';
import X from '../../icons/x-mark.png';

export default function RegisterModal({ onClose }) {
  return (
    <div>
      <Modal onClose={onClose} width={500} height={100}>
        <div className='flex justify-end pr-2 pt-3'>
          <img onClick={onClose} className='w-5' src={X} alt='logo' />
        </div>
        <div className='flex min-h-full items-center justify-center py-6 px-4 sm:px-6 lg:px-8'>
          <div className='w-full max-w-sm space-y-8'>
            <div>
              <h2 className='flex justify-center text-3xl font-bold tracking-tight text-orange-600'>
                Register
              </h2>
            </div>
            <form className='mt-8 space-y-6' action='#' method='POST'>
              <input
                type='hidden'
                name='remember'
                defaultValue='true'
              />
              <div className='flex justify-between rounded-md shadow-sm'>
                <Input
                  placeholder={'First Name'}
                  type={'text'}
                  name={'firstname'}
                />
                <Input
                  placeholder={'Last Name'}
                  type={'text'}
                  name={'lastname'}
                />
              </div>
              <div>
                <Input
                  placeholder={'Email or Mobile phone'}
                  type={'text'}
                  name={'email Or mobilephone'}
                />
              </div>
              <div>
                <Input
                  placeholder={'Password'}
                  type={'password'}
                  name={'password'}
                />
              </div>
              <div>
                <Input
                  placeholder={'Confirm Password'}
                  type={'password'}
                  name={'password'}
                />
              </div>

              <div className='h-0.5 w-auto bg-gray-200'></div>
              <div>
                <Button name={'Sign up'} />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
