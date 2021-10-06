import { useAppSelector } from '../../../app/hooks';
import checkMember from '../../../helpers/checkMember';
import EditDescription from '../../../shared/EditDescription';

interface Props {
  description: string;
  cardId: string;
  updateDescription: (body: any) => void;
}
const CardDescription = ({ updateDescription, description, cardId }: Props) => {
  const { user } = useAppSelector((state) => state.auth);
  const { board } = useAppSelector((state) => state.boardDetail);

  const handleUpdateDescription = async (des: string) => {
    await updateDescription({ description: des });
  };

  return (
    <EditDescription
      description={description}
      callback={handleUpdateDescription}
      canEdit={checkMember(board.members, user._id)}
    />
  );
};

export default CardDescription;
