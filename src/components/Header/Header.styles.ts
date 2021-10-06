import { Action } from '@reduxjs/toolkit';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: var(--white-color);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  height: 70px;
  position: fixed;
  z-index: 100;
  top: 0;
  .left {
    flex-grow: 1;
    display: flex;
    /* align-items: center; */
    a.logo {
    }

    .detail {
      margin-left: 40px;
      display: flex;
      align-items: center;
      .title {
        font-weight: 500;
        color: var(--dark-color);
        font-size: 18px;
      }
      .divider {
        width: 1.25px;
        height: 100%;
        background-color: #f2f2f2;
        margin: 0 15px;
      }
      button {
        display: flex;
        align-items: center;
        padding: 5px 10px;
        background-color: #f2f2f2;
        color: var(--sec-color-light);
        font-size: 12px;
        font-weight: 500;
        border-radius: 8px;
        svg {
          font-size: 20px;
          margin-right: 5px;
        }
      }

      @media (max-width: 800px) {
        display: none;
      }
    }
  }
`;
export const MenuWrapper = styled.div`
  position: relative;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;

  img.avatar {
    margin-right: 10px;
  }

  .username {
    margin-right: 15px;
    color: var(--dark-color);
    font-size: 12px;
    font-weight: 700;
  }

  svg {
    color: var(--dark-color);
  }
`;
