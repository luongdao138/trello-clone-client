import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from '../api/axios';

const useSignin = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const history = useHistory();
  useEffect(() => {
    const getUser = async () => {
      try {
        await axios.get('/users');
        setLoading(false);
        history.push('/');
      } catch (error) {
        setLoading(false);
      }
    };

    getUser();
  }, [history]);
  return { loading };
};

export default useSignin;
