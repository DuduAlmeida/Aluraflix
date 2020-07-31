import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/img/Aluraflix.png"
import "./Header.css"
import {Button} from '../Button';
// import ButtonLink from '../ButtonLink';


function Header() {
  return (
    <header>
      <nav className="Menu">

        <Link  to="/">
          <img src={Logo} alt="AluraFlix logo" className="Logo" />
        </Link >

        <Button 
          as={Link} 
          className="ButtonLink" 
          to="/cadastro/video">
          Novo vídeo
        </Button>
        
        {/* <ButtonLink
          href="/"
          className="ButtonLink">
          Novo Vídeo
        </ButtonLink> */}
      </nav>
    </header>
  );
}

export default Header;