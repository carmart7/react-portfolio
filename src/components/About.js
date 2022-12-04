import React from 'react';
import photo from '../images/tempSelfPic.jpg'

export default function About() {
    return (
    <>
      <h2>Carlos Martinez</h2>
      <img src={photo} alt='carlos' className='rounded-circle avatar-img'/>
      <p>Some about me stuff I can fil out at a later date. Lorem ipsum dolor sit amet, consd ectetur adipiscing elit. Ut porttitor rutrum sapien, sit amet facilisis ipsum hendrerit id. Vestibulum non erat vel risus tincidunt iaculis non et tortor. Morbi dolor diam, egestas id est id, interdum maximus elit. Cras nec consectetur lectus. Morbi a dictum magna. Donec posuere pulvinar ante, vel lacinia ante rutrum vitae. Maecenas at metus rhoncus, pretium odio ac, pharetra lectus. Donec a orci ipsum. Suspendisse condimentum velit id elit venenatis pellentesque. Suspendisse diam elit, molestie nec maximus sed, elementum et velit.</p>
    </>
    );
}