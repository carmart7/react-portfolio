import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  // state that determines which portion of content is loaded at the bottom of the page
  const [currentContent, setCurrentContent] = useState('about');
  window.addEventListener('load', () => {
    if (window.location.hash === '#projects') {
      setCurrentContent('projects');
    } else if (window.location.hash === '#contact') {
      setCurrentContent('contact');
    } else if (window.location.hash === '#resume') {
      setCurrentContent('resume');
    }
  });
  
  function returnContent() {
    if (currentContent === 'about') {
      return <About />
    } else if (currentContent === 'projects') {
      return <Projects />
    } else if (currentContent === 'contact') {
      return <Contact />
    } else if (currentContent === 'resume') {
      return <Resume />
    }
  }

  return (
    <>
      <div className='wrapper'>
        <Header currentContent={currentContent} setCurrentContent={setCurrentContent} />
        <main>
          {returnContent()}
        </main>
      </div>
      {/* include footer outside of wrapper eventually */}
      <Footer />
    </>
  )
}

export default App;
