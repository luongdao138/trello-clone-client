import styled from 'styled-components';

export const JoinBoardWrapper = styled.div`
  width: 280px;
  padding: 5px;

  .title {
    font-weight: 600;
    color: #4f4f4f;
    font-size: 14px;
    margin-bottom: 10px;
  }
  form {
    margin-bottom: 10px;

    input {
      border-radius: 8px;
      border: 1px solid #e0e0e0;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
      padding: 6px 12px;
      background-color: var(--white-color);
      width: 100%;
      font-weight: 500;
      color: var(--text-color);
      font-size: 10px;

      ::placeholder {
        color: var(--sec-color);
      }
    }
  }

  .btn-wrapper {
    display: flex;
    justify-content: flex-end;
    button {
      font-size: 10px;
      font-weight: 500;
      border-radius: 8px;
      padding: 5px 14px 5px 10px;
    }
    .cancel {
      background-color: transparent;
      color: var(--sec-color-light);
    }
    .join {
      background: var(--pri-color);
      height: 100%;
      color: var(--white-color);
      display: flex;
      align-items: center;
      svg {
        margin-right: 2px;
      }
    }
  }
`;
