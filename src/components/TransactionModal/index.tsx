import { Container, TransactionTypeContainer, RadioBox } from './styles';
import Modal from 'react-modal'
import closeSvg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

interface TransactionModalProps {
  modalIsOpen: boolean
  closeModal: () => void
}

export const TransactionModal = (props: TransactionModalProps): JSX.Element => {
  const [type, setType] = useState('deposit')

  return (
    <>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        contentLabel="Example Modal"
        overlayClassName="react-modal-overlay"
        className="react-modal-content"  
      >
        <button type="button" onClick={props.closeModal} className="react-modal-close">
          <img src={closeSvg} alt=""/>
        </button>
        <Container>
        <h2>Register transaction</h2>
        <>
          <input placeholder='title' />
          <input placeholder='amount' type='number' />
          <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
          </TransactionTypeContainer>
          <input placeholder='category' />
          <button type='submit'>
            submit
          </button>

        </>
        </Container>
      </Modal>
    </>
  );
};

