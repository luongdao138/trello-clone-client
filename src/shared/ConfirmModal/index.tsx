import { Wrapper } from './ConfirmModal.styles';

interface Props {
  onOk: () => void;
  onCancel: () => void;
  title: string;
}

const ConfirmModal = ({ onCancel, onOk, title }: Props) => {
  return (
    <Wrapper>
      <p className='title'>{title}</p>
      <div className='btn-wrapper'>
        <button className='cancel' onClick={onCancel}>
          Cancel
        </button>
        <button className='ok' onClick={onOk}>
          Ok
        </button>
      </div>
    </Wrapper>
  );
};

export default ConfirmModal;
