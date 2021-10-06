import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { SearchWrapper } from './Search.styles';

const Search = () => {
  const [keyword, setKeyword] = useState<string>('');
  // const history = useHistory();
  const handleSearchBoard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!keyword || !keyword.length) {
      return;
    }

    // history.push(`/search?keyword=${keyword}`);
  };

  return (
    <SearchWrapper>
      <form onSubmit={handleSearchBoard}>
        <input
          type='text'
          placeholder='Keyword...'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className='search-btn'>Search</button>
      </form>
    </SearchWrapper>
  );
};

export default Search;
