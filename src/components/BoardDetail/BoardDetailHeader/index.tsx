import { useEffect, useRef, useState } from 'react';
import { MdAdd, MdLock, MdMoreHoriz } from 'react-icons/md';
import { updateBoard } from '../../../api/boardAPI';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Board } from '../../../features/board/boardModel';
import { fetch_success } from '../../../features/boardDetail/boardDetailSlice';
import { AddButton, Avatar } from '../../../shared/Common';
import MemberSelector from '../../../shared/MemberSelector';
import Visibility from '../../../shared/VisibilitySelector';
import BoardMenu from '../BoardMenu';
import { Button, Wrapper } from './BoardDetailHeader.styles';
import { toast } from 'react-toastify';
import checkMember from '../../../helpers/checkMember';
import { update_board } from '../../../features/board/boardSlice';
import ReactTooltip from 'react-tooltip';

interface Props {
  boardId: string;
}

const BoardDetailHeader = ({ boardId }: Props) => {
  const { board, loading } = useAppSelector((state) => state.boardDetail);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [openVisibility, setOpenVisibility] = useState<boolean>(false);
  const [openMemberSelector, setOpenMemberSelector] = useState<boolean>(false);
  const [visibility, setVisibility] = useState<string>(board.visibility);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [openBoardMenu, setOpenBoardMenu] = useState<boolean>(false);

  useEffect(() => {
    if (board.visibility) {
      setVisibility(board.visibility);
    }
  }, [board]);

  useEffect(() => {
    if (board._id && board.visibility !== visibility) {
      const updateVisibility = async () => {
        const { data, error } = await updateBoard(boardId, { visibility });
        if (!error) {
          dispatch(fetch_success(data as Board));
          dispatch(update_board({ boardId: board._id, board: data as Board }));
        } else {
          setVisibility(board.visibility);
          toast.error(error);
        }
      };
      updateVisibility();
    }
  }, [visibility]);

  if (loading) return null;

  return (
    <Wrapper>
      <ReactTooltip effect='solid' />
      <BoardMenu
        board={board}
        onClose={() => {
          setOpenBoardMenu(false);
        }}
        open={openBoardMenu}
      />

      <div className='visibility'>
        <Button onClick={() => setOpenVisibility((x) => !x)}>
          <MdLock />
          <span>{visibility}</span>
        </Button>
        {openVisibility && (
          <Visibility
            open={openVisibility}
            setVisibility={setVisibility}
            onClose={() => {
              setOpenVisibility(false);
            }}
            style={{ top: '45px' }}
            visibility={visibility}
          />
        )}
      </div>
      <div className='members-wrapper'>
        {board.members?.map((m) => (
          <Avatar
            data-tip={m.user.username}
            className='avatar'
            width='32px'
            src={
              m.user.avatar ||
              'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'
            }
            key={m.user._id}
          />
        ))}
        <div className='mem-selector'>
          {checkMember(board.members, user._id) && (
            <AddButton
              style={{ width: '32px' }}
              onClick={() => {
                setOpenMemberSelector(true);
                setOpenVisibility(false);
              }}
              ref={buttonRef}
            >
              <MdAdd />
            </AddButton>
          )}
          {openMemberSelector && (
            <MemberSelector
              onClose={() => {
                setOpenMemberSelector(false);
              }}
              sub_title='Search users you want to invite to'
              title='Invite to board'
              style={{ top: '40px' }}
              buttonRef={buttonRef}
              boardId={boardId}
            />
          )}
        </div>
      </div>
      <Button onClick={() => setOpenBoardMenu((x) => !x)}>
        <MdMoreHoriz />
        <span>Show menu</span>
      </Button>
    </Wrapper>
  );
};

export default BoardDetailHeader;
