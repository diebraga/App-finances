import { Container } from './styles';
import { useEffect } from 'react'
import { api } from '../../services/api';

export const TransactionsTable = (): JSX.Element => {
  useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data))
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

