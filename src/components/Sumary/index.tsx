import IncomeImg from '../../assets/income.svg' 
import OutCome from '../../assets/outcome.svg' 
import TotalImg from '../../assets/total.svg' 
import { useTransactions } from '../../hooks/TrasactionContex'

import { Container } from './styles';

export const Sumary = (): JSX.Element => {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });


  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={IncomeImg} alt='income'/>
        </header>
        <strong>- 
        {new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Withdraw</p>
          <img src={OutCome} alt='outcome'/>
        </header>
        <strong>- 
        {new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div style={{ background: '#82bda1', color: '#fff' }}>
        <header>
          <p>Total</p>
          <img src={TotalImg} alt='total'/>
        </header>
        <strong>- 
        {new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
};

