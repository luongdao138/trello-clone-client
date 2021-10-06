import GlobalStyle from './GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BoardDetailPage from './pages/BoardDetailPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchPage from './pages/SearchPage';
const App = () => {
  return (
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
      </Switch>
    </Router>
  );
};

export default App;
