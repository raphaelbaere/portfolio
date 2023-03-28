import React, { useState } from 'react';
import '../styles/Projects.css';
import trymer from '../images/trymer.png';
import coinweb from '../images/coinweb.png';
import BasicModal from './BasicModal';
import detective from '../images/detectivePixel.png';
import recipesApp from '../images/recipesapp.png';
import tryvia from '../images/tryvia.png';
import bentevi from '../images/bentevi.png';

function Projects() {
  const [index, setIndex] = useState(0);
  const sitesArray = [
    {
      srcImage: bentevi,
      borderColor: 'white',
      backgroundColor: 'white',
      color: 'black',
      srcRepo: 'https://github.com/raphaelbaere/bentevi',
      srcSite: 'https://bentevi.netlify.app',
      siteTitle: 'Bentevi',
      siteDesc: 'O Bentevi foi criado para simular uma rede social. Conta com funcionalidades como adicionar posts, curtir, comentar, excluir.. Analisar seu perfil e o perfil de outros usuários.',
      siteTech: ['React', 'HTML', 'CSS', 'Material UI', 'JavaScript'],
     } 
  ,
    {
      srcImage: trymer,
      borderColor: 'white',
      backgroundColor: 'white',
      color: 'black',
      srcRepo: 'https://github.com/raphaelbaere/trymer/tree/main',
      srcSite: 'https://trymer.netlify.app',
      siteTitle: 'Trymer',
      siteDesc: 'O Trymer foi advindo de um desafio, proposto a nós, alunos da Trybe, pelo professor... nesse desafio, tivemos que criar um cronômetro ajustável, com as horas sendo definidas corretamente, utilizando dos componentes de Classe do React e seus ciclos de vida. Pessoalmente, é um dos meus projetos favoritos. Para criá-lo, senti bastante dificuldade com o código, mas nada que com bastante aprendizado eu não conseguisse realizar. Sinto-me bastante satisfeito com o resultado, tanto esteticamente quanto funcionalmente.',
      siteTech: ['React', 'HTML', 'CSS', 'Material UI', 'JavaScript'],
     } 
  ,
     {
      srcImage: recipesApp,
      borderColor: 'black',
      backgroundColor: 'black',
      color: 'white',
      srcRepo: 'https://github.com/raphaelbaere/recipes-app',
      srcSite: 'https://recipes-app-website.netlify.app/',
      siteTitle: 'Recipes APP',
      siteDesc: 'O Recipes APP foi mais um projeto de muitos que eu fiz na Trybe. Porém, ele foi especial. Além do seu design sere exclusivamente mobile, o app foi criado pelo meu grupo designado aleatóriamente pela Trybe e fiquei muito satisfeito com meus colegas de equipe. Conseguimos trabalhar em grupo para montar esse lindo e funcional aplicativo de receitas em pouquíssimo tempo.',
      siteTech: ['HTML', 'CSS', 'JavaScript', 'React', 'Context API', 'Styled Components'],
    },
    {
      srcImage: coinweb,
      borderColor: 'black',
      backgroundColor: 'black',
      color: 'white',
      srcRepo: 'https://github.com/raphaelbaere/CoinWeb',
      srcSite: 'https://coinwebsite.netlify.app',
      siteTitle: 'CoinWeb',
      siteDesc: 'O CoinWeb surgiu de uma ideia bastante aleatória de minha parte. Após utilizar de uma API que realizava requisição do valor das criptomoedas, utilizei desse conhecimento para criar esse projeto. Seu design e organização é a parte que mais me dão orgulho. A mecânica de favoritar as moedas e também poder buscar por todas as moedas também me alegram!',
      siteTech: ['React', 'HTML', 'CSS', 'Material UI', 'JavaScript'],
    },
    {
      srcImage: detective,
      borderColor: 'white',
      backgroundColor: 'white',
      color: 'black',
      srcRepo: 'https://github.com/raphaelbaere/CRPG-GAME',
      srcSite: 'https://rp-game-demo.netlify.app',
      siteTitle: 'Detective Pixel',
      siteDesc: 'O Detective Pixel é uma melhora de um jogo que eu previamente criei. Ele não possui muitas mecânicas de combate, mas tem um sistema de diálogos com npc, mudanças de mapa, movimentação etc.. É feito puramente em JavaScript. Um site que simula um jogo RPG!',
      siteTech: ['HTML', 'CSS', 'JavaScript'],
  },
{
  srcImage: tryvia,
  borderColor: 'black',
  backgroundColor: 'black',
  color: 'white',
  srcRepo: 'https://github.com/raphaelbaere/tryvia-react-redux',
  srcSite: 'https://tryvia-react-redux.netlify.app/',
  siteTitle: 'Tryvia',
  siteDesc: 'O Tryvia APP foi mais um projeto em grupo que eu realizei na Trybe e mais uma vez eu me dei muito bem com os meus colegas de equipe. Conseguimos montar esse aplicativo de jogo de pergunta e respostas também em tempo recorde e ainda tivemos de apresentá-lo para a equipe da Trybe. Foi uma experiência construtiva e satisfatória.',
  siteTech: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
}
];

  const nextSite = () => {
    if (index + 1 > sitesArray.length - 1) return;
    if (index >= 0) setIndex(index + 1);
  }

  const backSite = () => {
    if ( index !== 0) setIndex(index - 1);
  }
  return (
    <div id="projects">
        <h1 id="projects-title">Projetos</h1>
        <p>Clique na imagem para saber mais!</p>
        <div data-aos="fade-right" id="projects-carousel">
                <div
                data-aos="zoom-in"
                id="left-arrow"
                onClick={ backSite }
                style={{ borderColor: sitesArray[index].borderColor, borderWidth: '0 6px 6px 0' }}
                >
                </div>
                <BasicModal srcImage={ sitesArray[index].srcImage } siteDesc={ sitesArray[index].siteDesc } siteTitle={ sitesArray[index].siteTitle } siteTech={ sitesArray[index].siteTech } />
                <div
                data-aos="zoom-in"
                id="right-arrow"
                onClick={ nextSite }
                style={{ borderColor: sitesArray[index].borderColor, borderWidth: '0 6px 6px 0' }}
                >
                </div>
                <a
                href={sitesArray[index].srcSite }
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