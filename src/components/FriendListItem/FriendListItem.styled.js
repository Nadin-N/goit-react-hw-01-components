import styled from 'styled-components';

export const FriendStatus = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: ${({ theme }) => theme.radii.round};
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.3);
  }
`;
export const FriendAvatar = styled.img`
  border-radius: ${({ theme }) => theme.radii.normal};
  background-color: ${({ theme }) => theme.colors.lightgrey};
  transition: transform 100ms ease, box-shadow 250ms ease;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.regular};
    transform: scale(1.05);
  }
`;
export const FriendName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkgrey};
  transition: color 250ms ease, font-size 250ms ease;
  //   &:hover {
  //     color: ${({ theme }) => theme.colors.accent};
  //   }
`;
export const FriendItem = styled.li`
  display: flex;
  column-gap: 25px;
  align-items: center;
  max-width: 300px;
  padding: 18px 25px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.small};
  border-radius: ${({ theme }) => theme.radii.normal};
  transition: transform 250ms ease, box-shadow 250ms ease;
  @media (min-width: ${({ theme }) => theme.space.mobile}) {
    max-width: 500px;
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.regular};
  }
  &:hover ${FriendName} {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
