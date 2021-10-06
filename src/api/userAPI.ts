import { Item } from '../shared/MemberSelector';
import axios from 'axios';
import axiosInstance from './axios';

export const searchNewUsers = async (searchTerm: string, boardId: string) => {
  try {
    const { data } = await axiosInstance.get<{ users: Item[] }>(
      '/users/search',
      {
        params: { searchTerm, boardId },
      }
    );
    return { data: data.users, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: [], error: error.response?.data.msg };
    }
    return { data: [], error: 'Oops, something went wrong!' };
  }
};
