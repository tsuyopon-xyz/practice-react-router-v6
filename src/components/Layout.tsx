import { FC } from 'react';
import { Header } from 'src/components/Header';

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
