import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  /* left: 0; */
  z-index: 50;
  background-color: var(--white-color);
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  width: 250px;

  .close {
    position: absolute;
    right: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
    border-radius: 4px;
  }

  .title {
    font-weight: 600;
    color: #4f4f4f;
    font-size: 12px;
  }

  .sub-title {
    font-weight: normal;
    color: var(--sec-color-light);
    font-size: 12px;
  }

  form {
    position: relative;
    background-color: var(--white-color);
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    padding: 3px 4px;
    display: flex;
    margin-top: 20px;
    input {
      padding: 2px 10px;
      font-weight: 500;
      color: var(--text-color);
      font-size: 10px;
      flex: 1;

      ::placeholder {
        color: var(--sec-color);
      }
    }
    button {
      background: var(--pri-color);
      border-radius: 8px;
      height: 100%;
      font-size: 10px;
      font-weight: 500;
      color: var(--white-color);
      padding: 7px 8px;
      font-size: 16px;
      display: flex;
      align-items: center;
    }
  }

  .btn-wrapper {
    display: flex;
    margin-top: 20px;
    justify-content: center;
    .invite-btn {
      border-radius: 8px;
      background-color: var(--pri-color);
      padding: 4px 20px;
      color: var(--white-color);
      font-size: 10px;
      font-weight: 500;
    }
  }

  .mems-wrapper {
    max-height: 150px;
    overflow-y: auto;
    margin-top: 10px;
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--sec-color);
      border-radius: 30px;
    }
  }
`;

export const Person = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;

  :first-child {
    margin-top: 0;
  }

  :hover {
    background-color: #f2f2f2;
  }
  span.name {
    font-size: 12px;
    color: var(--dark-color);
    font-weight: 600;
    margin-left: 10px;
  }
`;
