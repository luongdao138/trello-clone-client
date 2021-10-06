import styled from 'styled-components';
export const Wrapper = styled.div`
  background-color: var(--white-color);
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  padding: 10px;
  cursor: pointer;

  .cover {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
    border-radius: 12px;
  }

  .title {
    color: var(--text-color);
    font-size: 16px;
    font-weight: 500;
    margin: 2px 0 16px 0;
  }

  .people-wrapper {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      object-fit: cover;
      margin-right: 6px;
    }

    span.more {
      color: var(--sec-color);
      font-size: 12px;
      font-weight: 500;
      margin-left: 4px;
    }
  }
`;
