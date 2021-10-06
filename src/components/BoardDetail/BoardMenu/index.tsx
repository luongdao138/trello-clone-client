import { FaUserCircle } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { Board, Member } from '../../../features/board/boardModel';
import { Avatar } from '../../../shared/Common';
import BoardDescription from '../../../shared/EditDescription';
import { Label, Wrapper } from './BoardMenu.styles';
import BoardMember from './BoardMember';
import moment from 'moment';
import { updateBoard } from '../../../api/boardAPI';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetch_success } from '../../../features/boardDetail/boardDetailSlice';
import checkMember from '../../../helpers/checkMember';
import BoardTitle from '../BoardTitle';
import { useState } from 'react';
import { toast } from 'react-toastify';
import BoardCover from './BoadCover';
import { update_board } from '../../../features/board/boardSlice';

interface Props {
  open: boolean;
  onClose: () => void;
  board: Board;
}

const findAdmin = (members: Member[]): Member | undefined => {
  return members?.find((x) => x.role === 'ADMIN');
};

const BoardMenu = ({ open, onClose, board }: Props) => {
  const dispatch = useAppDispatch();
  const [mode, setMode] = useState<'EDIT' | 'VIEW'>('VIEW');
  const { user } = useAppSelector((state) => state.auth);
  // const { board } = useAppSelector(state => state.boardDetail)
  const handleClose = () => {
    onClose();
  };

  const handleUpdateDescription = async (des: string) => {
    const { data, error } = await updateBoard(board._id, { description: des });
    if (!error) {
      dispatch(fetch_success(data as Board));
    } else {
      console.log(error);
    }
  };

  const handleRemoveMember = async (memId: string) => {
    const newMembers = board.members
      .filter((x) => x.user._id !== memId)
      .map((x) => ({
        user: x.user._id,
        role: x.role,
      }));
    const { data, error } = await updateBoard(board._id, {
      members: newMembers,
    });
    if (!error) {
      dispatch(fetch_success(data as Board));
      dispatch(update_board({ boardId: board._id, board: data as Board }));
    } else {
      console.log(error);
    }
  };

  const updateBoardTitle = async (title: string) => {
    const { data, error } = await updateBoard(board._id, { title });
    if (!error) {
      dispatch(fetch_success(data as Board));
      dispatch(update_board({ boardId: board._id, board: data as Board }));
    } else {
      toast.error(error);
    }
  };

  return (
    <Wrapper open={open}>
      {board._id && (
        <>
          {' '}
          <div className='header'>
            <div className='top'>
              <BoardTitle
                canEdit={checkMember(board.members, user._id)}
                mode={mode}
                setMode={setMode}
                title={board.title}
                callback={updateBoardTitle}
              />
              <p className='code'>Code: {board.code}</p>
            </div>
            <MdClose onClick={handleClose} />
          </div>
          <div className='divider'></div>
          <div className='admin'>
            <Label>
              <FaUserCircle />
              <span>Made by</span>
            </Label>
            <div className='bottom'>
              <Avatar
                width='36px'
                src={
                  findAdmin(board.members)?.user.avatar ||
                  'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'
                }
              />
              <div className='info'>
                <span className='admin_name'>
                  {findAdmin(board.members)?.user.username}{' '}
                </span>
                <span className='date'>
                  {`on ${moment(board.createdAt).format('D MMMM, YYYY')}`}
                </span>
              </div>
            </div>
          </div>
          <BoardCover cover_photo={board.cover_photo} boardId={board._id} />
          <BoardDescription
            description={board.description || ''}
            callback={handleUpdateDescription}
            canEdit={checkMember(board.members, user._id)}
          />
          <BoardMember
            removeMember={handleRemoveMember}
            members={board.members}
          />
        </>
      )}
    </Wrapper>
  );
};

export default BoardMenu;
