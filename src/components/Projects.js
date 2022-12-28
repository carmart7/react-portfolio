import React from 'react';
import Project from './Project';
import soundsLikePic from '../images/soundsLike.png';
import chatoramaPic from '../images/chatters.png';
import glassifyPic from '../images/glassifylogo.png';

export default function Projects() {
    return (
      <div className="row d-flex justify-content-around">
        {/* this will contain multiple single projects */}

        <Project
          image={soundsLikePic}
          projectName="Sounds Like All Over the World"
          repoLink="https://github.com/mattjgatsby/artist-event-and-rec"
          siteLink="https://mattjgatsby.github.io/artist-event-and-rec/"
        />
        <Project
          image={chatoramaPic}
          projectName="Chatorama - Live Chatrooms"
          repoLink="https://github.com/KevinPXu/Chatorama"
          siteLink=""
        />
        <Project
        image={glassifyPic}
        projectName="Glassify"
        repoLink="https://github.com/teedaa/glassify"
        siteLink="https://glassify.herokuapp.com/" 
        />
        <Project />
      </div>
    );
}