import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
  background-color: var(--bg-color);
  border-radius: 12px;
  margin-top: 20px;
  padding: 15px;
  display: flex;
  align-items: flex-start;

  ::-webkit-scrollbar {
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: #bfc4ce;
  }

  ::-webkit-scrollbar-track {
    background-color: #dadbe2;
  }

  .collapse {
    min-width: 280px;
    display: flex;
    flex-direction: column;
  }
  .add-wrapper {
    min-width: 280px;

    textarea {
      width: 100%;
      outline: none;
      border: 2px solid var(--pri-color);
      padding: 10px;
      resize: none;
      border-radius: 8px;
      height: 80px;
      font-weight: 500;
      font-size: 16px;
    }

    .btn-wrapper {
      margin-top: 10px;
      display: flex;
      align-items: center;
      button {
        background: var(--pri-color);
        border-radius: 8px;
        height: 100%;
        font-size: 10px;
        font-weight: 500;
        color: var(--white-color);
        padding: 5px 15px;
        margin-right: 10px;
      }
      svg {
        font-size: 20px;
        color: var(--dark-color);
        cursor: pointer;
      }
    }
  }
`;

export const AddMoreButton = styled.button`
  min-width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border-radius: 8px;
  background: #dae4fd;
  color: var(--pri-color);
  span {
    font-weight: 500;
    font-size: 12px;
  }

  svg {
    font-size: 20px;
  }
`;
