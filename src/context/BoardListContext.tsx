import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getSingleCard } from '../api/cardAPI';
import { useAppDispatch } from '../app/hooks';
import { CardDetail } from '../features/card/cardModel';
import {
  fetch_fail,
  fetch_request,
  fetch_success,
} from '../features/card/cardSlice';
import {
  fetch_fail as fetch_comments_fail,
  fetch_request as fetch_comments_request,
  fetch_success as fetch_comments_success,
} from '../features/comments/commentsSlice';
import { toast } from 'react-toastify';
import { getAllCommentsOfCard } from '../api/commentAPI';
import { Comment } from '../features/comments/commentModel';
interface ContextModel {
  openCardDetail: boolean;
  onClose: () => void;
  onOpen: () => void;
  currentCardId: string;
  setCurrentCardId: React.Dispatch<React.SetStateAction<string>>;
}

const BoardListContext = createContext<ContextModel>({} as ContextModel);

interface Props {
  children: ReactNode;
}
const BoardListProvider = ({ children }: Props) => {
  const [openCardDetail, setOpenCardDetail] = useState<boolean>(false);
  const [currentCardId, setCurrentCardId] = useState<string>('');
  const dispatch = useAppDispatch();
  const onClose = () => {
    setOpenCardDetail(false);
  };
  const onOpen = () => {
    setOpenCardDetail(true);
  };

  useEffect(() => {
    if (!currentCardId) return;

    const getCardDetail = async () => {
      dispatch(fetch_request());
      const { data, error } = await getSingleCard(currentCardId);
      if (!error) {
        dispatch(fetch_success(data as CardDetail));
      } else {
        toast.error(error);
        dispatch(fetch_fail(error));
      }
    };
    const getCommentsOfCard = async () => {
      dispatch(fetch_comments_request());
      const { data, error } = await getAllCommentsOfCard(currentCardId);
      console.log(data);

      if (!error) {
        dispatch(fetch_comments_success(data as Comment[]));
      } else {
        toast.error(error);
        dispatch(fetch_comments_fail(error));
      }
    };

    getCardDetail();
    getCommentsOfCard();
  }, [currentCardId]);

  return (
    <BoardListContext.Provider
      value={{
        openCardDetail,
        onClose,
        onOpen,
        currentCardId,
        setCurrentCardId,
      }}
    >
      {children}
    </BoardListContext.Provider>
  );
};

export const useBoardListContext = () => useContext(BoardListContext);
export default BoardListProvider;
