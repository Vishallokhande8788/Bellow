import React from 'react';
import { createRoot } from 'react-dom/client';

import "./index.css";
import App from './App';

const rootEl = document.querySelector('#App');
const root = createRoot(rootEl);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode> 
);
