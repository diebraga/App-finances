import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #f0f2f0;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
