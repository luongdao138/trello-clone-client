import { Item } from '..';
import { Avatar } from '../../Common';
import { SearchItem, Wrapper } from './SearchResult.styles';

interface Props {
  result: Item[];
  setPeople: React.Dispatch<React.SetStateAction<Item[]>>;
  onClose: () => void;
}

const SearchResult = ({ result, setPeople, onClose }: Props) => {
  return (
    <Wrapper>
      {result.length === 0 ? (
        <p className='message'>No users found!</p>
      ) : (
        result.map((item) => (
          <SearchItem
            key={item._id}
            onClick={() => {
              setPeople((x) => [...x, item]);
              onClose();
            }}
          >
            <Avatar
              className='avatar'
              width='32px'
              src={
                item.avatar ||
                'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'
              }
            />
            <span className='username'>{item.username}</span>
          </SearchItem>
        ))
      )}
    </Wrapper>
  );
};

export default SearchResult;
