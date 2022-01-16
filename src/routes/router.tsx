import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './home';
import { Expenses } from './expenses';
import { Invoices } from './invoices';
import { Invoice } from './invoice';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* https://reactrouter.com/docs/en/v6/getting-started/tutorial#add-some-routes */}
        {/* <Route path="/" element={<Home />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}

        {/* https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes */}
        <Route path="/" element={<Home />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
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
