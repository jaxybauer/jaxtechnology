import App from '@/App';
import '@/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');
// Non-null assertions hide exactly this failure until it surfaces as a blank
// white page with one line in the console. Say what went wrong instead.
if (!rootElement) {
  throw new Error('index.html is missing <div id="root">, so there is nowhere to mount the app.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
