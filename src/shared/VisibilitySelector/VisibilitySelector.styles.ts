import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  z-index: 20;
  background-color: var(--white-color);
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  width: 300px;
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
`;

export const Option = styled.div`
  margin-top: 20px;
  border-radius: 12px;
  padding: 10px;
  background-color: ${({ active }: { active: boolean }) =>
    active ? '#f2f2f2' : 'var(--white-color)'};
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  :hover {
    background-color: #f2f2f2;
  }

  .top {
    display: flex;
    align-items: center;
    color: #4f4f4f;
    svg {
      margin-right: 10px;
      font-size: 16px;
    }
    span {
      font-weight: 500;
    }
  }

  .bottom {
    color: var(--sec-color-light);
    font-size: 10px;
    font-weight: normal;
  }
`;
