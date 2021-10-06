import { MenuItem, MenuWrapper } from './Menu.styles';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { MdExitToApp, MdGroup } from 'react-icons/md';
import { useAppDispatch } from '../../../app/hooks';
import { logout } from '../../../features/auth/authSlice';
import { createPortal } from 'react-dom';

const Menu = () => {
  const dispatch = useAppDispatch();
  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <MenuWrapper>
      <MenuItem to='/' color='#4f4f4f'>
        <FaUserCircle />
        <span>My Profile</span>
      </MenuItem>
      <MenuItem to='/' color='#4f4f4f'>
        <MdGroup />
        <span>Group Chat</span>
      </MenuItem>
      <div className='divider'></div>
      <MenuItem to='/' color='#EB5757' onClick={handleLogout}>
        <MdExitToApp />
        <span>Logout</span>
      </MenuItem>
    </MenuWrapper>
  );
};

export default Menu;
