import Footer from '../components/Home/Footer';
import Nav from '../components/Home/Navbar';
import SummaryComponent from '../components/Payment/Summary';

export default function PaymentPage() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <p className='flex justify-center pt-8 m-10 text-3xl font-bold text-slate-900 '>
          Payment
        </p>
      </div>
      <div>
        <SummaryComponent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
