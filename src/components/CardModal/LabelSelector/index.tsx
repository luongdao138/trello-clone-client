import { useRef, useState } from 'react';
import { MdCheck, MdClose, MdLabel } from 'react-icons/md';
import useEventListener from '../../../hooks/useEventListener';
import { ColorItem, LabelItem, LabelWrapper } from './LabelSelector.styles';
import { Label } from '../../../features/list/listModel';
import { availableColors } from './labelData';

interface Props {
  onClose: () => void;
  style?: any;
  closeClickOutSide: boolean;
  setLabels: React.Dispatch<React.SetStateAction<Label[]>>;
  labels: Label[];
}

const LabelSelector = ({
  onClose,
  style,
  closeClickOutSide,
  setLabels,
  labels,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [temp, setTemp] = useState<string>('');
  const [currentColor, setCurrentColor] = useState<string | null>(null);
  const handleClose = () => {
    onClose();
  };
  useEventListener('mousedown', window, (e: any) => {
    if (!ref.current?.contains(e.target) && closeClickOutSide) {
      onClose();
    }
  });

  const handleAddLabel = () => {
    if (!currentColor || !temp || !temp.length) return;

    setLabels((x) => [...x, { color: currentColor, name: temp }]);
    setTemp('');
    setCurrentColor(null);
  };
  const handleRemoveLabel = (index: number) => {
    setLabels((x) => x.filter((_, i) => i !== index));
  };

  return (
    <LabelWrapper style={style} ref={ref}>
      <button className='close' onClick={handleClose}>
        <MdClose />
      </button>
      <p className='title'>Label</p>
      <p className='sub-title'>Select a name and a color</p>
      <input
        className='label-input'
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        type='text'
        placeholder='Label...'
      />
      <div className='colors'>
        {availableColors.map((color) => (
          <ColorItem
            color={color}
            key={color}
            onClick={() => setCurrentColor(color)}
          >
            {currentColor === color && <MdCheck />}
          </ColorItem>
        ))}
      </div>
      <div className='available'>
        <div className='top'>
          <MdLabel />
          <span>Available</span>
        </div>
        <div className='items'>
          {labels?.map((label, index) => (
            <LabelItem key={index} color={label.color}>
              {label.name}
              <MdClose onClick={() => handleRemoveLabel(index)} />
            </LabelItem>
          ))}
        </div>
      </div>
      <div className='btn-wrapper'>
        <button className='add-btn' onClick={handleAddLabel}>
          Add
        </button>
      </div>
    </LabelWrapper>
  );
};

export default LabelSelector;
