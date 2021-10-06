import { AddMoreButton, Wrapper } from './BoardLists.styles';
import List from './List';
import { MdAdd, MdClose } from 'react-icons/md';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useState } from 'react';
import { Collapse } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addNewList, handleDragAndDrop } from '../../../api/listAPI';
import { toast } from 'react-toastify';
import { add_success, dragAndDrop } from '../../../features/list/listSlice';
import { List as ListModel } from '../../../features/list/listModel';
import { useBoardListContext } from '../../../context/BoardListContext';
import Modal from '../../../shared/Modal';
import CardModal from '../../CardModal';
import checkMember from '../../../helpers/checkMember';

interface Props {
  boardId: string;
}

const BoardLists = ({ boardId }: Props) => {
  const [openAddList, setOpenAddList] = useState<boolean>(false);
  const { lists } = useAppSelector((state) => state.list);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const { openCardDetail, onClose } = useBoardListContext();
  const { card, loading } = useAppSelector((state) => state.card);
  const { board } = useAppSelector((state) => state.boardDetail);
  const { user } = useAppSelector((state) => state.auth);

  const handleDragEnd = async (result: DropResult) => {
    if (result.destination) {
      const { droppableId: sourceListId, index: sourceListIndex } =
        result.source;
      const { droppableId: desListId, index: desListIndex } =
        result.destination;
      const draggableCardId = result.draggableId;

      if (sourceListId === desListId && sourceListIndex === desListIndex) {
        return;
      }

      dispatch(
        dragAndDrop({
          desListId,
          desListIndex,
          draggableCardId,
          sourceListId,
          sourceListIndex,
        })
      );
      await handleDragAndDrop({
        sourceListId,
        sourceListIndex,
        desListId,
        desListIndex,
        draggableCardId,
      });
    }
  };

  const handleAddNewList = async () => {
    if (!title.length) {
      toast.error('List title cannot be empty!');
      return;
    }
    const { data, error } = await addNewList({
      boardId,
      title,
    });
    if (!error) {
      dispatch(add_success(data as ListModel));
      setTitle('');
      setOpenAddList(false);
    } else {
      toast.error(error);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {openCardDetail && card._id && !loading && (
        <Modal
          open={openCardDetail}
          style={{ top: '2vh' }}
          closeBackdrop={false}
          onClose={onClose}
        >
          <CardModal onCloseModal={onClose} />
        </Modal>
      )}

      <Wrapper>
        {lists.map((list) => (
          <List key={list._id} list={list} />
        ))}
        {checkMember(board.members, user._id) && (
          <div className='collapse'>
            <Collapse in={openAddList}>
              <div className='add-wrapper'>
                <textarea
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='Enter the title of the list...'
                />
                <div className='btn-wrapper'>
                  <button className='add-btn' onClick={handleAddNewList}>
                    Add list
                  </button>
                  <MdClose
                    onClick={() => {
                      setOpenAddList(false);
                    }}
                  />
                </div>
              </div>
            </Collapse>
            <Collapse in={!openAddList}>
              <AddMoreButton
                onClick={() => {
                  setOpenAddList(true);
                }}
              >
                <span>
                  {lists?.length > 0 ? 'Add another list' : 'Add a new list'}
                </span>
                <MdAdd />
              </AddMoreButton>
            </Collapse>
          </div>
        )}
      </Wrapper>
    </DragDropContext>
  );
};

export default BoardLists;
