import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import rootReducer from './redux/reducers'
import reportWebVitals from './reportWebVitals';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './assets/css/grid.css';
import './assets/css/index.css';
import Layouts from './components/layouts/Layouts';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Provider } from 'react-redux';
const store = createStore(
  rootReducer
)

document.title = 'Admin Dashbord'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Layouts/>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
