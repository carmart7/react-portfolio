import React from 'react';
import About from './about'

// Here we destructure our props into their own distinct variables
export default function Header({ currentContent, setCurrentContent }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log('Welcome -> loggedIn', currentContent);
  function returnContent() {
    if (currentContent === 'about') {
      return <About />
    } else if (currentContent === 'portfolio') {
      return <h2>Portfolio page</h2>
      // return <Portfolio />
    } else if (currentContent === 'contact') {
      return <h2>Contact page</h2>
      // return <Contact />
    } else if (currentContent === 'resume') {
      return <h2>Resume page</h2>
      // return <Resume />
    }
  }

  

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <>
      <header className="d-flex justify-content-around">
        <h1>Carlos</h1>
        <nav>
          <a href='#about' onClick={() => setCurrentContent('about')}>About me</a>
          <a href='#portfolio' onClick={() => setCurrentContent('portfolio')}>Portfolio</a>
          <a href='#contact' onClick={() => setCurrentContent('contact')}>Contact</a>
          <a href='#resume' onClick={() => setCurrentContent('resume')}>Resume</a>
        </nav>
      </header>
      <main>
        {returnContent()}
      </main>
    </>
  );
}
