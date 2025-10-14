import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Home from './pages/main/Home'
import BlockOne from './pages/main/BlockOne'
import InfoOne from './pages/main/InfoOne'
import Projects from './pages/main/Projects'
import News from './pages/main/News'

function App() {

  return (
    <>
      <div className='App'>
        <Header />

        <div className="main">
          <div className="intro">
            <Home />
          </div>
          <div className="info_section">
            <BlockOne />
          </div>
          <div className="infoOne_secton">
            <InfoOne />
          </div>
          <Projects />
          <News />
        </div>

      </div>
    </>
  )
}

export default App
