import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from "./HelloWorldApp";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorldApp id={'10'} title="Soy el título"/>
  </React.StrictMode>
)
  