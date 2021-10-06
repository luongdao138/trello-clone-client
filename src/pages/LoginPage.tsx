import { Content, Wrapper } from './styles/Login.styles';
import bg from '../assets/bg.jpg';
import { Link, useHistory } from 'react-router-dom';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import React, { useState } from 'react';
import useSignin from '../hooks/useSignin';
import axiosInstance from '../api/axios';
import axios from 'axios';
import { User } from '../features/auth/authModel';

interface LoginUser {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [user, setUser] = useState<LoginUser>({ email: '', password: '' });
  const { loading } = useSignin();
  const history = useHistory();
  const [error, setError] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post<{ user: User; token: string }>(
        '/auth/login',
        user
      );
      console.log(data);

      localStorage.setItem('trello_token', data.token);
      history.push('/');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.msg);
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Wrapper style={{ backgroundImage: `url(${bg})` }}>
      <Content>
        <div className='login-wrapper'>
          <p className='main-title'>Welcome to trello clone</p>
          <Link to='/' className='sub-title'>
            Not have an account?
          </Link>
          {error && <p className='error-message'>{error}</p>}
          <form onSubmit={handleLogin}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Email'
                name='email'
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <button className='btn'> Sign in</button>
          </form>
          <div className='actions'>
            <div className='remember'>
              <MdCheckBox />
              <span>Remember me</span>
            </div>
            <Link to='/'>Forgot Password</Link>
          </div>
          <p className='other-options'>- Or Sign In With -</p>
          <div className='btn-wrapper'>
            <button>Facebook</button>
            <button>Twitter</button>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default LoginPage;
