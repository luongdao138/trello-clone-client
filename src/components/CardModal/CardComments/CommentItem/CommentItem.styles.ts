import styled from 'styled-components';

export const CommentItemWrapper = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #f2f2f2;
  :last-child {
    margin-bottom: 0;
  }
  .bottom {
    color: #4f4f4f;
    font-size: 14px;
    .save-wrapper {
      display: flex;
      justify-content: flex-end;
      button {
        border-radius: 8px;
        padding: 2px 10px;
        font-size: 10px;
        font-weight: 500;
        margin-right: 5px;
        background-color: #219653;
        color: var(--white-color);
      }
    }
    textarea {
      width: 100%;
      resize: none;
      outline: none;
      border: 2px solid var(--pri-color);
      border-radius: 4px;
      padding: 5px;
    }
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;

    .user-info {
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
      }
      .right {
        .username {
          color: var(--text-color);
          font-weight: 500;
          font-size: 12px;
          margin-bottom: -5px;
        }
        .createdAt {
          font-weight: 500;
          font-size: 10px;
          color: var(--sec-color);
        }
      }
    }

    .user-actions {
      display: flex;
      align-items: center;
      button {
        background-color: transparent;
      }
      span {
        margin: 0 5px;
        display: block;
      }
      button,
      span {
        color: var(--sec-color-light);
        font-size: 10px;
        font-weight: 500;
      }
    }
  }
`;
