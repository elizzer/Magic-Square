import React from 'react';
import ReactDOM from 'react-dom';
import {MagicSquareContextProvider} from './context/magicSquareContext';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <MagicSquareContextProvider>
      <App/>
    </MagicSquareContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

