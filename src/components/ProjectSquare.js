import React from 'react'
import '../styles/ProjectSquare.css'

function ProjectSquare(props) {
    const {title, description, image, link} = props;
  return (
    <div className="project-squares">
        <img id="project-square-img" src={image} alt={`Project ${title}.`}></img>
        <h4>{title}</h4>
        <div></div>
        <p>{description}</p>
        <a href={link}>Dar uma olhada..</a>
    </div>
  )
}

export default ProjectSquare