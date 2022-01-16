import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './home';
import { Expenses } from './expenses';
import { Invoices } from './invoices';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  );
};
