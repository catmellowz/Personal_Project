import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function RedirectAuth({ children }) {
  const { authenticatedUser } = useAuth();

  if (authenticatedUser) {
    if (authenticatedUser.isAdmin) {
      return <Navigate to={'/admin'} />;
    }
    return <Navigate to={'/'} />;
  }

  return children;
}
