import pichome from '../icons/pic-home.png';
import Button from '../components/Button';
import Nav from '../components/Home/Navbar';
import Pic1 from '../icons/homepic1.png';
import Pic2 from '../icons/homepic2.png';
import Pic3 from '../icons/homepic3.png';
import Footer from '../components/Home/Footer';
import { Link } from 'react-router-dom';
export default function HomePage() {
  return (
    <>
      <Nav />
      <div className='flex justify-center'>
        <div className='flex flex-col justify-center pl-20 font-black text-7xl'>
          <span>Gift to give</span>
          <span>to your</span>
          <span className=' text-orange-500 pt-4'>BEST FRIEND</span>
          <div className='leading-3 w-72'>
            <span className='text-sm text-orange-900 '>
              Let us treat your pet like own family with best service
              and found best place for your best friend
            </span>
          </div>
          <div className='flex ml-10 mt-5'>
            <Link to={`/service`}>
              <Button name={'BUY NOW'} />
            </Link>
          </div>
        </div>
        <div>
          <img className='w-96 m-10' src={pichome} alt='pichome' />
        </div>
      </div>
      <div>
        <span className='flex justify-center text-3xl font-bold text-slate-900 '>
          Our Service
        </span>
        <div className='flex justify-center mr-32 ml-32 mt-10 mb-10'>
          <span>
            Your furry friend is important so we have continued to
            develop with an understanding of the minds of animal
            lovers And to fulfill the needs of animal lovers as much
            as possible. We is dedicated to paying attention to every
            treatment to be as effective as possible and in accordance
            with international quality standards as well as developing
            the knowledge and expertise of medical personnel to
            provide service with love and intention In addition, it
            also aims to develop modern medical equipment. able to
            accurately diagnose Including communication technology to
            respond to every treatment urgently and cover all customer
            needs.
          </span>
        </div>
        <div className='flex justify-evenly'>
          <div className='w-[200px] '>
            <img src={Pic1} />
            <div className='text-sm text-orange-900 text-center'>
              It is a long established fact that a reader will be
              distracted by the readable content of a page when
              looking at its layout.{' '}
            </div>
          </div>
          <div className='w-[200px] '>
            <img src={Pic2} />
            <div className='text-sm text-orange-900 text-center'>
              It is a long established fact that a reader will be
              distracted by the readable content of a page when
              looking at its layout.{' '}
            </div>
          </div>{' '}
          <div className='w-[200px] '>
            <img src={Pic3} />
            <div className='text-sm text-orange-900 text-center'>
              It is a long established fact that a reader will be
              distracted by the readable content of a page when
              looking at its layout.{' '}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
