import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(<BrowserRouter forceRefresh={true}><App /></BrowserRouter>, document.getElementById('root'))
