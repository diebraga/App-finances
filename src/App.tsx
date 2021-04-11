import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes />
    </BrowserRouter>
  );
};

export default App;
