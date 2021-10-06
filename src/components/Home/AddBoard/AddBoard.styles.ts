import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 280px;
  padding: 5px;
  .cover {
    position: relative;
    margin-bottom: 5px;
    img {
      width: 100%;
      max-height: 120px;
      object-fit: cover;
      border-radius: 8px;
    }

    .close {
      position: absolute;
      top: -13px;
      right: -13px;
      background-color: var(--pri-color);
      border-radius: 8px;
      color: var(--white-color);
      padding: 6px;
      display: flex;
      align-items: center;
    }
  }

  .title-input {
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

  .btn-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    div.wrapper {
      position: relative;
    }

    button.btn {
      display: flex;
      align-items: center;
      background-color: #f2f2f2;
      border-radius: 8px;
      padding: 6px 30px;
      color: var(--sec-color-light);

      svg {
        font-size: 18px;
        margin-right: 10px;
      }
      span {
        font-size: 12px;
        font-weight: 500;
      }
    }
  }

  .actions {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    button {
      font-size: 10px;
      font-weight: 500;
      border-radius: 8px;
      padding: 5px 14px 5px 10px;
    }
    .cancel-btn {
      background-color: transparent;
      color: var(--sec-color-light);
    }
    .add-btn {
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
  .error-message {
    font-size: 12px;
    font-weight: 600;
    color: #ea2f2f;
    margin-top: 10px;
  }
`;
