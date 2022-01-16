import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './home';
import { Expenses } from './expenses';
import { Invoices } from './invoices';
import { Invoice } from './invoice';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
