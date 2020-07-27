import React from 'react';
import Logo from "../../assets/img/Esmerarflix.png"
import "./Menu.css"
import ButtonLink from '../ButtonLink';
// import { Container } from './styles';

function Header() {
  return (
    <header>
      <nav className="Menu">

        <a href="/">
          <img src={Logo} alt="EsmerarFlix logo" className="Logo" />
        </a>


        <ButtonLink
          href="/"
          className="ButtonLink">
          Novo Vídeo
        </ButtonLink>
      </nav>
    </header>
  );
}

export default Header;