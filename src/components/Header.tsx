import { NavLink } from 'react-router-dom';

const menuItems = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/invoices',
    title: 'Invoices',
  },
  {
    to: '/expenses',
    title: 'Expenses',
  },
];

export const Header = () => {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        {menuItems.map(({ title, to }, i) => {
          return (
            <span key={i}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? 'font-bold text-gray-900' : 'text-gray-600'
                }
              >
                {title}
              </NavLink>
              {' | '}
            </span>
          );
        })}
      </nav>
    </div>
  );
};
