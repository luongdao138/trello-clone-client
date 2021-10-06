import styled from 'styled-components';

export const Avatar = styled.img`
  width: ${({ width }: { width: string }) => width};
  height: ${({ width }: { width: string }) => width};
  border-radius: 6px;
  object-fit: cover;
`;

export const AddButton = styled.button`
  border-radius: 8px;
  width: 32px;
  height: 32px;
  background-color: var(--pri-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white-color);
  svg {
    font-size: 20px;
  }
`;
