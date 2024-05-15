import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Document from "./ReactDom/document";
import LaunchApp from "./ReactDom/launchapp";
import DashBoard from "./ReactDom/dashboard";
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes>
         <Route path="/" element={<App/>} />
        <Route path="/document" element={<Document />} />
        <Route path="/launchapp" element={<LaunchApp />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
