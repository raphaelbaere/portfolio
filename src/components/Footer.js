import React from 'react'
import '../styles/Footer.css'
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai'

function Footer() {
  return (
    <footer id="footer">
        <div class="contact-info">
            <h3>Me mande uma mensagem:</h3>
            <p>21936184249</p>
        </div>
        <div class="contact-info">
            <h3>Me mande um email:</h3>
            <p>raphaelbaere@id.uff.br</p>
        </div>
        <div class="social-media">
        <a href="https://github.com/raphaelbaere" target="_blank" rel="noreferrer">
            <BsGithub size={'30px'} color={'white'} />
          </a>
          <a href="https://linkedin.com/in/raphael-baere" target="_blank" rel="noreferrer">
            <AiFillLinkedin size={'30px'} color={'white'} />
          </a>
        </div>
    </footer>
  )
}

export default Footer