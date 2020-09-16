import React from 'react';

function ButtonLink(props){
    //props => { className = "O que alguém enviar", href = "/"}
    console.log(props); //equivalente ao 'dd' do PHP
    return(
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;