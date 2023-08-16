import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import StadiumInfoProvider from './context/StadiumInfoContext';
import UserProvider from './context/UserContext';
import FutureBDProvider from './context/FutureBreakDownContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <StadiumInfoProvider>
    <UserProvider>
      <FutureBDProvider>
        <App />
      </FutureBDProvider>
    </UserProvider>
  </StadiumInfoProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
