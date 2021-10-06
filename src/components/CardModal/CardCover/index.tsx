import { useState } from 'react';
import { IoMdImage } from 'react-icons/io';
import ImageSelector from '../../../shared/ImageSelector';
import { ActionButton } from '../CardModal.styles';
import { CardCoverWrapper } from './CardCover.styles';

interface Props {
  cover: string | null;
  setCover: React.Dispatch<React.SetStateAction<string | null>>;
}

const CardCover = ({ cover, setCover }: Props) => {
  const [openImageSelector, setOpenImageSelector] = useState<boolean>(false);

  return (
    <CardCoverWrapper>
      <ActionButton onClick={() => setOpenImageSelector(true)}>
        <IoMdImage />
        <span>Cover</span>
      </ActionButton>
      {openImageSelector && (
        <ImageSelector
          closeClickOutSide={true}
          setCover={setCover}
          open={openImageSelector}
          onClose={() => {
            setOpenImageSelector(false);
          }}
          style={{ right: 0 }}
        />
      )}
    </CardCoverWrapper>
  );
};

export default CardCover;
