import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mapbox-gl/dist/mapbox-gl.css';
import { BasicProvider } from './context/BasicContext';
import { SpotProvider } from './context/SpotContext';
import { ProfileProvider } from './context/ProfileContext';

ReactDOM.render(
  <React.StrictMode>
    <ProfileProvider>
      <SpotProvider>
        <BasicProvider>
          <App />
        </BasicProvider>
      </SpotProvider>
    </ProfileProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
