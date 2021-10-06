import { Option, Wrapper } from './VisibilitySelector.styles';
import { ImEarth } from 'react-icons/im';
import { MdClose, MdLock } from 'react-icons/md';
import { toast } from 'react-toastify';
interface Props {
  open: boolean;
  onClose: () => void;
  style?: any;
  visibility: string;
  setVisibility: React.Dispatch<React.SetStateAction<string>>;
}

const Visibility = ({
  open,
  onClose,
  style,
  visibility,
  setVisibility,
}: Props) => {
  const handleClose = () => {
    onClose();
  };
  const handleChangeVisibility = (value: string) => {
    setVisibility(value);
    onClose();
  };

  return open ? (
    <Wrapper style={style}>
      <button className='close' onClick={handleClose}>
        <MdClose />
      </button>
      <p className='title'>Visibility</p>
      <p className='sub-title'>Choose who can see this board</p>
      <Option
        onClick={() => handleChangeVisibility('PUBLIC')}
        active={visibility === 'PUBLIC'}
      >
        <div className='top'>
          <ImEarth />
          <span>Pulbic</span>
        </div>
        <p className='bottom'>Anyone on the internet can see this</p>
      </Option>
      <Option
        active={visibility === 'PRIVATE'}
        onClick={() => handleChangeVisibility('PRIVATE')}
      >
        <div className='top'>
          <MdLock />
          <span>Private</span>
        </div>
        <p className='bottom'>Only board members can see this</p>
      </Option>
    </Wrapper>
  ) : null;
};

export default Visibility;
