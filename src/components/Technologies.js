import React from 'react'
import '../styles/Technologies.css'
import Skills from './Skills'

function Technologies() {
  return (
    <div id="skills">
        <h1>Habilidades</h1>
        <div data-aos="fade-right" id="hard-skills">
            <h2>HardSkills</h2>
            <div className='skills-container'>
                <Skills skill={'HTML'} percentage={'80'} />
                <Skills skill={'React'} percentage={'90'} />
                <Skills skill={'Javascript'} percentage={'85'} />
                <Skills skill={'CSS'} percentage={'80'} />
                <Skills skill={'SHELL'} percentage={'40'} />
                <Skills skill={'JEST'} percentage={'85'} />
                <Skills skill={'React Testing Library'} percentage={'85'} />
                <Skills skill={'Git & Github'} percentage={'90'} />
            </div>
        </div>
        <div data-aos="fade-left" id="soft-skills">
            <h2>SoftSkills</h2>
            <div className='skills-container'>
            <Skills skill={'Comunicação'} percentage={'90'} />
                <Skills skill={'Liderança'} percentage={'80'} />
                <Skills skill={'Adaptabilidade'} percentage={'95'} />
                <Skills skill={'Gestão de tempo'} percentage={'85'} />
                <Skills skill={'Empatia'} percentage={'90'} />
                <Skills skill={'Criatividade'} percentage={'95'} />
                <Skills skill={'Colaboração'} percentage={'95'} />
            </div>
        </div>
    </div>
  )
}

export default Technologies