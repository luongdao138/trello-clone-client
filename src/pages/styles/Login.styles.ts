import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;

  .login-wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #effcff;

    .main-title {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 30px;
    }

    .sub-title {
      font-size: 18px;
      font-weight: 300;
      color: #effcff;
      margin-bottom: 20px;
    }

    .error-message {
      font-size: 12px;
      font-weight: 600;
      color: #8c0000;
      margin-bottom: 10px;
    }
    form {
      width: 100%;
    }
    input {
      width: 100%;
      padding: 10px 15px;
      margin-bottom: 12px;
      border-radius: 30px;
      background-color: #73868f;
      color: #effcff;
      font-weight: 500;

      ::placeholder {
        color: #d1d7d8;
      }
    }

    button.btn {
      border-radius: 30px;
      width: 100%;
      padding: 10px;
      background-color: #f4cfb7;
      color: #52413b;
      text-transform: uppercase;
      font-weight: 500;
    }

    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      font-size: 13px;
      font-weight: 500;
      margin: 10px 0 20px 0;

      .remember {
        display: flex;
        align-items: center;
        /* font-size: 13px; */
        color: #f4cfb7;
        svg {
          font-size: 18px;
          margin-right: 4px;
        }
      }

      a {
        color: #effcff;
      }
    }

    .other-options {
      font-size: 14px;
      color: #effcff;
      font-weight: 500;
      margin-bottom: 15px;
    }

    .btn-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      button {
        width: 48%;
        padding: 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
`;
