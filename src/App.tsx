import GlobalStyles from './styles/global';
import Header from './components/Header';
import { Dashboard } from './components/Dashboard';
import React, { useState } from 'react'
import Modal from 'react-modal'
import { TransactionModal } from './components/TransactionModal';

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
    <>
        <GlobalStyles />
        <Header openModal={openModal} />
        <Dashboard />
        <TransactionModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
    </>
  );
};

export default App;
