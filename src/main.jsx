import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Make sure your CSS files are imported here or in App.jsx!
// import './assets/vendor/jqvmap/css/jqvmap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import './assets/scss/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);