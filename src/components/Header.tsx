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
    <div className="flex h-16 w-full bg-indigo-400 border-b px-2 gap-8">
      <h1 className="text-3xl flex items-center">Bookkeeper</h1>
      <nav className="flex items-center gap-4">
        {menuItems.map(({ title, to }, i) => {
          return (
            <span key={i}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? 'font-bold text-amber-300' : 'text-white'
                }
              >
                {title}
              </NavLink>
            </span>
          );
        })}
      </nav>
    </div>
  );
};
