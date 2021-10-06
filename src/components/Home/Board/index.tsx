import React from 'react';
import { useHistory } from 'react-router';
import { useAppDispatch } from '../../../app/hooks';
import { Member } from '../../../features/board/boardModel';
import { fetch_request } from '../../../features/list/listSlice';
import { fetch_request as fetch_board_request } from '../../../features/boardDetail/boardDetailSlice';
import { Wrapper } from './Board.styles';
import ReactTooltip from 'react-tooltip';

interface Props {
  _id: string;
  cover_photo: string;
  title: string;
  people: Member[];
}

const Board = ({ _id, cover_photo, title, people }: Props) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  return (
    <Wrapper
      onClick={() => {
        dispatch(fetch_board_request());
        dispatch(fetch_request());
        setTimeout(() => {
          history.push(`/board/${_id}`);
        }, 200);
      }}
    >
      <ReactTooltip effect='solid' />
      <img src={cover_photo} alt='' className='cover' />
      <p className='title'>{title}</p>
      <div className='people-wrapper'>
        {people.slice(0, 3).map((m) => (
          <img
            data-tip={m.user.username}
            className='avatar'
            key={m.user._id}
            src={
              m.user.avatar ||
              'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'
            }
          />
        ))}
        {people.length > 3 && (
          <span className='more'>+ {people.length - 3} others</span>
        )}
      </div>
    </Wrapper>
  );
};

export default Board;
