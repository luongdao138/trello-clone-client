import { useState } from 'react';
import { joinBoardByCode } from '../../../api/boardAPI';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { JoinBoardWrapper } from './JoinBoard.styles';
import { toast } from 'react-toastify';
import { add_success, update_board } from '../../../features/board/boardSlice';
import { Board } from '../../../features/board/boardModel';

interface Props {
  onClose: () => void;
}

const JoinBoard = ({ onClose }: Props) => {
  const [code, setCode] = useState<string>('');
  const { boards } = useAppSelector((state) => state.board);
  const dispatch = useAppDispatch();

  const handleJoinByCode = async (e: any) => {
    e.preventDefault();
    if (!code || !code.length) {
      return;
    }
    const { data, error } = await joinBoardByCode(code);
    if (!error) {
      const isExist = boards?.find((x) => x._id === data._id);
      if (isExist) {
        dispatch(update_board({ board: data, boardId: data._id }));
      } else {
        dispatch(add_success(data as Board));
      }
      onClose();
    } else {
      toast.error(error);
    }
  };

  return (
    <JoinBoardWrapper>
      <p className='title'>Join board with a code</p>
      <form onSubmit={handleJoinByCode}>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          autoFocus
          type='text'
          placeholder='Enter code...'
        />
      </form>
      <div className='btn-wrapper'>
        <button className='cancel' onClick={onClose}>
          Cancel
        </button>
        <button className='join' onClick={handleJoinByCode}>
          Join
        </button>
      </div>
    </JoinBoardWrapper>
  );
};

export default JoinBoard;
