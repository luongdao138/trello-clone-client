import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuWrapper = styled.div`
  width: 170px;
  position: absolute;
  z-index: 50;
  right: 0;
  top: 55px;
  background-color: var(--white-color);
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #e0e0e0;
  padding: 10px;
  z-index: 30;

  .divider {
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
  }
`;

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 8px 10px;
  margin: 6px 0;
  transition: all 0.25s ease-in-out;
  align-items: center;
  color: ${({ color }: { color: string }) => color};
  svg {
    margin-right: 10px;
  }

  span {
    font-weight: 500;
    font-size: 12px;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;
