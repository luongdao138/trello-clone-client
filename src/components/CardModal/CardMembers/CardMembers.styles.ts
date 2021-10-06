import styled from 'styled-components';

export const Wrapper = styled.div`
  .assign-mem {
    position: relative;
    .assign-btn {
      margin-top: 25px;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      padding: 7px 15px;
      border-radius: 8px;
      background: #dae4fd;
      color: var(--pri-color);
      span {
        font-size: 12px;
        font-weight: 500;
      }
      svg {
        font-size: 18px;
      }
    }
  }
`;

export const MemItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  img {
    margin-right: 15px;
  }
  .username {
    color: var(--dark-color);
    font-size: 12px;
    font-weight: 600;
  }
`;
