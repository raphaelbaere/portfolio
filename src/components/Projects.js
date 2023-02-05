import React, { useState } from 'react';
import '../styles/Projects.css';
import trymer from '../images/trymer.png';
import coinweb from '../images/coinweb.png';
import BasicModal from './BasicModal';

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
        siteTitle: 'Trymer',
        siteDesc: 'O Trymer foi advindo de um desafio, proposto a nós, alunos da Trybe, pelo professor... nesse desafio, tivemos que criar um cronômetro ajustável, com as horas sendo definidas corretamente, utilizando dos componentes de Classe do React e seus ciclos de vida. Pessoalmente, é um dos meus projetos favoritos. Para criá-lo, senti bastante dificuldade com o código, mas nada que com bastante aprendizado eu não conseguisse realizar. Sinto-me bastante satisfeito com o resultado, tanto esteticamente quanto funcionalmente.',
        siteTech: ['React', 'HTML', 'CSS', 'Material UI', 'JavaScript'],
     } 
  , {
        srcImage: coinweb,
        borderColor: 'black',
        backgroundColor: 'black',
        color: 'white',
        srcRepo: 'https://github.com/raphaelbaere/CoinWeb',
        srcSite: '',
        siteTitle: 'CoinWeb',
        siteDesc: 'O CoinWeb surgiu de uma ideia bastante aleatória de minha parte. Após utilizar de uma API que realizava requisição do valor das criptomoedas, utilizei desse conhecimento para criar esse projeto. Seu design e organização é a parte que mais me dão orgulho. A mecânica de favoritar as moedas e também poder buscar por todas as moedas também me alegram!',
        siteTech: ['React', 'HTML', 'CSS', 'Material UI', 'JavaScript'],
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
                <BasicModal srcImage={ sitesArray[index].srcImage } siteDesc={ sitesArray[index].siteDesc } siteTitle={ sitesArray[index].siteTitle } siteTech={ sitesArray[index].siteTech } />
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