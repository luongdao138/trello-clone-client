import { useState } from 'react';
import { MdLabel } from 'react-icons/md';
import { Label } from '../../../features/list/listModel';
import { ActionButton } from '../CardModal.styles';
import LabelSelector from '../LabelSelector';

interface Props {
  setLabels: React.Dispatch<React.SetStateAction<Label[]>>;
  labels: Label[];
}

const CardLabels = ({ setLabels, labels }: Props) => {
  const [openLabelSelector, setOpenLabelSelector] = useState<boolean>(false);

  return (
    <div style={{ position: 'relative' }}>
      <ActionButton onClick={() => setOpenLabelSelector(true)}>
        <MdLabel />
        <span>Labels</span>
      </ActionButton>
      {openLabelSelector && (
        <LabelSelector
          labels={labels}
          setLabels={setLabels}
          closeClickOutSide={true}
          style={{ right: 0 }}
          onClose={() => {
            setOpenLabelSelector(false);
          }}
        />
      )}
    </div>
  );
};

export default CardLabels;
