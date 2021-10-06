import { useState } from 'react';
import { Input } from './BoardTitle.styles';

interface Props {
  mode: 'EDIT' | 'VIEW';
  setMode: React.Dispatch<React.SetStateAction<'EDIT' | 'VIEW'>>;
  callback: (body: any) => void;
  title: string;
  style?: any;
  canEdit: boolean;
}
const BoardTitle = ({
  mode,
  setMode,
  callback,
  title,
  style,
  canEdit,
}: Props) => {
  const [temp, setTemp] = useState<string>(title);

  const onUpdateTitle = async () => {
    if (!temp || temp === title || !temp.length) {
      setTemp(title);
      setMode('VIEW');
      return;
    }

    await callback(temp);
    setMode('VIEW');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onUpdateTitle();
    }
  };

  return (
    <>
      {mode === 'EDIT' && canEdit ? (
        <Input
          style={style}
          autoFocus
          type='text'
          onBlur={onUpdateTitle}
          value={temp}
          onKeyDown={handleKeyDown}
          onChange={(e) => setTemp(e.target.value)}
        />
      ) : (
        <p
          className='title'
          style={{ cursor: canEdit ? 'pointer' : 'default' }}
          onClick={() => setMode('EDIT')}
        >
          {title}
        </p>
      )}
    </>
  );
};

export default BoardTitle;
