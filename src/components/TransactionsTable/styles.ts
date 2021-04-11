import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      padding: 1rem 2rem;
      font-weight: 400;
      line-height: 1.5rem;
      text-align: left;
      color: #878a87;
    }
    td {
      padding: 1rem 2rem;
      color: #878a87;
      background: #fff !important;
      border: 0;
      border-radius: 0.25rem;
      &:first-child {
        color: black;
      }
      &.deposit {
        color: #82bda1;
      }
      &.withdraw {
        color: red;
      }
    }
  }
`;
