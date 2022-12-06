import React from 'react';
import photo from '../images/tempSelfPic.jpg'

export default function About() {
    return (
    <>
      <h2>Carlos Martinez</h2>
      <img src={photo} alt='carlos' className='rounded-circle avatar-img'/>
      <p>Hey there, welcome to my portfolio site! As you could probably already tell my name is Carlos Martinez and I'm an aspiring Web Developer with a passion for video games. If you're looking to contact me feel free to use email me or send me a message on my LinkedIn found in the footer below and on the contact page.</p>
    </>
    );
}