import { Container } from './styles';
import Modal from 'react-modal'

interface TransactionModalProps {
  modalIsOpen: boolean
  closeModal: () => void
}

export const TransactionModal = (props: TransactionModalProps): JSX.Element => {

  return (
    <Container>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        contentLabel="Example Modal"
      >

        <h2>Register transaction</h2>
        <button onClick={props.closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </Container>
  );
};

