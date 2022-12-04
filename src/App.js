import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  // state that determines which portion of content is loaded at the bottom of the page
  const [currentContent, setCurrentContent] = useState('about');

  // We return the Welcome component and pass loggedIn and setLoggedIn as props.
  return <Header currentContent={currentContent} setCurrentContent={setCurrentContent} />;
}

export default App;
