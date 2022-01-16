import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { getInvoices } from 'src/data/invoices';

export const Invoices = () => {
  const invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <Layout>
      <div style={{ display: 'flex' }}>
        <nav
          style={{
            borderRight: 'solid 1px',
            padding: '1rem',
          }}
        >
          <input
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border rounded-md p-2"
            placeholder="フィルター"
            value={searchParams.get('filter') || ''}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {invoices
            .filter((invoice) => {
              const filter = searchParams.get('filter');
              if (!filter) return true;
              const name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((invoice) => (
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
