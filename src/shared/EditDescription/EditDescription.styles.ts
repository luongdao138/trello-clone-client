import styled from 'styled-components';

export const Wrapper = styled.div`
  .top {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    .edit {
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

  .middle {
    color: var(--text-color);
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    max-height: 200px;
    margin-bottom: 15px;
    overflow-y: auto;
    padding-right: 5px;

    ::-webkit-scrollbar {
      width: 0px;
    }
  }

  .bottom {
    display: flex;
    align-items: center;

    button {
      border-radius: 8px;
      padding: 2px 10px;
      font-size: 10px;
      font-weight: 500;
      margin-right: 5px;
    }
    .save {
      background-color: #219653;
      color: var(--white-color);
    }

    .cancel {
      background-color: var(--white-color);
      color: var(--sec-color-light);
    }
  }

  textarea {
    width: 100%;
    resize: none;
    outline: none;
    margin-bottom: 10px;
    height: 200px;
    color: var(--text-color);
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    border-radius: 8px;
    border: 1px solid var(--sec-color);
    padding: 8px 12px;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;
