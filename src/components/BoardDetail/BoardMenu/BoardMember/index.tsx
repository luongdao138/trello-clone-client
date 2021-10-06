import { useState } from 'react';
import { MdDescription } from 'react-icons/md';
import { useAppSelector } from '../../../../app/hooks';
import { Member } from '../../../../features/board/boardModel';
import { Avatar } from '../../../../shared/Common';
import ConfirmModal from '../../../../shared/ConfirmModal';
import Modal from '../../../../shared/Modal';
import { Label } from '../BoardMenu.styles';
import { MemberItem, Wrapper } from './BoardMember.styles';

interface Props {
  members: Member[];
  removeMember: (memId: string) => void;
  // boardId: string;
}

const isAdmin = (members: Member[], userId: string): boolean => {
  const user = members.find((x) => x.user._id === userId);
  if (!user) return false;
  else {
    return user.role === 'ADMIN';
  }
};

const BoardMember = ({ members, removeMember }: Props) => {
  const { user } = useAppSelector((state) => state.auth);
  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);
  const [deleteMem, setDeleteMem] = useState<Member | null>(null);

  return (
    <Wrapper>
      {openConfirmModal && (
        <Modal
          closeBackdrop={false}
          open={openConfirmModal}
          onClose={() => setOpenConfirmModal(false)}
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <ConfirmModal
            onCancel={() => {
              setOpenConfirmModal(false);
            }}
            onOk={async () => {
              if (deleteMem) {
                await removeMember(deleteMem?.user._id);
                setOpenConfirmModal(false);
                setDeleteMem(null);
              }
            }}
            title={`Are you sure to remove ${deleteMem?.user.username}?`}
          />
        </Modal>
      )}
      <Label>
        <MdDescription />
        <span>Team</span>
      </Label>
      <div className='member-list'>
        {members?.map((m) => (
          <MemberItem key={m.user._id}>
            <div className='left'>
              <Avatar
                src={
                  m.user.avatar ||
                  'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'
                }
                width='36px'
              />
              <span className='username'>{m.user.username}</span>
            </div>
            <div className='right'>
              {m.role === 'ADMIN' ? (
                <span className='admin'>Admin</span>
              ) : isAdmin(members, user._id) ? (
                <button
                  className='remove'
                  onClick={() => {
                    setDeleteMem(m);
                    setOpenConfirmModal(true);
                  }}
                >
                  Remove
                </button>
              ) : (
                <span className='mem'>Member</span>
              )}
            </div>
          </MemberItem>
        ))}
      </div>
    </Wrapper>
  );
};

export default BoardMember;
