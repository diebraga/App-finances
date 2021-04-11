import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { Dashboard } from './components/Dashboard';
import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const App = (): JSX.Element => {
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <BrowserRouter>
        <GlobalStyles />
        <Header openModal={openModal} />
        <Dashboard />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >

          <h2>Register transaction</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>

        <Routes />
    </BrowserRouter>
  );
};

export default App;
