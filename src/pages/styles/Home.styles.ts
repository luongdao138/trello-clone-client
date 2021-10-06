import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  max-width: 1100px;
  margin: auto;
  margin-top: 30px;

  .btn-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    span {
      font-weight: 500;
      font-size: 18px;
      color: var(--dark-color);
    }

    .bottom {
      display: flex;
      align-items: center;
    }

    button {
      background: var(--pri-color);
      border-radius: 8px;
      height: 100%;
      font-size: 10px;
      font-weight: 500;
      color: var(--white-color);
      padding: 5px 15px;
      display: flex;
      align-items: center;
      svg {
        margin-right: 4px;
      }
    }

    .join-btn {
      margin-left: 15px;
    }
  }
`;
export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
