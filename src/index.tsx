import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Lesson06 from "./lessons/lesson06/Lesson06";
import Homework03 from "./homeworks/homework03/Homework03";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    {/* <App /> */}
    <Lesson06/>
  </>
);


reportWebVitals();
