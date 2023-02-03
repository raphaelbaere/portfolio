import React, { useEffect } from 'react'
import '../styles/Hero.css'
import Typewriter from 'typewriter-effect/dist/core';

function Hero() {
    useEffect(() => {
        new Typewriter('#title', {
            strings: ['Olá, eu sou o Raphael!', 'Você está aqui faz um tempo, hein!', 'Me manda uma mensagem, vai!', 'Você vai gostar de mim!'],
            autoStart: true,
            pauseFor: 80000,
            delay: 110,
            loop: true,
        })
        
    }, [])
  return (
    <section id="hero">
        <h1 id="title"> </h1>
        <p>Tenho 21 anos, nascido no Brasil, no estado do Rio de Janeiro, mais especificamente na cidade de Belford Roxo. Sou alegre, comunicativo, risonho e esforçado!</p>
    </section>
  )
}

export default Hero