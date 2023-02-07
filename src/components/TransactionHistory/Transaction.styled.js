import styled from 'styled-components';
export const TransactionTable = styled.table`
  margin: 0 auto;
  width: 90%;
  border-collapse: collapse;
  border: 1px solid grey;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  @media (min-width: ${({ theme }) => theme.space.mobile}) {
    max-width: 600px;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const TableCaption = styled.thead`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.lightgrey};
  background-color: ${({ theme }) => theme.colors.teal};
`;
export const TableCaptionCeil = styled.th`
  padding: 10px 0;
  ont-size: ${({ theme }) => theme.fontSizes.l}
  width: 200px;
  border: 1px solid grey;
`;
export const TableBodyCeil = styled.td`
  padding: 10px 0;
  text-transform: capitalize;
  border: 1px solid grey;
  color: ${({ theme }) => theme.colors.darkgrey};
`;

export const TableBodyRow = styled.tr`
  :nth-child(even) {
    background-color: #ebe9e9;
  }
`;
