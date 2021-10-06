import { useAppSelector } from '../../../app/hooks';
import { Wrapper } from './CardComments.styles';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import moment from 'moment';
import { SpinnerWrapper } from '../../../pages/styles/Home.styles';
import Spinner from './../../../shared/Spinner';
const CardComments = () => {
  const { comments, loading } = useAppSelector((state) => state.comments);
  const { user } = useAppSelector((state) => state.auth);
  const { card } = useAppSelector((state) => state.card);

  return (
    <Wrapper>
      <CommentForm cardId={card._id} />
      {!loading ? (
        comments?.map((comment) => (
          <CommentItem
            cardId={card._id}
            key={comment._id}
            creator={comment.creator}
            content={comment.content}
            commentId={comment._id}
            createdAt={`${moment(comment.createdAt).format(
              'DD MMMM'
            )} at ${moment(comment.createdAt).format('hh:mm')}`}
            isLoggedInUserCreated={comment.creator._id === user._id}
          />
        ))
      ) : (
        <SpinnerWrapper>
          <Spinner width='36px' />
        </SpinnerWrapper>
      )}
    </Wrapper>
  );
};

export default CardComments;
