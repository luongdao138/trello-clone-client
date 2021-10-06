import styled from 'styled-components';

export const CardModalWrapper = styled.div`
  max-width: 100%;
  width: 600px;
  margin: auto;
  background-color: var(--white-color);
  height: 10vh;
  height: 90vh;
  overflow: auto;
  position: relative;
  padding-right: 5px;

  .cover-wrapper {
    img {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
      border-radius: 12px;
    }
    position: relative;

    .close {
      width: 32px;
      height: 32px;
      display: flex;
      border-radius: 8px;
      background-color: var(--pri-color);
      position: absolute;
      top: 0;
      right: 0;
      z-index: 10;
      cursor: pointer;

      svg {
        margin: auto;
        color: var(--white-color);
        font-size: 18px;
      }
    }
  }

  .main {
    display: flex;
    margin-top: 12px;
    .left {
      margin-right: 12px;
      flex: 2.4;
    }

    .right {
      flex: 1;

      .group {
        margin-bottom: 20px;
        :last-child {
          margin-bottom: 0;
        }
      }

      .save-changes {
        width: 100%;
        padding: 7px 15px;
        border-radius: 8px;
        background: var(--pri-color);
        color: var(--white-color);
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: var(--sec-color);
  font-weight: 600;
  font-size: 10px;
  svg {
    font-size: 16px;
    margin-right: 6px;
  }
  margin-bottom: 12px;
`;

export const ActionButton = styled.button`
  width: 100%;
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 7px 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  color: var(--sec-color-light);

  span {
    font-weight: 500;
    font-size: 12px;
  }

  svg {
    font-size: 16px;
    margin-right: 8px;
  }
`;
