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
import AdminPage from '../pages/AdminPage';
import RedirectAuth from '../auth/RedirectAuth';
import ProtectedRoute from '../auth/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: (
      <RedirectAuth>
        <LoginPage />
      </RedirectAuth>
    ),
  },
  {
    path: '/service',
    element: (
      <ProtectedRoute>
        <ServicePage />,
      </ProtectedRoute>
    ),
  },
  {
    path: '/cart',
    element: (
      <ProtectedRoute>
        <CartPage />,
      </ProtectedRoute>
    ),
  },
  {
    path: '/payment',
    element: (
      <ProtectedRoute>
        <Paymentpage />,
      </ProtectedRoute>
    ),
  },
  {
    path: '/orderhistory',
    element: (
      <ProtectedRoute>
        <OrderHistory />
      </ProtectedRoute>
    ),
  },
  { path: '/admin', element: <AdminPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
