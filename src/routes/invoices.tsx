import {
  NavLink,
  NavLinkProps,
  Outlet,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { getInvoices } from 'src/data/invoices';

export const Invoices = () => {
  const invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <Layout>
      {/*
        https://stackoverflow.com/questions/65976223/how-to-use-calc-in-tailwind-css

        - 4rem here is the height of header.
        - 100vh is screen height of browser pages.
        - calc(100vh - 4rem) is rest of screen height except for header height.
        - [***] ( coming from "h-[calc(100vh-4rem)]" ) is a one of features in tailwind, named "jit".
      */}
      <div className="flex h-[calc(100vh-4rem)]">
        <nav className="border-r p-4 border-black">
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
            .map((invoice) => {
              const commonClassNames = 'block my-4 mx-0';
              return (
                <QueryNavLink
                  to={`/invoices/${invoice.number}`}
                  key={invoice.number}
                  className={({ isActive }) =>
                    isActive
                      ? `text-red-500 ${commonClassNames}`
                      : `text-blue-500 ${commonClassNames}`
                  }
                >
                  {invoice.name}
                </QueryNavLink>
              );
            })}
        </nav>
        <Outlet />
      </div>
    </Layout>
  );
};

const QueryNavLink = ({ children, to, ...props }: NavLinkProps) => {
  const location = useLocation();

  return (
    <NavLink to={to + location.search} {...props}>
      {children}
    </NavLink>
  );
};
