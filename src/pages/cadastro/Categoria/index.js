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

    function setValue(chave, valor){
      setValues({
        ...values,
        [chave]: valor
      })
    }

    function handleChange(infosDoEvento){
      setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
    }

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
                <input type="text" name="nome" value={values['nome']} onChange = { handleChange } />
            </label>

            <label>
                Descrição:
                <textarea type="text" name="descricao" value={values.descricao} onChange = { handleChange } />
            </label>

            <label>
                Cor:
                <input type="color" name="cor" value={values.cor} onChange = { handleChange } />
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