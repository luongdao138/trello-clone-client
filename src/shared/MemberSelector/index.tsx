import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MdClose, MdSearch } from 'react-icons/md';
import { updateBoard } from '../../api/boardAPI';
import { searchNewUsers } from '../../api/userAPI';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Board } from '../../features/board/boardModel';
import { fetch_success } from '../../features/boardDetail/boardDetailSlice';
import { fetch_success as fetch_card_success } from '../../features/card/cardSlice';
import { update_card } from '../../features/list/listSlice';
import useEventListener from '../../hooks/useEventListener';
import { Avatar } from '../Common';
import { Person, Wrapper } from './MemberSelector.styles';
import SearchResult from './SearchResult';
import { toast } from 'react-toastify';
import { updateCard } from '../../api/cardAPI';
import { CardDetail } from '../../features/card/cardModel';
import { CardInList } from '../../features/list/listModel';
import { update_board } from '../../features/board/boardSlice';

interface Props {
  onClose: () => void;
  title: string;
  sub_title: string;
  style?: any;
  buttonRef: React.MutableRefObject<HTMLButtonElement | null>;
  boardId?: string;
  card?: CardInList | CardDetail;
}
export interface Item {
  _id: string;
  username: string;
  avatar: string;
}

const MemberSelector = ({
  onClose,
  title,
  sub_title,
  style,
  buttonRef,
  boardId,
  card,
}: Props) => {
  const handleClose = () => {
    onClose();
  };
  const ref = useRef<HTMLDivElement | null>(null);
  const [people, setPeople] = useState<Item[]>([]);
  const [searchResult, setSearchResult] = useState<Item[]>([]);
  const [temp, setTemp] = useState<string>('');
  const [openSearchResult, setOpenSearchResult] = useState<boolean>(false);
  const { board } = useAppSelector((state) => state.boardDetail);
  // const { card } = useAppSelector((state) => state.card);
  const dispatch = useAppDispatch();

  const searchUsers = useCallback(async (searchTerm: string, ids: string[]) => {
    if (!searchTerm || !searchTerm.length) {
      setOpenSearchResult(false);
      return;
    }

    if (boardId) {
      const { data, error } = await searchNewUsers(searchTerm, boardId);
      if (!error) {
        const newData = data.filter((p) => {
          return ids.includes(p._id) === false;
        });
        setSearchResult(newData as Item[]);
        setOpenSearchResult(true);
      }
    } else {
      if (card) {
        const data = board.members;
        const cardIds = card.members.map((x) => x._id);
        const newData = data.filter((p) => {
          return (
            ids.concat(cardIds).includes(p.user._id) === false &&
            p.user.username.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
        setSearchResult(newData.map((x) => x.user) as Item[]);
        setOpenSearchResult(true);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleInviteMembers = async () => {
    if (!people.length) return;
    if (boardId) {
      const updateMembers = async () => {
        const newMembers = board.members
          .map((x) => ({ user: x.user._id, role: x.role }))
          .concat(
            people.map((x) => ({
              user: x._id,
              role: 'MEMBER',
            }))
          );
        const { data, error } = await updateBoard(boardId, {
          members: newMembers,
        });
        if (!error) {
          dispatch(fetch_success(data as Board));
          dispatch(update_board({ boardId: board._id, board: data as Board }));
          onClose();
        } else {
          toast.error(error);
        }
      };
      updateMembers();
    } else {
      if (card) {
        const newMembers = card.members
          .map((x) => x._id)
          .concat(people.map((x) => x._id));
        const { data, error } = await updateCard(card._id, {
          members: newMembers,
        });
        if (!error) {
          dispatch(fetch_card_success(data as CardDetail));
          dispatch(update_card({ card: data, cardId: card._id }));
          onClose();
        } else {
          toast.error(error);
        }
      }
    }
  };

  useEventListener('mousedown', window, (e: any) => {
    if (
      !ref.current?.contains(e.target) &&
      !buttonRef.current?.contains(e.target)
    ) {
      onClose();
    }
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      const ids = people.map((p) => p._id);
      searchUsers(temp, ids);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [temp, searchUsers]);

  return (
    <Wrapper style={style} ref={ref}>
      <button className='close' onClick={handleClose}>
        <MdClose />
      </button>
      <p className='title'>{title}</p>
      <p className='sub-title'>{sub_title}</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='User...'
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
        />
        <button>
          <MdSearch />
        </button>
        {openSearchResult && temp.length > 0 && (
          <SearchResult
            setPeople={setPeople}
            onClose={() => {
              setOpenSearchResult(false);
            }}
            result={searchResult}
          />
        )}
      </form>
      <div className='mems-wrapper'>
        {people.length > 0 &&
          people.map((p) => {
            return (
              <Person key={p._id}>
                <Avatar
                  width='32px'
                  src={
                    p.avatar ||
                    'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'
                  }
                />
                <span className='name'>{p.username}</span>
              </Person>
            );
          })}
      </div>
      <div className='btn-wrapper'>
        <button className='invite-btn' onClick={handleInviteMembers}>
          Invite
        </button>
      </div>
    </Wrapper>
  );
};

export default MemberSelector;
