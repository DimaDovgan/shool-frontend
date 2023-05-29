import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store,{persistor} from './redux/store';
import { Provider } from "react-redux";
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* basename="/test2-goit-react-hw-08-phonebook" */}
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter   >
        <App />
        </BrowserRouter>
        </PersistGate>
      </Provider>
      
  </React.StrictMode>
);

