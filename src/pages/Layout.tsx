import Header from '../components/Header';
import { ReactNode } from 'react';
import useFetchUser from '../hooks/useFetchUser';
import { useLocation } from 'react-router';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { loading } = useFetchUser();
  const location = useLocation();
  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ marginTop: '70px' }}>
      <Header isBoardDetail={location.pathname.includes('/board')} />
      {children}
    </div>
  );
};

export default Layout;
