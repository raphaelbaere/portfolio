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
          <a href="#">Projects</a>
          <a href="#">Technologies</a>
          <a href="#">About me</a>
        </nav>
        <div id="img-links">
          <a href="#">
            <BsGithub size={'30px'} color={'white'} />
          </a>
          <a href="#">
            <AiFillLinkedin size={'30px'} color={'white'} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
