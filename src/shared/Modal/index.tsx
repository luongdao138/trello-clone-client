import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import { MdClose } from 'react-icons/md';
import useEventListener from '../../hooks/useEventListener';
import { Wrapper, Content } from './Modal.styles';

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  closeBackdrop: boolean;
  style?: any;
}

const Modal = ({ open, onClose, children, style, closeBackdrop }: Props) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEventListener('mousedown', window, (e: any) => {
    if (!contentRef.current?.contains(e.target) && closeBackdrop) {
      onClose();
    }
  });

  return open
    ? createPortal(
        <Wrapper>
          <Content ref={contentRef} style={style}>
            <div className='close-modal'>
              <MdClose onClick={onClose} />
            </div>
            {children}
          </Content>
        </Wrapper>,
        document.getElementById('modal-portal') as HTMLElement
      )
    : null;
};

export default Modal;
