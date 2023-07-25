import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {Welcome} from './pages/Welcome';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Welcome />
    </React.StrictMode>,
  );
}
