import { AppRoute, AuthorizationStatus } from '../routes/routes';
import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
}

export const PrivateRoute: FC<PropsWithChildren<PrivateRouteProps>> = ({ authorizationStatus, children }) => (
  authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login}/>
);
