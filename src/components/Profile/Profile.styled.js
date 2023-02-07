import styled from 'styled-components';

export const ProfileBox = styled.div`
  width: 90%;
  margin: 0 auto 70px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.small};
  border-radius: ${({ theme }) => theme.radii.normal};
  transition: transform 250ms ease, box-shadow 250ms ease;
  @media (min-width: ${({ theme }) => theme.space.mobile}) {
    max-width: 400px;
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.regular};
  }
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px 0;
`;
export const Portrait = styled.img`
  background-color: ${({ theme }) => theme.colors.lightblue};
  width: 180px;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.radii.round};
`;

export const AboutInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkgrey};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.dark};
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid lightgrey;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkgrey};
  background-color: ${({ theme }) => theme.colors.lightgrey};
`;
export const StatsItem = styled.li`
  flex-basis: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 0;
  &:not(:last-child) {
    border-right: 1px solid lightgrey;
  }
`;
export const StatsQuantity = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.dark};
`;
