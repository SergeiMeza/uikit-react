import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

if (process.env.NODE_ENV === 'production') {
  console.table = function () {}
  console.log = function () {}
  console.error = function () {}
  console.debug = function () {}
  console.info = function () {}
  console.time = function () {}
  console.timeEnd = function () {}
}

ReactDOM.render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
