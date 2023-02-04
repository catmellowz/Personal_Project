import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function RedirectAuth({ children }) {
  const { authenticatedUser } = useAuth();

  if (authenticatedUser) {
    return <Navigate to={'/'} />;
  }

  return children;
}
