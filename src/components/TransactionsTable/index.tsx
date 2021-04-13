import { useContext } from 'react'
import { Container } from './styles';
import { TrasacrionContext } from '../../TrasactionContex'

export const TransactionsTable = (): JSX.Element => {
  const { transactions } = useContext(TrasacrionContext)
  
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
          {transactions.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td className={item.type}>
                {new Intl.NumberFormat('en-UK', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(item.amount)}
                </td>
                <td>{item.category}</td>
                <td>
                {new Intl.DateTimeFormat('en-UK').format(
                  new Date(item.createdAt)
                )}
                </td>
              </tr>
            )
          })}
        </tbody>        
      </table>
    </Container>
  );
};

