import { MainPage } from '../pages/main-page';

export type TAppProps = { cardAmount: number };

export const App = ({ cardAmount }: TAppProps): JSX.Element => (
  <MainPage cardAmount = {cardAmount} />
);
