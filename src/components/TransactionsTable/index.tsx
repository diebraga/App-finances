import { Container } from './styles';

export const TransactionsTable = (): JSX.Element => {

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

