import { CardDetail } from '../features/card/cardModel';
import axios from 'axios';
import { CardInList } from '../features/list/listModel';
import axiosInstance from './axios';
import { Comment } from '../features/comments/commentModel';

export const addNewComment = async (body: any) => {
  try {
    const { data } = await axiosInstance.post<{ comment: Comment }>(
      `/comments`,
      body
    );
    return { data: data.comment, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: [], error: error.response?.data.msg };
    }
    return { data: [], error: 'Oops, something went wrong!' };
  }
};

export const getAllCommentsOfCard = async (cardId: string) => {
  try {
    const { data } = await axiosInstance.get<{ comments: Comment[] }>(
      `/comments`,
      {
        params: {
          cardId,
        },
      }
    );
    return { data: data.comments, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: [], error: error.response?.data.msg };
    }
    return { data: [], error: 'Oops, something went wrong!' };
  }
};

export const updateComment = async (commentId: string, body: any) => {
  try {
    const { data } = await axiosInstance.patch<{ comment: Comment }>(
      `/comments/${commentId}`,
      body
    );
    return { data: data.comment, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: [], error: error.response?.data.msg };
    }
    return { data: [], error: 'Oops, something went wrong!' };
  }
};

export const deleteComment = async (commentId: string) => {
  try {
    const { data } = await axiosInstance.delete<{ msg: string }>(
      `/comments/${commentId}`
    );
    return { data: data.msg, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: [], error: error.response?.data.msg };
    }
    return { data: [], error: 'Oops, something went wrong!' };
  }
};
