import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About'
import Projects from './components/Projects'

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
      return <h2>Contact page</h2>
      // return <Contact />
    } else if (currentContent === 'resume') {
      return <h2>Resume page</h2>
      // return <Resume />
    }
  }

  return (
    <>
      <Header currentContent={currentContent} setCurrentContent={setCurrentContent} />;
      <main>
        {returnContent()}
      </main>
    </>
  )
}

export default App;
