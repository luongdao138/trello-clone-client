import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 110%;
  background-color: var(--white-color);
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  width: 100%;
  left: 0;
  padding: 10px;
  max-height: 200px;
  overflow-y: auto;

  .message {
    font-size: 12px;
    font-weight: 600;
    color: var(--dark-color);
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--sec-color);
    border-radius: 30px;
  }
`;

export const SearchItem = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  border-radius: 8px;
  margin-top: 5px;
  :first-child {
    margin-top: 0;
  }
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  span.username {
    font-size: 12px;
    color: var(--dark-color);
    font-weight: 600;
    margin-left: 10px;
  }

  :hover {
    background-color: #f2f2f2;
  }
`;
