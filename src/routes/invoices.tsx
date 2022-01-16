import { NavLink, Outlet } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { getInvoices } from 'src/data/invoices';

export const Invoices = () => {
  const invoices = getInvoices();

  return (
    <Layout>
      <div style={{ display: 'flex' }}>
        <nav
          style={{
            borderRight: 'solid 1px',
            padding: '1rem',
          }}
        >
          {invoices.map((invoice) => (
            <NavLink
              style={{ display: 'block', margin: '1rem 0' }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
              className={({ isActive }) =>
                isActive ? 'text-red-500' : 'text-blue-500'
              }
            >
              {invoice.name}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>
    </Layout>
  );
};
