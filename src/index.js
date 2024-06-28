import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseProvider } from './context/Firebase';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <FirebaseProvider>
      <App />
  </FirebaseProvider>,
  document.getElementById('root')
);


