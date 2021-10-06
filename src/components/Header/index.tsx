import { Button, MenuWrapper, Wrapper } from './Header.styles';
import logo from '../../assets/Logo.svg';
import Search from './Search/Search';
import Menu from './Menu/Menu';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useRef, useState } from 'react';
import useEventListener from '../../hooks/useEventListener';
import { useAppSelector } from '../../app/hooks';
import { Avatar } from '../../shared/Common';
import { CgLayoutGridSmall } from 'react-icons/cg';

interface Props {
  isBoardDetail: boolean;
}

const Header = ({ isBoardDetail }: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { user } = useAppSelector((state) => state.auth);
  const history = useHistory();
  const { board, loading } = useAppSelector((state) => state.boardDetail);

  useEventListener('mousedown', window, (e: any) => {
    if (
      !menuRef.current?.contains(e.target) &&
      !buttonRef.current?.contains(e.target)
    ) {
      setOpenMenu(false);
    }
  });
  return (
    <Wrapper>
      <div className='left'>
        <Link className='logo' to='/'>
          <img src={logo} alt='' />
        </Link>
        {!loading && isBoardDetail && (
          <div className='detail'>
            <p className='title'>{board.title}</p>
            <div className='divider'></div>
            <button
              className='all-board '
              onClick={() => {
                history.push('/');
              }}
            >
              <CgLayoutGridSmall />
              <span>All board</span>
            </button>
          </div>
        )}
      </div>
      <Search />
      <MenuWrapper>
        <Button ref={buttonRef} onClick={() => setOpenMenu((x) => !x)}>
          <Avatar
            src={
              user.avatar ||
              'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'
            }
            className='avatar'
            alt=''
            width='36px'
          />

          <span className='username'>{user.username}</span>
          {openMenu ? <FaCaretUp /> : <FaCaretDown />}
        </Button>
        {openMenu ? (
          <div ref={menuRef}>
            <Menu />
          </div>
        ) : null}
      </MenuWrapper>
    </Wrapper>
  );
};

export default Header;
