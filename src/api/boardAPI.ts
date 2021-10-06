import axios from 'axios';
import { Board } from '../features/board/boardModel';
import axiosInstance from './axios';

export const getAllBoards = async () => {
  try {
    const { data } = await axiosInstance.get<{ boards: Board[] }>('/boards');
    return { data: data.boards, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: [], error: error.response?.data.msg };
    }
    return { data: [], error: 'Oops, something went wrong!' };
  }
};

type NewBoard = {
  visibility: string;
  title: string;
  cover_photo: string;
};
export const addBoard = async (newBoard: NewBoard) => {
  try {
    const { data } = await axiosInstance.post<{ board: Board }>(
      '/boards',
      newBoard
    );
    return { data: data.board, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: [], error: error.response?.data.msg };
    }
    return { data: [], error: 'Oops, something went wrong!' };
  }
};

export const getSingleBoard = async (boardId: string) => {
  try {
    const { data } = await axiosInstance.get<{ board: Board }>(
      `/boards/${boardId}`
    );
    return { data: data.board, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: [], error: error.response?.data.msg };
    }
    return { data: [], error: 'Oops, something went wrong!' };
  }
};

export const updateBoard = async (boardId: string, updatedData: any) => {
  try {
    const { data } = await axiosInstance.patch<{ board: Board }>(
      `/boards/${boardId}`,
      updatedData
    );
    return { data: data.board, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: [], error: error.response?.data.msg };
    }
    return { data: [], error: 'Oops, something went wrong!' };
  }
};

export const joinBoardByCode = async (code: string) => {
  try {
    const { data } = await axiosInstance.post<{ board: Board }>(
      `/boards/joinByCode`,
      { code }
    );
    return { data: data.board, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: {} as Board, error: error.response?.data.msg };
    }
    return { data: {} as Board, error: 'Oops, something went wrong!' };
  }
};
