import { Container, TransactionTypeContainer, RadioBox } from './styles';
import Modal from 'react-modal'
import closeSvg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState, FormEvent, useContext } from 'react';
import { api } from '../../services/api';
import { TrasacrionContext } from '../../TrasactionContex'

interface TransactionModalProps {
  modalIsOpen: boolean
  closeModal: () => void
}

export const TransactionModal = (props: TransactionModalProps): JSX.Element => {
  const { createTransaction } = useContext(TrasacrionContext)

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  function handleTransaction(event: FormEvent) {
    event.preventDefault()

    createTransaction({
      title,
      category,
      type,
      amount: value,
    })
  }

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
          <input 
            placeholder='title'
            value={title}
            onChange={event => setTitle(event.target.value)} />
          <input 
            placeholder='amount' 
            type='number'
            value={value}
            onChange={event => setValue(Number(event.target.value))} />
          <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="income" />
            <span>income</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="outcome" />
            <span>outcome</span>
          </RadioBox>
          </TransactionTypeContainer>
          <input 
            placeholder='category'
            value={category}
            onChange={event => setCategory(event.target.value)} />
          <button type='submit' onClick={handleTransaction}>
            submit
          </button>

        </>
        </Container>
      </Modal>
    </>
  );
};

