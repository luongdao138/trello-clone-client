import axios from 'axios';
import { List } from '../features/list/listModel';
import axiosInstance from './axios';

export const getAllListsOfBoard = async (boardId: string) => {
  try {
    const { data } = await axiosInstance.get<{ lists: List[] }>(
      `/lists/${boardId}`
    );
    return { data: data.lists, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: [], error: error.response?.data.msg };
    }
    return { data: [], error: 'Oops, something went wrong!' };
  }
};

export const addNewList = async (body: any) => {
  try {
    const { data } = await axiosInstance.post<{ list: List }>(`/lists`, body);
    return { data: data.list, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: [], error: error.response?.data.msg };
    }
    return { data: [], error: 'Oops, something went wrong!' };
  }
};

export const handleDragAndDrop = async (body: any) => {
  try {
    const { data } = await axiosInstance.patch<{ msg: string }>(
      `/lists/dragAndDrop`,
      body
    );
    return { data: data.msg, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: [], error: error.response?.data.msg };
    }
    return { data: [], error: 'Oops, something went wrong!' };
  }
};

export const handleUpdateList = async (listId: string, body: any) => {
  try {
    const { data } = await axiosInstance.patch<{ list: List }>(
      `/lists/${listId}`,
      body
    );
    return { data: data.list, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: [], error: error.response?.data.msg };
    }
    return { data: [], error: 'Oops, something went wrong!' };
  }
};
