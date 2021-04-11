import { Container } from './styles';
import Modal from 'react-modal'

interface TransactionModalProps {
  modalIsOpen: boolean
  closeModal: () => void
}

export const TransactionModal = (props: TransactionModalProps): JSX.Element => {

  return (
    <>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        contentLabel="Example Modal"
        overlayClassName="react-modal-overlay"
        className="react-modal-content"  
      >
        <Container>
        <h2>Register transaction</h2>
        <>
          <input placeholder='title' />
          <input placeholder='amount' type='number' />
          <input placeholder='category' />
          <button type='submit'>
            cadastrar
          </button>

        </>
        </Container>
      </Modal>
    </>
  );
};

