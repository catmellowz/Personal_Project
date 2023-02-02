import { useContext, userContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function userContext() {
  return useContext(AuthContext);
}
