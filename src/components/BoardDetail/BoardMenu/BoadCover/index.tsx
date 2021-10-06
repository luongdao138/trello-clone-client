import { useEffect, useState } from 'react';
import { MdEdit, MdImage } from 'react-icons/md';
import { updateBoard } from '../../../../api/boardAPI';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import ImageSelector from '../../../../shared/ImageSelector';
import { Label } from '../BoardMenu.styles';
import { BoardCoverWrapper } from './BoardCover.style';
import { toast } from 'react-toastify';
import { fetch_success } from '../../../../features/boardDetail/boardDetailSlice';
import { Board } from '../../../../features/board/boardModel';
import { update_board } from '../../../../features/board/boardSlice';
import checkMember from '../../../../helpers/checkMember';

interface Props {
  boardId: string;
  cover_photo: string;
}
const BoardCover = ({ cover_photo, boardId }: Props) => {
  const [cover, setCover] = useState<string | null>(null);
  const [openImageSelector, setOpenImageSelector] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const { board } = useAppSelector((state) => state.boardDetail);
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (cover) {
      const updateCover = async () => {
        const { data, error } = await updateBoard(boardId, {
          cover_photo: cover,
        });
        if (!error) {
          dispatch(fetch_success(data as Board));
          dispatch(update_board({ boardId, board: data as Board }));
        } else {
          toast.error(error);
        }
      };

      updateCover();
    }
  }, [cover]);

  return (
    <BoardCoverWrapper>
      <div className='top'>
        <Label>
          <MdImage />
          <span>Cover</span>
        </Label>
        {checkMember(board.members, user._id) && (
          <button className='edit' onClick={() => setOpenImageSelector(true)}>
            <MdEdit />
            <span>Edit</span>
          </button>
        )}
        {openImageSelector && (
          <ImageSelector
            closeClickOutSide={true}
            onClose={() => setOpenImageSelector(false)}
            setCover={setCover}
            open={openImageSelector}
            style={{ left: 0, top: 30 }}
          />
        )}
      </div>
      {cover_photo && <img className='cover-photo' src={cover_photo} />}
    </BoardCoverWrapper>
  );
};

export default BoardCover;
