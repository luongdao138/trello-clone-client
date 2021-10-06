import { CardDetail } from '../features/card/cardModel';
import axios from 'axios';
import { CardInList } from '../features/list/listModel';
import axiosInstance from './axios';

export const addNewCard = async (body: any) => {
  try {
    const { data } = await axiosInstance.post<{ card: CardInList }>(
      `/cards`,
      body
    );
    return { data: data.card, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: [], error: error.response?.data.msg };
    }
    return { data: [], error: 'Oops, something went wrong!' };
  }
};

export const getSingleCard = async (cardId: string) => {
  try {
    const { data } = await axiosInstance.get<{ card: CardDetail }>(
      `/cards/${cardId}`
    );
    return { data: data.card, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: [], error: error.response?.data.msg };
    }
    return { data: [], error: 'Oops, something went wrong!' };
  }
};

export const updateCard = async (cardId: string, body: any) => {
  try {
    const { data } = await axiosInstance.patch<{ card: CardDetail }>(
      `/cards/${cardId}`,
      body
    );
    return { data: data.card, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: [], error: error.response?.data.msg };
    }
    return { data: [], error: 'Oops, something went wrong!' };
  }
};
