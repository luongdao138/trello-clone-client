import styled from 'styled-components';

export const LabelWrapper = styled.div`
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

  .label-input {
    background-color: var(--white-color);
    padding: 10px;
    padding: 5px 12px;
    margin: 10px 0;
    flex: 1;
    font-size: 10px;
    font-weight: 500;
    color: var(--text-color);
    border-radius: 8px;
    width: 100%;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    ::placeholder {
      color: var(--sec-color);
    }
  }

  .colors {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }
  .available {
    margin-top: 10px;
    .top {
      display: flex;
      align-items: center;
      color: var(--sec-color);
      font-size: 10px;
      font-weight: 600;

      svg {
        margin-right: 5px;
      }
    }

    .items {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .btn-wrapper {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    button {
      background: var(--pri-color);
      border-radius: 8px;
      height: 100%;
      font-size: 10px;
      font-weight: 500;
      color: var(--white-color);
      padding: 4px 25px;
    }
  }
`;

export const ColorItem = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 4px;
  height: 25px;
  cursor: pointer;
  display: flex;
  svg {
    margin: auto;
    font-size: 20px;
    color: var(--white-color);
  }
`;

export const LabelItem = styled.span`
  color: ${({ color }) => color};
  background-color: ${({ color }) => `${color}20`};
  border-radius: 8px;
  margin-right: 10px;
  padding: 0 10px;
  font-size: 10px;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 10px;
  position: relative;

  svg {
    position: absolute;
    top: -4px;
    right: -2px;
    cursor: pointer;
  }
`;
