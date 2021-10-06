import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { User } from '../features/auth/authModel';
import { loggin_success, logout } from '../features/auth/authSlice';
import axiosClient from 'axios';

const useFetchUser = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get<{ user: User }>('/users');
        dispatch(loggin_success(res.data.user));
        setLoading(false);
      } catch (error) {
        if (axiosClient.isAxiosError(error)) {
          if (error.response?.status === 401) {
            dispatch(logout());
          }
        }
      }
    };

    if (!user._id) {
      getUser();
    } else {
      setLoading(false);
    }
  }, []);
  return { loading };
};

export default useFetchUser;
