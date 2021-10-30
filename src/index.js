import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Router } from 'react-router-dom';
import { compose, createStore } from 'redux';
import contactReducer from './redux/reducers/ContactReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
 
const store = createStore(contactReducer,composeWithDevTools())
ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


