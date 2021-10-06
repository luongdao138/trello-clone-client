import styled from 'styled-components';

export const BoardCoverWrapper = styled.div`
  .top {
    display: flex;
    align-items: center;
    position: relative;
    button.edit {
      display: flex;
      align-items: center;
      margin-left: 10px;
      border-radius: 8px;
      border: 1px solid var(--sec-color);
      padding: 0px 12px;
      color: var(--sec-color-light);
      background-color: var(--white-color);
      span {
        margin: 0 5px;
        font-weight: 500;
        font-size: 10px;
      }
    }
  }
  .cover-photo {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin: 5px 0 10px 0;
  }
`;
