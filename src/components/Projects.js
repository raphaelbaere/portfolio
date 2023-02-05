import React, { useState } from 'react';
import '../styles/Projects.css';
import trymer from '../images/trymer.png';
import coinweb from '../images/coinweb.png';

function Projects() {
  const [index, setIndex] = useState(0);
  const sitesArray = [
    {
        srcImage: trymer,
        borderColor: 'white',
        backgroundColor: 'white',
        color: 'black',
        srcRepo: 'https://github.com/raphaelbaere/raphaelbaere.github.io',
        srcSite: '',
     } 
  , {
        srcImage: coinweb,
        borderColor: 'black',
        backgroundColor: 'black',
        color: 'white',
        srcRepo: 'https://github.com/raphaelbaere/CoinWeb',
        srcSite: '', 
    }
];

  const nextSite = () => {
    if (index === 0) setIndex(index + 1);
  }

  const backSite = () => {
    if ( index === 1) setIndex(index - 1);
  }
  return (
    <div id="projects">
        <h1 id="projects-title">Projetos</h1>
        <p>Clique na imagem para saber mais!</p>
        <div id="projects-carousel">
                <div
                id="left-arrow"
                onClick={ backSite }
                style={{ borderColor: sitesArray[index].borderColor, borderWidth: '0 6px 6px 0' }}
                >
                </div>
                <img src={ sitesArray[index].srcImage } alt="project" />
                <div
                id="right-arrow"
                onClick={ nextSite }
                style={{ borderColor: sitesArray[index].borderColor, borderWidth: '0 6px 6px 0' }}
                >
                </div>
                <a
                href={sitesArray[index].srcRepo }
                id="site-link"
                style={{ backgroundColor: sitesArray[index].backgroundColor, color: sitesArray[index].color }}
                target='_blank'
                rel='noreferrer'
                >
                Veja o site!
                </a>
                <a
                href={sitesArray[index].srcRepo }
                id="repo-link"
                target='_blank'
                rel='noreferrer'
                style={{ backgroundColor: sitesArray[index].backgroundColor, color: sitesArray[index].color }}
                >
                Repositório
                </a>
        </div>
    </div>
  )
}

export default Projects