import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav from './components/Nav'
import Card from './components/Card'
import ListDigimon from './components/ListDigimon'

function App() {
  return (
    <>
    <Nav />
    <div className="container mt-3">
      <div className="row">
        <ListDigimon />
      </div>
    </div>
    </>
  )
}

export default App
