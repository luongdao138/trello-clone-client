import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  .left {
    flex: 1;
    margin-right: 20px;
    .title {
      font-weight: 500;
      font-size: 14px;
      cursor: pointer;
      padding: 5px 0;
      color: var(--dark-color);
    }
    .title-input {
      width: 100%;
      font-weight: 500;
      font-size: 14px;
      padding: 5px 10px;
      border-radius: 4px;
      border: 2px solid var(--pri-color);
    }
  }
  .right {
    color: var(--sec-color-light);
  }
`;
