import GlobalStyles from './styles/global';
import Header from './components/Header';
import { Dashboard } from './components/Dashboard';
import { useState } from 'react'
import Modal from 'react-modal'
import { TransactionModal } from './components/TransactionModal';
import { TrasacrionProvider } from './hooks/TrasactionContex'
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
    <TrasacrionProvider>
      <GlobalStyles />
      <Header openModal={openModal} />
      <Dashboard />
      <TransactionModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
    </TrasacrionProvider>
  );
};

export default App;
