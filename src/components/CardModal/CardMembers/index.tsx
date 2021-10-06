import { useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useAppSelector } from '../../../app/hooks';
import checkMember from '../../../helpers/checkMember';
import { Avatar } from '../../../shared/Common';
import MemberSelector from '../../../shared/MemberSelector';
import { MemItem, Wrapper } from './CardMembers.styles';

const CardMembers = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [openMemberSelector, setOpenMemberSelector] = useState<boolean>(false);
  const { card } = useAppSelector((state) => state.card);
  const { board } = useAppSelector((state) => state.boardDetail);
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Wrapper>
      <div className='member-list'>
        {card.members?.map((m, index) => (
          <MemItem key={m._id}>
            <Avatar
              src={
                m.avatar ||
                'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'
              }
              width='32px'
            />
            <span className='username'>{m.username}</span>
          </MemItem>
        ))}
      </div>
      <div className='assign-mem'>
        {checkMember(board.members, user._id) && (
          <button
            className='assign-btn'
            onClick={() => {
              setOpenMemberSelector(true);
            }}
          >
            <span>Assign a member</span>
            <MdAdd />
          </button>
        )}
        {openMemberSelector && (
          <MemberSelector
            style={{ right: 0, top: '40px' }}
            title='Members'
            sub_title='Assign members to this card'
            buttonRef={buttonRef}
            onClose={() => {
              setOpenMemberSelector(false);
            }}
            card={card}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default CardMembers;
