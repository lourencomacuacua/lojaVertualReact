import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../util/auth';

type Props = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  return isAuthenticated() ? (
    <>{children}</>
  ) : (
    <Navigate to="/admin/auth/login" replace />
  );
};

export default PrivateRoute;
