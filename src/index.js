import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Evento from "./components/Eventos"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Evento numero="1" />
    <Evento numero ="2"></Evento>
  </React.StrictMode>
);
