import styled from 'styled-components';

export const CommentFormWrapper = styled.div`
  background-color: var(--white-color);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  margin-top: 20px;

  .top {
    display: flex;
    align-items: flex-start;
    img {
      margin-right: 10px;
    }

    textarea {
      flex: 1;
      outline: none;
      border: none;
      min-height: 60px;
      resize: none;
      padding: 5px 0;
      color: var(--dark-color);
      font-weight: 500;
      font-size: 14px;

      ::placeholder {
        color: var(--sec-color);
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: flex-end;

    button {
      border-radius: 8px;
      background-color: var(--pri-color);
      padding: 2px 12px;
      font-size: 10px;
      font-weight: 500;
      color: var(--white-color);
    }
  }
`;
