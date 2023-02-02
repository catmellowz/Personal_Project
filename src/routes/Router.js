import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ServicePage from '../pages/ServicePage';
import CartPage from '../pages/CartPage';
import Paymentpage from '../pages/PaymentPage';
import OrderHistory from '../pages/OrderHistory';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/service',
    element: <ServicePage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/payment',
    element: <Paymentpage />,
  },
  {
    path: '/orderhistory',
    element: <OrderHistory />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
