import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--white-color);
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  .cover-photo {
    width: 100%;
    max-height: 150px;
    border-radius: 12px;
    object-fit: cover;
    margin-bottom: 5px;
  }
  .title {
    font-size: 16px;
    font-weight: 500;
    color: var(--text-color);
    margin-bottom: 10px;
  }

  .labels-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info {
      margin-left: 10px;
      display: flex;
      align-items: center;

      .item {
        display: flex;
        align-items: center;

        font-size: 10px;
        color: var(--sec-color);
        margin-left: 8px;
        svg {
          margin-right: 3px;
        }
      }
    }
  }
  .members-wrapper {
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }

    button {
      svg {
        font-size: 14px;
      }
    }

    .more {
      color: var(--sec-color);
      font-size: 10px;
      font-weight: 500;
      display: block;
      margin-right: 10px;
    }
  }
`;

export const Label = styled.span`
  color: ${({ color }: { color: string }) => color};
  background-color: ${({ color }: { color: string }) => `${color}20`};
  border-radius: 12px;
  font-weight: 500;
  font-size: 10px;
  display: block;
  padding: 0 8px;
  margin-right: 10px;
`;
