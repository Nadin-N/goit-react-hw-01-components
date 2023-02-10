import styled from 'styled-components';

export const StatisticBox = styled.section`
  width: 90%;
  margin: 0 auto 70px;
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
`;
export const StatisticTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkgrey};
  text-transform: uppercase;
  text-align: center;
  padding: 30px 0;
`;
export const StatisticList = styled.ul`
  display: flex;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.darkgrey}
font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-top: 1px solid lightgrey;
`;
export const StatListItem = styled.li`
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.lightgrey};
  text-shadow: 3px 3px 3px black;
  &:not(:last-child) {
    border-right: 1px solid lightgrey;
  }
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
  }
  &:first-child {
    border-bottom-left-radius: ${({ theme }) => theme.radii.normal};
  }
  &:last-child {
    border-bottom-right-radius: ${({ theme }) => theme.radii.normal};
  }
`;
export const Percentage = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.l};
  @media (min-width: ${({ theme }) => theme.space.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;
