import React from 'react'
import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/main/Home'
import BlockOne from './pages/main/BlockOne'
import InfoOne from './pages/main/InfoOne'
import Projects from './pages/main/Projects'
import News from './pages/main/News'
import Sponsors from './pages/main/Sponsors'
import FAQ from './pages/main/FAQ'

function App() {
  const HomeRef = React.useRef(null);
  const AboutRef = React.useRef(null);
  const ProjectsRef = React.useRef(null);
  const NewsRef = React.useRef(null);
  const FAQRef = React.useRef(null);
  const ContactsRef = React.useRef(null);

  const sections = {
    home: HomeRef,
    about: AboutRef,
    projects: ProjectsRef,
    news: NewsRef,
    faq: FAQRef,
    contacts: ContactsRef
  }

  const onClickNav = (key) => {
    sections[key].current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      <div className='App'>
        <Header onNavClick={onClickNav}/>

        <div className="main">
          <div className="intro">
            <Home ref={HomeRef}/>
          </div>
          <div className="info_section">
            <BlockOne ref={AboutRef}/>
          </div>
          <div className="infoOne_secton">
            <InfoOne />
          </div>
          <Projects ref={ProjectsRef}/>
          <News ref={NewsRef}/>
          {/* <Sponsors /> */}
          <FAQ ref={FAQRef}/>
        </div>
        
        <Footer ref={ContactsRef}/>
      </div>
    </>
  )
}

export default App
