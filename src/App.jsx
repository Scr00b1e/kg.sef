import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Home from './pages/Home'
import BlockOne from './pages/BlockOne'

function App() {

  return (
    <>
      <div className='App'>
        <Header/>

        <div className="main">
          <div className="intro">
            <Home/>
          </div>
          <div className="info_section">
            <BlockOne/>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
