import { Container } from './styles';
import { useEffect } from 'react'

export const TransactionsTable = (): JSX.Element => {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data))
  }, [])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Dev web</td>
            <td>$600</td>
            <td>dev</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>

        
      </table>
    </Container>
  );
};

