import React from 'react'
import '../styles/Skills.css'

function Skills(props) {
    const {skill, percentage} = props;
  return (
    <div className="skills">
        <h4>{skill}</h4>
        <div className="skills-div1">
            <div style={{ width: `${percentage}%`, height: '15px', borderRadius: '84px' , background: "linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%)",
 }}></div>
        </div>
    </div>
  )
}

export default Skills