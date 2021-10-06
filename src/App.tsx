import GlobalStyle from './GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BoardDetailPage from './pages/BoardDetailPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchPage from './pages/SearchPage';
import useEventListener from './hooks/useEventListener';
import { useState } from 'react';
import MobilePage from './pages/MobilePage';
import RegisterPage from './pages/RegisterPage';

const DesktopScreen = (
  <Router>
    <ToastContainer theme='colored' autoClose={3000} />
    <GlobalStyle />
    <Switch>
      <Route path='/' exact>
        <Layout>
          <HomePage />
        </Layout>
      </Route>
      <Route path='/board/:boardId' exact>
        <Layout>
          <BoardDetailPage />
        </Layout>
      </Route>
      <Route path='/search' exact>
        <Layout>
          <SearchPage />
        </Layout>
      </Route>
      <Route path='/login' exact>
        <LoginPage />
      </Route>
      <Route path='/register' exact>
        <RegisterPage />
      </Route>
    </Switch>
  </Router>
);

const MobileScreen = (
  <Router>
    <GlobalStyle />
    <Layout>
      <MobilePage />
    </Layout>
  </Router>
);

const renderScreen = (screen: 'MOBILE' | 'DESKTOP') => {
  if (screen === 'DESKTOP') return DesktopScreen;
  else return MobileScreen;
};

const App = () => {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>(
    window.innerWidth > 800 ? 'DESKTOP' : 'MOBILE'
  );
  useEventListener('resize', window, (e: any) => {
    if (window.innerWidth < 800) {
      setScreen('MOBILE');
    } else {
      setScreen('DESKTOP');
    }
  });

  return renderScreen(screen);
};

export default App;
