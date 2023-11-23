import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initFirestore } from './firebase/config.js'
// import './index.css'
initFirestore()

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

{/* <React.StrictMode>
  </React.StrictMode>, */}