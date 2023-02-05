import React, { useEffect } from 'react'
import '../styles/Hero.css'
import Typewriter from 'typewriter-effect/dist/core';
import myFoto from '../images/myfoto.jpg'

function Hero() {
    useEffect(() => {
        new Typewriter('#title', {
            strings: ['Olá, eu sou o Raphael!', 'Você está aqui faz um tempo, hein!', 'Me manda uma mensagem, vai!', 'Você vai gostar de mim!'],
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
        <p>Tenho 21 anos, nascido no Brasil, no estado do Rio de Janeiro, mais especificamente na cidade de Belford Roxo. Atualmente, resido em Nova Iguaçu. Sou alegre, comunicativo, risonho e esforçado!</p>
        <p>Desde pequeno, sempre me ví rodeado pela tecnologia, e ela, sempre me fascinou. Nunca fui um garoto que brincava na rua, mas eu adorava brincar no meu computador. E foi assim, até hoje. Atualmente, transformei minha paixão no meu trabalho, algo de que posso me orgulhar.</p>
        <p>O caminho até aqui não foi fácil. Quando fui escolher meu curso na faculdade, visualizei apenas as com mais prestígio e fui com sede ao pote em Odontologia. Com o tempo, fui percebendo que aquela área não era minha paixão.</p>
        <p>E assim sendo, uma vez que realizei esse fato, não parei por nada até estar estudando algo que eu verdadeiramente estivesse apaixonado. E eu conseguí isso com a programação.</p>
        <p>Na Trybe, pude estudar o que eu amo em uma escola excepcional. Hoje, me orgulho da minha caminhada.</p>
      </div>
    </section>
  )
}

export default Hero