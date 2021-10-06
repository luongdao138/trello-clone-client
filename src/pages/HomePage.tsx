import { Wrapper, BoardWrapper, SpinnerWrapper } from './styles/Home.styles';
import { IoMdAdd } from 'react-icons/io';
import Board from '../components/Home/Board';
import { useEffect, useState } from 'react';
import Modal from '../shared/Modal';
import AddBoard from '../components/Home/AddBoard';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getAllBoards } from '../api/boardAPI';
import {
  fetch_fail,
  fetch_request,
  fetch_success,
} from '../features/board/boardSlice';
import Spinner from '../shared/Spinner';
import { HiOutlineCode } from 'react-icons/hi';
import JoinBoard from '../components/Home/JoinBoard';

const HomePage = () => {
  const [openAddBoardForm, setOpenAddBoardForm] = useState<boolean>(false);
  const [openJoinBoardForm, setOpenJoinBoardForm] = useState<boolean>(false);
  const { boards, error, loading } = useAppSelector((state) => state.board);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getUserBoards = async () => {
      dispatch(fetch_request());
      const { data, error } = await getAllBoards();
      if (error) {
        console.log(error);
        dispatch(fetch_fail(error));
      } else {
        dispatch(fetch_success(data));
      }
    };

    if (boards === null) {
      getUserBoards();
    }
  }, []);

  return (
    <Wrapper>
      <Modal
        closeBackdrop={false}
        open={openAddBoardForm}
        onClose={() => {
          setOpenAddBoardForm(false);
        }}
        style={{ top: '100px' }}
      >
        <AddBoard
          onClose={() => {
            setOpenAddBoardForm(false);
          }}
        />
      </Modal>
      <Modal
        closeBackdrop={false}
        open={openJoinBoardForm}
        onClose={() => {
          setOpenJoinBoardForm(false);
        }}
        style={{ top: '100px' }}
      >
        <JoinBoard
          onClose={() => {
            setOpenJoinBoardForm(false);
          }}
        />
      </Modal>
      <div className='btn-wrapper'>
        <span>Add Boards</span>
        <div className='bottom'>
          <button className='add-btn' onClick={() => setOpenAddBoardForm(true)}>
            <IoMdAdd /> Add
          </button>
          <button
            className='join-btn'
            onClick={() => setOpenJoinBoardForm(true)}
          >
            <HiOutlineCode />
            Join board with a code
          </button>
        </div>
      </div>
      {loading ? (
        <SpinnerWrapper>
          <Spinner width='40px' />
        </SpinnerWrapper>
      ) : (
        <BoardWrapper>
          {boards?.map((board) => (
            <Board
              title={board.title}
              key={board._id}
              _id={board._id}
              cover_photo={board.cover_photo}
              people={board.members}
            />
          ))}
        </BoardWrapper>
      )}
    </Wrapper>
  );
};

export default HomePage;
