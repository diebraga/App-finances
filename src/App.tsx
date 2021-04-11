import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { Dashboard } from './components/Dashboard';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Dashboard />
        <Routes />
    </BrowserRouter>
  );
};

export default App;
