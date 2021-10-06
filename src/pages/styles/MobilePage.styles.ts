import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 24px;
    text-align: center;
    line-height: 32px;
    font-weight: 500;
    color: var(--dark-color);
    margin-bottom: 10px;

    @media (max-width: 500px) {
      font-size: 18px;
    }
  }

  .subtitle {
    text-align: center;
    @media (max-width: 500px) {
      font-size: 10px;
    }
  }
`;
