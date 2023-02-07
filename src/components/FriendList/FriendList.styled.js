import styled from 'styled-components';

export const FriendListBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 300px;
  margin: 0 auto 70px;
  @media (min-width: ${({ theme }) => theme.space.mobile}) {
    max-width: 400px;
  }
`;
