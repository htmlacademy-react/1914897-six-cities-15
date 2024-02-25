import { MainPage } from '../pages/main-page';
import { NotFoundPage } from '../pages/not-found-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export type TAppProps = {
  cardAmount: number;
};

export const App = ({ cardAmount }: TAppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <MainPage cardAmount={cardAmount} />
    </Routes>
  </BrowserRouter>
);
