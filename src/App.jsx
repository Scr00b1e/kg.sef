import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Home from './pages/Home'

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
            {/* <Home/> */}
          </div>
        </div>

      </div>
    </>
  )
}

export default App
