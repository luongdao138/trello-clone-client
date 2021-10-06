import { useRef, useState } from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { MdAdd, MdAttachFile, MdMessage } from 'react-icons/md';
import ReactTooltip from 'react-tooltip';
import { useAppSelector } from '../../../../app/hooks';
import { useBoardListContext } from '../../../../context/BoardListContext';
import { CardInList } from '../../../../features/list/listModel';
import checkMember from '../../../../helpers/checkMember';
import { AddButton, Avatar } from '../../../../shared/Common';
import MemberSelector from '../../../../shared/MemberSelector';
import { Label, Wrapper } from './Card.styles';

interface Props {
  card: CardInList;
  index: number;
}

const Card = ({ card, index }: Props) => {
  const { onOpen, setCurrentCardId, currentCardId } = useBoardListContext();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [openMemberSelector, setOpenMemberSelector] = useState<boolean>(false);
  const { board } = useAppSelector((state) => state.boardDetail);
  const { user } = useAppSelector((state) => state.auth);
  const handleSelectCard = () => {
    if (currentCardId !== card._id) {
      setCurrentCardId(card._id);
    }
    setTimeout(() => {
      onOpen();
    }, 200);
  };

  const handleAssignMember = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenMemberSelector(true);
  };

  return (
    <Draggable draggableId={card._id} index={index}>
      {(provided: DraggableProvided) => (
        <Wrapper
          onClick={handleSelectCard}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <ReactTooltip effect='solid' />
          {card.cover_photo && (
            <img className='cover-photo' src={card.cover_photo} alt='' />
          )}
          <p className='title'>{card.title}</p>
          {card.labels?.length > 0 && (
            <div className='labels-wrapper'>
              {card.labels?.map((label, index) => (
                <Label color={label.color} key={index}>
                  {label.name}
                </Label>
              ))}
            </div>
          )}
          <div className='bottom'>
            <div className='members-wrapper'>
              {card.members?.slice(0, 2).map((m) => (
                <Avatar
                  data-tip={m.username}
                  src={m.avatar || ''}
                  width='24px'
                  key={m._id}
                />
              ))}
              {card.members?.length > 2 && (
                <span className='more'>
                  + {card.members?.length - 2} others
                </span>
              )}
              {checkMember(board.members, user._id) && (
                <div
                  style={{ position: 'relative' }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <AddButton
                    ref={buttonRef}
                    style={{ width: '24px', height: '24px' }}
                    onClick={handleAssignMember}
                  >
                    <MdAdd />
                  </AddButton>
                  {openMemberSelector && (
                    <MemberSelector
                      title='Members'
                      sub_title='Assign members to this card'
                      buttonRef={buttonRef}
                      style={{ left: 0, top: '30px' }}
                      onClose={() => setOpenMemberSelector(false)}
                      card={card}
                    />
                  )}
                </div>
              )}
            </div>
            <div className='info'>
              <div className='item'>
                <MdMessage />
                <span>{card.comment_count}</span>
              </div>
              <div className='item'>
                <MdAttachFile />
                <span>{card.attachment_count}</span>
              </div>
            </div>
          </div>
        </Wrapper>
      )}
    </Draggable>
  );
};

export default Card;
