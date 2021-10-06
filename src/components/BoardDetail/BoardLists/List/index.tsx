import { Droppable } from 'react-beautiful-dnd';
import { MdAdd, MdClose } from 'react-icons/md';
import { CardInList, List } from '../../../../features/list/listModel';
import { AddMoreButton } from '../BoardLists.styles';
import Card from '../Card';
import ListTitle from '../ListTitle';
import { Wrapper } from './List.styles';
import { Collapse } from '@material-ui/core';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { toast } from 'react-toastify';
import { addNewCard } from '../../../../api/cardAPI';
import { add_card_success } from '../../../../features/list/listSlice';
import checkMember from '../../../../helpers/checkMember';

interface Props {
  list: List;
}
const ListFc = ({ list }: Props) => {
  const [openAddCard, setOpenAddCard] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.boardDetail);
  const { user } = useAppSelector((state) => state.auth);

  const handleAddCard = async () => {
    if (!title.length) {
      toast.error('Card title cannot be empty!');
      return;
    }
    const { data, error } = await addNewCard({ title, listId: list._id });
    if (!error) {
      dispatch(
        add_card_success({ listId: list._id, card: data as CardInList })
      );
      setTitle('');
      setOpenAddCard(false);
    } else {
      toast.error(error);
    }
  };

  return (
    <Wrapper>
      <ListTitle listId={list._id} title={list.title} />
      <Droppable droppableId={list._id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ marginTop: '12px' }}
          >
            {list.cards.map((card, index) => (
              <Card index={index} card={card} key={card._id} />
            ))}
            <div className='placeholder'>{provided.placeholder}</div>
          </div>
        )}
      </Droppable>

      {checkMember(board.members, user._id) && (
        <>
          <Collapse in={openAddCard}>
            <div className='add-wrapper'>
              <textarea
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Enter the title of the card...'
              />
              <div className='btn-wrapper'>
                <button className='add-btn' onClick={handleAddCard}>
                  Add card
                </button>
                <MdClose
                  onClick={() => {
                    setOpenAddCard(false);
                  }}
                />
              </div>
            </div>
          </Collapse>
          <Collapse in={!openAddCard}>
            <AddMoreButton
              onClick={() => {
                setOpenAddCard(true);
              }}
            >
              <span>
                {list.cards?.length > 0 ? 'Add another card' : 'Add a new card'}
              </span>
              <MdAdd />
            </AddMoreButton>
          </Collapse>
        </>
      )}
    </Wrapper>
  );
};

export default ListFc;
