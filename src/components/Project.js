import React from 'react';
import { FaGithub } from "react-icons/fa";



export default function Project({ image, projectName, repoLink, siteLink }) {
    return (
        <div className='col-5 project-box' style={{ backgroundImage: `url(${image})`}}>
            <h3>{projectName}</h3>
            {repoLink ? (<h4><a className='fade-in project-link' href={repoLink}>Repository <FaGithub/> </a></h4>) : (<></>)}
            {siteLink ? ( <h4><a className='fade-in project-link' href={siteLink}>Deployed Site</a></h4>) : (<></>)}
        </div>
    )
}