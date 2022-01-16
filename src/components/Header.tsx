import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to="/">Home</Link> |<span> </span>
      <Link to="/invoices">Invoices</Link> |<span> </span>
      <Link to="/expenses">Expenses</Link>
    </nav>
  );
};
