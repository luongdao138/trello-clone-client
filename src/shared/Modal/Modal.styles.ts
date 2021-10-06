import styled from 'styled-components';
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1000;
  height: 100%;
`;
export const Content = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--white-color);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 15px;
  position: 20;
  .close-modal {
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    background-color: #9d9c9c;
    position: absolute;
    top: -12px;
    right: -12px;
    color: var(--white-color);

    svg {
      margin: auto;
    }
  }
`;
