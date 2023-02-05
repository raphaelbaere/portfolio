import '../styles/Header.css';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai'
import { GiAbstract014 } from 'react-icons/gi';

function Header() {
  return (
    <header>
      <div id="header-container">
        <div id="logo">
          <GiAbstract014 size={'30px'} color={'white'} />
          <p>Portfolio</p>
        </div>
        <nav>
          <a href="#projects">Projetos</a>
          <a href="#skills">Habilidades</a>
          <a href="#about-me">Sobre mim</a>
          <a href="#footer">Contato</a>
        </nav>
        <div id="img-links">
          <a href="https://github.com/raphaelbaere" target="_blank" rel="noreferrer">
            <BsGithub size={'30px'} color={'white'} />
          </a>
          <a href="https://linkedin.com/in/raphael-baere" target="_blank" rel="noreferrer">
            <AiFillLinkedin size={'30px'} color={'white'} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
