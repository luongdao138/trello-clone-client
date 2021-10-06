import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleBoard } from '../api/boardAPI';
import { getAllListsOfBoard } from '../api/listAPI';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import BoardDetailHeader from '../components/BoardDetail/BoardDetailHeader';
import BoardLists from '../components/BoardDetail/BoardLists';
import { Board } from '../features/board/boardModel';
import {
  fetch_fail,
  fetch_success,
} from '../features/boardDetail/boardDetailSlice';
import { List } from '../features/list/listModel';
import {
  fetch_fail as fetchListsFail,
  fetch_success as fetchListsSuccess,
} from '../features/list/listSlice';
import { Wrapper } from './styles/BoardDetail.styles';
import { SpinnerWrapper } from './styles/Home.styles';
import Spinner from '../shared/Spinner';
import BoardListProvider from '../context/BoardListContext';

const BoardDetailPage = () => {
  const { boardId } = useParams<{ boardId: string }>();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.list);

  useEffect(() => {
    const getBoardDetail = async () => {
      const { data, error } = await getSingleBoard(boardId);
      if (!error) {
        dispatch(fetch_success(data as Board));
      } else {
        dispatch(fetch_fail(error));
        console.log(error);
      }
    };

    getBoardDetail();
  }, [boardId]);

  useEffect(() => {
    const getBoardLists = async () => {
      const { data, error } = await getAllListsOfBoard(boardId);
      if (!error) {
        dispatch(fetchListsSuccess(data as List[]));
      } else {
        console.log(error);
        dispatch(fetchListsFail(error));
      }
    };

    getBoardLists();
  }, [boardId]);

  return (
    <Wrapper>
      <BoardDetailHeader boardId={boardId} />
      {loading ? (
        <SpinnerWrapper>
          <Spinner width='40px' />
        </SpinnerWrapper>
      ) : (
        <BoardListProvider>
          <BoardLists boardId={boardId} />
        </BoardListProvider>
      )}
    </Wrapper>
  );
};

export default BoardDetailPage;
