import { useState } from 'react';
import { addNewComment } from '../../../../api/commentAPI';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { Avatar } from '../../../../shared/Common';
import { CommentFormWrapper } from './CommentForm.styles';
import { toast } from 'react-toastify';
import { add_comment } from '../../../../features/comments/commentsSlice';
import { Comment } from '../../../../features/comments/commentModel';
import { add_card_comment } from '../../../../features/list/listSlice';

interface Props {
  cardId: string;
}

const CommentForm = ({ cardId }: Props) => {
  const { user } = useAppSelector((state) => state.auth);
  const [content, setContent] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleAddComment = async () => {
    if (!content || content.length === 0) {
      return;
    }

    const { data, error } = await addNewComment({ content, cardId });
    if (!error) {
      dispatch(add_comment(data as Comment));
      dispatch(add_card_comment({ cardId }));
      setContent('');
    } else {
      toast.error(error);
    }
  };

  return (
    <CommentFormWrapper>
      <div className='top'>
        <Avatar
          width='32px'
          src={
            user.avatar ||
            'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'
          }
        />
        <textarea
          placeholder='Write a comment...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className='bottom'>
        <button onClick={handleAddComment}>Comment</button>
      </div>
    </CommentFormWrapper>
  );
};

export default CommentForm;
