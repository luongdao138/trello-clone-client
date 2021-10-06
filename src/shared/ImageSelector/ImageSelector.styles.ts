import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  /* left: 0; */
  z-index: 20;
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

  .message {
    font-size: 12px;
    font-weight: 500;
  }

  .title-form {
    display: flex;
    margin-top: 15px;
    margin-bottom: 20px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    form {
      width: 100%;
      display: flex;
    }

    input {
      background-color: var(--white-color);
      padding: 10px;
      padding: 6px 12px;
      flex: 1;
      font-size: 10px;
      font-weight: 500;
      color: var(--text-color);
      ::placeholder {
        color: var(--sec-color);
      }
    }
    button {
      padding: 5px 10px;
      border-radius: 8px;
      color: var(--white-color);
      background-color: var(--pri-color);
      display: flex;
      align-items: center;
      font-size: 16px;
    }
  }

  .image-wrapper {
    width: 100%;
    max-height: 160px;
    padding-right: 5px;
    overflow-y: auto;

    .infinite-scroll-component {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
      gap: 10px;
    }
    img {
      width: 100%;
      height: 50px;
      border-radius: 4px;
      object-fit: cover;
      cursor: pointer;
    }
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--sec-color);
      border-radius: 30px;
    }
  }
`;
