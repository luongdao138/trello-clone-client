import { useState } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { Avatar } from '../../../../shared/Common';
import { Item } from '../../../../shared/MemberSelector';
import { CommentItemWrapper } from './CommentItem.styles';
import { toast } from 'react-toastify';
import { deleteComment, updateComment } from '../../../../api/commentAPI';
import {
  delete_comment,
  edit_comment,
} from '../../../../features/comments/commentsSlice';
import { Comment } from '../../../../features/comments/commentModel';
import { delete_card_comment } from '../../../../features/list/listSlice';

interface Props {
  creator: Item;
  createdAt: string;
  isLoggedInUserCreated: boolean;
  content: string;
  commentId: string;
  cardId: string;
}
const CommentItem = ({
  creator,
  createdAt,
  content,
  isLoggedInUserCreated,
  commentId,
  cardId,
}: Props) => {
  const [mode, setMode] = useState<'EDIT' | 'VIEW'>('VIEW');
  const [temp, setTemp] = useState<string>(content);
  const dispatch = useAppDispatch();
  const [canEdit, setCanEdit] = useState<boolean>(true);

  const handleEditComment = async () => {
    if (!canEdit) return;

    if (!temp || !temp.length || temp === content) {
      setTemp(content);
      setMode('VIEW');
      return;
    }

    setCanEdit(false);
    const { data, error } = await updateComment(commentId, { content: temp });
    if (!error) {
      dispatch(edit_comment({ commentId, comment: data as Comment }));
    } else {
      setTemp(content);
      toast.error(error);
    }
    setCanEdit(true);
    setMode('VIEW');
  };

  const handleDeleteComment = async () => {
    const { error } = await deleteComment(commentId);
    if (!error) {
      dispatch(delete_comment({ commentId }));
      dispatch(delete_card_comment({ cardId }));
    } else {
      toast.error(error);
    }
  };

  return (
    <CommentItemWrapper>
      <div className='top'>
        <div className='user-info'>
          <Avatar
            width='32px'
            src={
              creator.avatar ||
              'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'
            }
          />
          <div className='right'>
            <p className='username'>{creator.username}</p>
            <p className='createdAt'>{createdAt}</p>
          </div>
        </div>
        {isLoggedInUserCreated && (
          <div className='user-actions'>
            <button onClick={() => setMode('EDIT')}>Edit</button>
            <span>-</span>
            <button onClick={handleDeleteComment}>Delete</button>
          </div>
        )}
      </div>
      <div className='bottom'>
        {mode === 'VIEW' ? (
          <p className='content'>{content}</p>
        ) : (
          <>
            <textarea value={temp} onChange={(e) => setTemp(e.target.value)} />
            <div className='save-wrapper'>
              <button onClick={handleEditComment}>Save</button>
            </div>
          </>
        )}
      </div>
    </CommentItemWrapper>
  );
};

export default CommentItem;
