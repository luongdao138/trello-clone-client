import { useState } from 'react';
import { TitleWrapper } from './ListTitle.styles';
import { MdMoreHoriz } from 'react-icons/md';
import { useAppDispatch } from '../../../../app/hooks';
import { handleUpdateList } from '../../../../api/listAPI';
import { update_success } from '../../../../features/list/listSlice';
import { List } from '../../../../features/list/listModel';
import { toast } from 'react-toastify';

interface Props {
  title: string;
  listId: string;
}

type Mode = 'EDIT' | 'VIEW';
const ListTitle = ({ listId, title }: Props) => {
  const [mode, setMode] = useState<Mode>('VIEW');
  const [temp, setTemp] = useState<string>(title);
  const dispatch = useAppDispatch();

  const handleUpdateTitle = async () => {
    if (!temp || temp.length === 0 || temp === title) {
      setTemp(title);
      setMode('VIEW');
      return;
    }

    const { data, error } = await handleUpdateList(listId, { title: temp });
    if (!error) {
      dispatch(update_success({ list: data as List, listId }));
    } else {
      toast.error(error);
    }

    setMode('VIEW');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleUpdateTitle();
    }
  };

  return (
    <TitleWrapper>
      <div className='left'>
        {mode === 'EDIT' ? (
          <input
            autoFocus
            type='text'
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            className='title-input'
            onBlur={handleUpdateTitle}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <p className='title' onClick={() => setMode('EDIT')}>
            {title}
          </p>
        )}
      </div>
      <div className='right'>
        <MdMoreHoriz />
      </div>
    </TitleWrapper>
  );
};

export default ListTitle;
