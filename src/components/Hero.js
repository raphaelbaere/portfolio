import React, { useEffect } from 'react'
import '../styles/Hero.css'
import Typewriter from 'typewriter-effect/dist/core';
import myFoto from '../images/myfoto.jpg'

function Hero() {
    useEffect(() => {
        new Typewriter('#title', {
            strings: ['Olá, eu sou o Raphael!', 'Você está aqui faz um tempo, hein!', 'Entre em contato!', 'Você vai gostar de mim!'],
            autoStart: true,
            pauseFor: 15000,
            delay: 110,
            loop: true,
        })
        
    }, [])
  return (
    <section id="hero">
      <img src={myFoto} alt="Raphael Baere" />
      <div class="hero-container">
        <h1 id="title"> </h1>
        <p>Tenho <strong>21 anos</strong>, nascido no Brasil, no estado do <strong>Rio de Janeiro</strong>, mais especificamente na cidade de Belford Roxo. Atualmente, resido em Nova Iguaçu.</p>
        <p>Desde pequeno, sempre me vi rodeado pela tecnologia, e ela, sempre me fascinou. Atualmente, transformei minha <strong>paixão</strong> no meu <strong>trabalho</strong>, algo de que posso me orgulhar.</p>
        <p>O <strong>caminho</strong> até aqui não foi fácil. Quando fui escolher meu <strong>curso</strong> na faculdade, visualizei apenas as áreas com mais prestígio e acabei entrando no “mundo” da <strong>Odontologia</strong>. Com o tempo, fui percebendo que não me identificava tanto pelo curso.</p>
        <p>Sendo assim, quando tive essa percepção, procurei incansavelmente estudar algo que eu estivesse verdadeiramente <strong>apaixonado</strong>. E eu consegui isso com a <strong>programação</strong>.</p>
        <p>Na <strong>Trybe</strong>, pude estudar o que eu amo em uma escola excepcional. Hoje, me orgulho da minha <strong>caminhada</strong>.</p>
      </div>
    </section>
  )
}

export default Hero