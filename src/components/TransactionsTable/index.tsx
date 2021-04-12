import { Container } from './styles';
import { useEffect, useState } from 'react'
import { api } from '../../services/api';

interface TransactionsProps {
  id: number
  title: string
  amount: number
  category: string
  createdAt: string
  type: string
}

export const TransactionsTable = (): JSX.Element => {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
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
          {transactions.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td className={item.type}>{item.amount}</td>
                <td>{item.category}</td>
                <td>{item.createdAt}</td>
              </tr>
            )
          })}
        </tbody>        
      </table>
    </Container>
  );
};

