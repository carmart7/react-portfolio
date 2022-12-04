import React from 'react';

// Here we destructure our props into their own distinct variables
export default function Header({ currentContent, setCurrentContent }) {
  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <header className="d-flex justify-content-around">
      <h1>Carlos</h1>
      <nav>
        <a href='#about' onClick={() => setCurrentContent('about')}>About me</a>
        <a href='#projects' onClick={() => setCurrentContent('projects')}>Portfolio</a>
        <a href='#contact' onClick={() => setCurrentContent('contact')}>Contact</a>
        <a href='#resume' onClick={() => setCurrentContent('resume')}>Resume</a>
      </nav>
    </header>
  );
}
