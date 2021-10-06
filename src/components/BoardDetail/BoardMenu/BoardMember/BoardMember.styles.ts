import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 15px;
  .member-list {
    padding-right: 10px;
    max-height: 200px;
    overflow-y: auto;
    margin-top: 15px;
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
  }
`;

export const MemberItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  :last-child {
    margin-bottom: 0;
  }
  .left {
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
    span {
      color: var(--dark-color);
      font-weight: 600;
      font-size: 12px;
    }
  }
  .right {
    margin-left: 20px;
    .remove {
      border: 1px solid #eb5757;
      border-radius: 8px;
      background-color: var(--white-color);
      color: #eb5757;
      padding: 0 8px;
      font-size: 10px;
      font-weight: 500;
    }

    .admin {
      color: var(--sec-color);
      font-size: 10px;
      font-weight: 500;
    }

    .mem {
      color: var(--dark-color);
      font-size: 10px;
      font-weight: 500;
    }
  }
`;
