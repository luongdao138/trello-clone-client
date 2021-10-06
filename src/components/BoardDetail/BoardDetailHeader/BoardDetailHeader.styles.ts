import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .visibility {
    margin-right: 10px;
    position: relative;
  }

  .members-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    margin-right: 10px;
    ::-webkit-scrollbar {
      height: 0;
    }

    img {
      margin-right: 10px;
    }
  }
  .mem-selector {
    position: relative;
  }
`;
export const Button = styled.button`
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 12px;
  color: var(--sec-color-light);
  font-weight: 500;
  svg {
    margin: 5px;
  }
`;
