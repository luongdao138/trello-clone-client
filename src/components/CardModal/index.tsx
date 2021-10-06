import { MdClose } from 'react-icons/md';
import CardDescription from './CardDescription';
import { CardModalWrapper, Title } from './CardModal.styles';
import CardTitle from './CardTitle';
import { FaUserCircle, FaUserFriends } from 'react-icons/fa';
import CardCover from './CardCover';
import CardLabels from './CardLabels';
import CardMembers from './CardMembers';
import { useEffect, useState } from 'react';
import { Label } from '../../features/list/listModel';
import { useBoardListContext } from '../../context/BoardListContext';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { SpinnerWrapper } from '../../pages/styles/Home.styles';
import Spinner from '../../shared/Spinner';
import { updateCard } from '../../api/cardAPI';
import { fetch_success } from '../../features/card/cardSlice';
import { CardDetail } from '../../features/card/cardModel';
import { toast } from 'react-toastify';
import { update_card } from '../../features/list/listSlice';
import CardComments from './CardComments';
import checkMember from '../../helpers/checkMember';

interface Props {
  onCloseModal: () => void;
}

const CardModal = ({ onCloseModal }: Props) => {
  const { loading, card } = useAppSelector((state) => state.card);
  const { board } = useAppSelector((state) => state.boardDetail);
  const { user } = useAppSelector((state) => state.auth);
  const [cover, setCover] = useState<string | null>(
    card.cover_photo as string | null
  );

  const dispatch = useAppDispatch();
  const [labels, setLabels] = useState<Label[]>(card.labels);

  const handleUpdateCard = async (body: any) => {
    const { data, error } = await updateCard(card._id, body);
    if (!error) {
      dispatch(fetch_success(data as CardDetail));
      dispatch(update_card({ card: data, cardId: card._id }));
    } else {
      toast.error(error);
    }
  };

  useEffect(() => {
    if (card._id && !loading) {
      const updateCover = async () => {
        await handleUpdateCard({ cover_photo: cover });
      };
      updateCover();
    }
  }, [cover]);

  useEffect(() => {
    if (card._id && !loading) {
      const updateLabels = async () => {
        await handleUpdateCard({ labels });
      };
      updateLabels();
    }
  }, [labels]);

  return (
    <CardModalWrapper>
      {loading ? (
        <SpinnerWrapper style={{ marginTop: '20px' }}>
          <Spinner width='40px' />
        </SpinnerWrapper>
      ) : (
        <>
          {cover && (
            <div className='cover-wrapper'>
              <img src={cover} alt='' />
              <span className='close' onClick={() => setCover(null)}>
                <MdClose />
              </span>
            </div>
          )}
          <div className='main'>
            <div className='left'>
              <CardTitle
                updateTitle={handleUpdateCard}
                title={card.title}
                cardId={card._id}
              />
              <CardDescription
                updateDescription={handleUpdateCard}
                description={card.description}
                cardId={card._id}
              />
              <CardComments />
            </div>
            <div className='right'>
              {checkMember(board.members, user._id) && (
                <div className='group'>
                  <Title>
                    <FaUserCircle />
                    <span>Actions</span>
                  </Title>
                  <CardCover setCover={setCover} cover={cover} />
                  <CardLabels labels={labels} setLabels={setLabels} />
                </div>
              )}
              <div className='group'>
                <Title>
                  <FaUserFriends />
                  <span>Members</span>
                </Title>
                <CardMembers />
              </div>
              {/* <button className='save-changes'>Save changes</button> */}
            </div>
          </div>
        </>
      )}
    </CardModalWrapper>
  );
};

export default CardModal;
