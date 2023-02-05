import React from 'react';
import '../styles/AboutMe.css';
import YearsModal from './YearsModal';

function AboutMe() {
  return (
    <div id="about-me">
        <h1>Sobre mim</h1>
        <p>Clique nos pontos do tempo para saber mais!</p>
        <div id="timeline">
          <div id="line"></div>
          <div id="time-years-container">
            <h4>2019</h4>
            <h4>2021</h4>
            <h4>2022</h4>
            <h4>2023</h4>
          </div>
          <div id="time-dot-container">
          <YearsModal year="2019" yearDesc='Começo da faculdade de Odontologia na Universidade Federal Fluminense'/>
          <YearsModal year="2021" yearDesc='Iniciei os estudos em programação e me apaixonei.'/>
          <YearsModal year="2022" yearDesc='Conhecí a Trybe. Me encantei pelo curso e decidí trancar a Odontologia e entrar de cabeça no mundo da programação.'/>
          <YearsModal year="2023" yearDesc='Sinto que fiz a escolha certa. Aprendo todo dia mais e mais e não planejo parar tão cedo.'/>
          </div>
          <div id="time-description-container">
            <p>Começo da faculdade de Odontologia na Universidade Federal Fluminense</p>
            <p>Iniciei os estudos em programação e me apaixonei.</p>
            <p>Conhecí a Trybe. Me encantei pelo curso e decidí trancar a Odontologia e entrar de cabeça no mundo da programação.</p>
            <p>Sinto que fiz a escolha certa. Aprendo todo dia mais e mais e não planejo parar tão cedo.</p>
          </div>
        </div>
    </div>
  )
}

export default AboutMe