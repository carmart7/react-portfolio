import React from 'react';
import { createRoot}from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './css/styles.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const root = createRoot(document.getElementById('root'));
root.render(<App />);

serviceWorkerRegistration.unregister();
