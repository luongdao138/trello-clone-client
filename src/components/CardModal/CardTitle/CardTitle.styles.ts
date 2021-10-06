import styled from 'styled-components';

export const CardTitleWrapper = styled.div`
  margin-bottom: 20px;
  p.title {
    font-size: 16px;
    color: var(--text-color);
    font-weight: 500;
    margin-bottom: -4px;
  }

  input {
    width: 100%;
    font-size: 16px;
    color: var(--text-color);
    font-weight: 500;
  }

  span.list {
    color: var(--sec-color);
    font-size: 10px;
    font-weight: 600;

    span {
      color: var(--text-color);
      font-weight: 600;
    }
  }
`;
