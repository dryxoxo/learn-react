import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import StudentInfo from './components/StudentInfo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <StudentInfo name={"Baim"} age={21}/>
  </React.StrictMode>
)
