import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About'

function App() {
  // state that determines which portion of content is loaded at the bottom of the page
  const [currentContent, setCurrentContent] = useState('about');
  function returnContent() {
    if (currentContent === 'about') {
      return <About />
    } else if (currentContent === 'projects') {
      return <h2>Projects page</h2>
      // return <Projects />
    } else if (currentContent === 'contact') {
      return <h2>Contact page</h2>
      // return <Contact />
    } else if (currentContent === 'resume') {
      return <h2>Resume page</h2>
      // return <Resume />
    }
  }
  // We return the Welcome component and pass loggedIn and setLoggedIn as props.
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
