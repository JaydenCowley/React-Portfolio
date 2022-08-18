import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavTabs from './components/NavTabs';
import '@picocss/pico/css/pico.min.css'
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


