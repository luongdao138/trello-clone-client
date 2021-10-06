import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--white-color);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 70px;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 350px;
  transition: all 0.25s ease-in-out;
  transform-origin: 100%;
  padding: 15px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: var(--sec-color);
  }
  ::-webkit-scrollbar-track {
    border-radius: 30px;
    background-color: #f3f3f3;
  }

  transform: ${({ open }: { open: boolean }) =>
    open ? 'scaleX(1)' : 'scaleX(0)'};

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: var(--dark-color);

    .code {
      font-size: 10px;
      font-weight: 500;
    }

    p.title {
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }

    svg {
      font-size: 20px;
      cursor: pointer;
    }
  }

  .divider {
    height: 1px;
    width: 100%;
    background-color: #e0e0e0;
    margin: 10px 0;
  }
  .admin {
    margin-bottom: 10px;
    .bottom {
      margin-top: 8px;
      display: flex;
      align-items: center;

      img {
        margin-right: 10px;
      }

      .info {
        display: flex;
        flex-direction: column;

        /* align-items: flex-start;
        justify-content: flex-start; */
        .admin_name {
          color: var(--dark-color);
          font-size: 12px;
          font-weight: 600;
          margin-bottom: -5px;
        }

        .date {
          color: var(--sec-color);
          font-size: 10px;
          font-weight: 600;
        }
      }
    }
  }
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  color: var(--sec-color);
  span {
    font-size: 10px;
    font-weight: 600;
  }

  svg {
    margin-right: 6px;
  }
`;
