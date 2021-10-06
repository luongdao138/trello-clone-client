import { Board } from './../board/boardModel';
export interface StateSlice {
  board: Board;
  loading: boolean;
  error: string | null;
}
