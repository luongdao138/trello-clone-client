import Header from '../components/Header';
import { ReactNode } from 'react';
import useFetchUser from '../hooks/useFetchUser';
import { useLocation } from 'react-router';
import { SpinnerWrapper } from './styles/Home.styles';
import Spinner from '../shared/Spinner';
interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { loading } = useFetchUser();
  const location = useLocation();
  if (loading)
    return (
      <SpinnerWrapper>
        <Spinner width='36px' />
      </SpinnerWrapper>
    );

  return (
    <div style={{ marginTop: '70px' }}>
      <Header isBoardDetail={location.pathname.includes('/board')} />
      {children}
    </div>
  );
};

export default Layout;
