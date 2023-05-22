import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

export const CastItem = styled.li`
  margin-bottom: 25px;
`;
