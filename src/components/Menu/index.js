import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import { Link } from 'react-router-dom'; // para utilizar o SPA

//import ButtonLink from './components/ButtonLink';

import './Menu.css';

function Menu(){
    return(
        <nav className="Menu"> 
            <Link to="/"> {/* substitui a tag <a href="/">...</a> para utilizar SPA */}
                <img className="Logo" src={Logo} alt="Willflix logo" />
            </Link>
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;