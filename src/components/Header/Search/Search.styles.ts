import styled from 'styled-components';

export const SearchWrapper = styled.div`
  background-color: var(--white-color);
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 3px 4px;
  margin-right: 35px;
  display: flex;

  input {
    padding: 4px 10px;
    font-weight: 500;
    color: var(--text-color);
    font-size: 10px;
    min-width: 200px;

    ::placeholder {
      color: var(--sec-color);
    }
  }

  button.search-btn {
    background: var(--pri-color);
    border-radius: 8px;
    height: 100%;
    font-size: 10px;
    font-weight: 500;
    color: var(--white-color);
    padding: 5px 15px;
  }
`;
