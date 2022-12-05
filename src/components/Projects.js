import React from 'react';
import Project from './Project'
import tempPic from '../images/tempSelfPic.jpg'

export default function Projects() {
    return (
      <div className="row d-flex justify-content-around">
        {/* this will contain multiple single projects */}

        <Project
          image={tempPic}
          projectName='Sounds Like All Over the World'
          repoLink="https://github.com/mattjgatsby/artist-event-and-rec"
          siteLink="https://mattjgatsby.github.io/artist-event-and-rec/"
        />
        <Project />
        <Project />
        <Project />
      </div>
    );
}