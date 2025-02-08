import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance measuring
reportWebVitals();
