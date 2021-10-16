import { useHistory } from 'react-router';
import { useAppSelector } from '../app/hooks';
import {
  Wrapper,
  Content,
  Header,
  ProfileContainer,
} from './styles/Profile.styles';

const ProfilePage = () => {
  const history = useHistory();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Wrapper>
      <p className='main-title'>Personal Info</p>
      <p className='subtitle'>Basic info, like your name and photo</p>
      <ProfileContainer>
        <Header>
          <div className='title'>
            <p className='big'>Profile</p>
            <p className='small'>Some info maybe visible to other people</p>
          </div>
          {/* <button onClick={() => history.push('/profile/edit')}>Edit</button> */}
        </Header>
        <Content>
          <li>
            <span className='title'>Photo</span>
            <span className='value'>
              <img
                src={
                  user.avatar ||
                  'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'
                }
                alt=''
              />
            </span>
          </li>
          <li>
            <span className='title'>Name</span>
            <span className='value'>{user.username}</span>
          </li>
          <li>
            <span className='title'>Bio</span>
            <span className='value'>{user.bio}</span>
          </li>
          <li>
            <span className='title'>Phone</span>
            <span className='value'>{user.phone}</span>
          </li>
          <li>
            <span className='title'>Email</span>
            <span className='value'>{user.email}</span>
          </li>
          <li>
            <span className='title'>Password</span>
            <span className='value'>**********</span>
          </li>
        </Content>
      </ProfileContainer>
    </Wrapper>
  );
};

export default ProfilePage;
