import { useState } from 'react';
import { MdDescription, MdEdit } from 'react-icons/md';
import { Label } from '../../components/BoardDetail/BoardMenu/BoardMenu.styles';
import { Wrapper } from './EditDescription.styles';

interface Props {
  description: string;
  callback: (des: string) => void;
  canEdit: boolean;
}

type Mode = 'EDIT' | 'VIEW';
const BoardDescription = ({ description, callback, canEdit }: Props) => {
  const [mode, setMode] = useState<Mode>('VIEW');
  const [temp, setTemp] = useState<string>(description);

  const cancelEditMode = () => {
    setTemp(description);
    setMode('VIEW');
  };

  const saveDescription = async () => {
    await callback(temp);
    setMode('VIEW');
  };

  return (
    <Wrapper>
      <div className='top'>
        <Label>
          <MdDescription />
          <span>Description</span>
        </Label>
        {mode === 'VIEW' && canEdit && (
          <button
            className='edit'
            onClick={() => {
              setMode('EDIT');
            }}
          >
            <MdEdit />
            <span>Edit</span>
          </button>
        )}
      </div>
      {mode === 'EDIT' ? (
        <textarea
          value={temp}
          onChange={(e) => {
            setTemp(e.target.value);
          }}
        />
      ) : (
        <div className='middle'>{description}</div>
      )}
      {mode === 'EDIT' && (
        <div className='bottom'>
          <button className='save' onClick={saveDescription}>
            Save
          </button>
          <button className='cancel' onClick={cancelEditMode}>
            Cancel
          </button>
        </div>
      )}
    </Wrapper>
  );
};

export default BoardDescription;
