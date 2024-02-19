import { MainPage } from '../pages/main';
import { FC, PropsWithChildren } from 'react';

export type TAppProps = { cardAmount: number };

export const App: FC<PropsWithChildren<TAppProps>> = ({ cardAmount }) => (
  <MainPage cardAmount = {cardAmount} />
);
