import { Content, Wrapper } from './styles/Login.styles';
import bg from '../assets/bg.jpg';
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import useSignin from '../hooks/useSignin';
import axiosInstance from '../api/axios';
import axios from 'axios';
import { User } from '../features/auth/authModel';

interface RegisterUser {
  email: string;
  password: string;
  username: string;
}

const SignupPage = () => {
  const [user, setUser] = useState<RegisterUser>({
    email: '',
    password: '',
    username: '',
  });
  const { loading } = useSignin();
  const history = useHistory();
  const [error, setError] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post<{ user: User; token: string }>(
        '/auth/register',
        user
      );

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
          <Link to='/login' className='sub-title'>
            Have an account
          </Link>
          {error && <p className='error-message'>{error}</p>}
          <form onSubmit={handleRegister}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Username'
                name='username'
                value={user.username}
                onChange={handleChange}
              />
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
            <button className='btn'>Register</button>
          </form>

          <p className='other-options' style={{ marginTop: '15px' }}>
            - Or Register With -
          </p>
          <div className='btn-wrapper'>
            <button>Facebook</button>
            <button>Twitter</button>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default SignupPage;
