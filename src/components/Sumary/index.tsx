import IncomeImg from '../../assets/income.svg' 
import OutCome from '../../assets/outcome.svg' 
import TotalImg from '../../assets/total.svg' 

import { Container } from './styles';

export const Sumary = (): JSX.Element => {

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={IncomeImg} alt='income'/>
        </header>
        <strong>$1.0000</strong>
      </div>
      <div>
        <header>
          <p>Withdraw</p>
          <img src={OutCome} alt='outcome'/>
        </header>
        <strong>- $1.0000</strong>
      </div>
      <div>
        <header className='highlight-background'>
          <p>Total</p>
          <img src={TotalImg} alt='total'/>
        </header>
        <strong>$0</strong>
      </div>
    </Container>
  );
};

