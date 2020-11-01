import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '',
    }

    const [categorias, setCategoria] = useState(['']);
    /*
    O "useState" recebe dois parâmetros: um valor (categorias) e uma função (setCategoria).
    O "categorias" printa a string "Teste".
    O "setCategoria" altera o valor que fica dentro do "useState".
    */
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor){
      setValues({
        ...values,
        [chave]: valor
      })
    }

    function handleChange(infosDoEvento){
      const { getAttribute, value } = infosDoEvento.target;
      setValue(
        getAttribute('name'),
        value
      );
    }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: { values.nome } </h1>

        <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategoria([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais);
        }}>

        
        <FormField label="Nome da categoria" type="text" name="nome" value={values.nome} onChange = {handleChange} />
        
        <div>
            <label>
                Descrição:
                <textarea type="text" name="descricao" value={values.descricao} onChange = { handleChange } />
            </label>
        </div>

        <FormField label="Cor" type="color" name="cor" value={values.cor} onChange = {handleChange} />
        
        {/*<div>
            <label>
                Cor:
                <input type="color" name="cor" value={values.cor} onChange = { handleChange } />
            </label>
        </div>*/}

            
            <button>Cadastrar</button>
        </form>

        <ul>
          {categorias.map( (categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`} >
                {categoria.nome}
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