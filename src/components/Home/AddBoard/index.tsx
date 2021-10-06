import { Wrapper } from './AddBoard.styles';
import { MdClose, MdLock, MdAdd } from 'react-icons/md';
import { IoMdImage } from 'react-icons/io';
import ImageSelector from '../../../shared/ImageSelector';
import { useState } from 'react';
import Visibility from '../../../shared/VisibilitySelector';
import { addBoard } from '../../../api/boardAPI';
import { add_success } from '../../../features/board/boardSlice';
import { useAppDispatch } from '../../../app/hooks';
import { Board } from '../../../features/board/boardModel';

interface Props {
  onClose: () => void;
}

const AddBoard = ({ onClose }: Props) => {
  const [openImageSelector, setOpenImageSelector] = useState<boolean>(false);
  const [openVisibility, setOpenVisibility] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [visibility, setVisibility] = useState<string>('PRIVATE');
  const [cover, setCover] = useState<string | null>(null);
  const handleCloseAddBoard = () => {
    onClose();
  };
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>('');

  const handleAddBoard = async () => {
    if (loading) return;
    if (cover && title) {
      setLoading(true);
      const { data, error } = await addBoard({
        cover_photo: cover,
        title,
        visibility,
      });
      setLoading(false);
      if (!error) {
        dispatch(add_success(data as Board));
        onClose();
      } else {
        setError(error);
      }
    } else {
      setError('Cover photo and title cannot be empty!');
    }
  };

  return (
    <Wrapper>
      {cover && (
        <div className='cover'>
          <img src={cover} alt='' />
          <button className='close' onClick={() => setCover(null)}>
            <MdClose />
          </button>
        </div>
      )}
      <input
        className='title-input'
        type='text'
        placeholder='Add board title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className='btn-wrapper'>
        <div className='wrapper'>
          <button
            className='btn'
            onClick={() => {
              setOpenVisibility(false);
              setOpenImageSelector(true);
            }}
          >
            <IoMdImage />
            <span>Cover</span>
          </button>
          {openImageSelector && (
            <ImageSelector
              closeClickOutSide={false}
              open={openImageSelector}
              onClose={() => {
                setOpenImageSelector(false);
              }}
              style={{ top: '-10px', left: 0 }}
              setCover={setCover}
            />
          )}
        </div>
        <div className='wrapper'>
          <button
            className='btn'
            onClick={() => {
              setOpenImageSelector(false);
              setOpenVisibility(true);
            }}
          >
            <MdLock />
            <span>{visibility === 'PRIVATE' ? 'Private' : 'Public'}</span>
          </button>
          {openVisibility && (
            <Visibility
              visibility={visibility}
              setVisibility={setVisibility}
              onClose={() => {
                setOpenVisibility(false);
              }}
              style={{ top: '-10px', left: '-60px', width: '260px' }}
              open={openVisibility}
            />
          )}
        </div>
      </div>
      <div className='actions'>
        <button onClick={handleCloseAddBoard} className='cancel-btn'>
          Cancel
        </button>

        <button className='add-btn' onClick={handleAddBoard}>
          <MdAdd />
          Create
        </button>
      </div>
      <p className='error-message'>{error}</p>
    </Wrapper>
  );
};

export default AddBoard;
