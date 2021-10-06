import { useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { List } from '../../../features/list/listModel';
import checkMember from '../../../helpers/checkMember';
import BoardTitle from '../../BoardDetail/BoardTitle';
import { CardTitleWrapper } from './CardTitle.styles';

interface Props {
  title: string;
  cardId: string;
  updateTitle: (body: any) => void;
}

const findList = (lists: List[], cardId: string) => {
  return lists.find((x) => x.cards.some((card) => card._id === cardId));
};

const CardTitle = ({ title, cardId, updateTitle }: Props) => {
  const [mode, setMode] = useState<'EDIT' | 'VIEW'>('VIEW');
  const { lists } = useAppSelector((state) => state.list);
  const { board } = useAppSelector((state) => state.boardDetail);
  const { user } = useAppSelector((state) => state.auth);

  const handleUpdateCardTitle = async (t: string) => {
    await updateTitle({ title: t });
  };

  return (
    <CardTitleWrapper>
      <BoardTitle
        canEdit={checkMember(board.members, user._id)}
        mode={mode}
        setMode={setMode}
        title={title}
        callback={handleUpdateCardTitle}
      />
      <span className='list'>
        In list <span>{findList(lists, cardId)?.title}</span>
      </span>
    </CardTitleWrapper>
  );
};

export default CardTitle;
