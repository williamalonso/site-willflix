import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {

    const [categorias, setCategoria] = useState(['Teste']);
    const valoresIniciais = {
      nome: 'Nome Inicial',
      descricao: 'Descrição Inicial',
      cor: '#000',
    }
    const [values, setValues] = useState(valoresIniciais);

    return(
      <PageDefault>
        <h1>Cadastro de Categoria: { values.nome } </h1>

        <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategoria([
            ...categorias,
            values
          ]);
        }}>

        <div>
            <label>
                Nome da Categoria:
                <input type="text" value={values.nome}
                onChange = { function funcaoQueOerroPediu(infosDoEvento){
                  setValues(infosDoEvento.target.value);
                }} />
            </label>

            <label>
                Descrição:
                <textarea type="text" value={values.descricao}
                onChange = { function funcaoQueOerroPediu(infosDoEvento){
                  setValues(infosDoEvento.target.value);
                }} />
            </label>

            <label>
                Cor:
                <input type="color" value={values.cor}
                onChange = { function funcaoQueOerroPediu(infosDoEvento){
                  setValues(infosDoEvento.target.value);
                }} />
            </label>
        </div>

            
            <button>Cadastrar</button>
        </form>

        <ul>
          {categorias.map( (categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`} >
                {categoria}
              </li>
            )
          } )}
        </ul>

        <Link to="/">
          Ir para Home
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;