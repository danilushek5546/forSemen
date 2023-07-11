import type { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import userStore from '../strore/userStore';

type PropType = {
  children: JSX.Element;
};

const PrivateRoute: FC<PropType> = ({ children }) => {
  const location = useLocation();
  const from = location.pathname;

  if (!userStore.email) {
    return <Navigate to="/login" state={ from } />;
  }

  return children;
};

export default PrivateRoute;