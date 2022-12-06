import React from 'react';

// Here we destructure our props into their own distinct variables
export default function Header({ currentContent, setCurrentContent }) {
  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <header className='d-flex flex-wrap justify-content-around'>
      <h1>Carlos</h1>
      <nav className='d-flex flex-wrap justify-content-center'>
        <a href='#about' className={ currentContent === 'about' ? 'selected' : ''} onClick={() => setCurrentContent('about')}>About me</a>
        <a href='#projects' className={ currentContent === 'projects' ? 'selected' : ''} onClick={() => setCurrentContent('projects')}>Projects</a>
        <a href='#contact' className={ currentContent === 'contact' ? 'selected' : ''} onClick={() => setCurrentContent('contact')}>Contact</a>
        <a href='#resume' className={ currentContent === 'resume' ? 'selected' : ''} onClick={() => setCurrentContent('resume')}>Resume</a>
      </nav>
    </header>
  );
}
