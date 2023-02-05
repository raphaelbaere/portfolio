import React from 'react';
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <div id="about-me">
        <h1>About me</h1>
        <div id="timeline">
          <div id="line"></div>
          <div id="time-years-container">
            <h4>2019</h4>
            <h4>2021</h4>
            <h4>2022</h4>
            <h4>2023</h4>
          </div>
          <div id="time-dot-container">
          <div className='time-dot'></div>
          <div className='time-dot'></div>
          <div className='time-dot'></div>
          <div className='time-dot'></div>
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