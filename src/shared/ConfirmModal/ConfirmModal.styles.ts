import styled from 'styled-components';

export const Wrapper = styled.div`
  .title {
    font-size: 14px;
    font-weight: 600;
    color: var(--dark-color);
  }

  .btn-wrapper {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;

    button {
      font-size: 10px;
      font-weight: 500;
      border-radius: 8px;
      padding: 2px 14px 2px 10px;
    }
    .cancel {
      background-color: transparent;
      color: var(--sec-color-light);
    }
    .ok {
      background-color: var(--pri-color);
      color: var(--white-color);
    }
  }
`;
