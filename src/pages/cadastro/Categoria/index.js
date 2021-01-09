import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '',
  }
  const [categorias, setCategoria] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor
    })
  } 

  function handleChange(infosDoEvento){
    setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
  };

  return ( 

    <PageDefault>

      <h1>Cadastro de Categoria: { values.nome } </h1>


      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategoria([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais);
      }}>


      <div>

          {/*<label>

              Nome da Categoria: 

              <input type="text" name="nome" value={values.nome}

              onChange = {handleChange}  />

          </label> */}

          <FormField label="Nome da categoria" type="textarea" name="nome" value={values.nome} onChange = {handleChange} />


          {/*<label> 

              Descrição: 

              <textarea type="text" name="descricao" value={values.descricao} 

              onChange = {handleChange} /> 

          </label> */}

          <FormField label="Descricao" type="text" name="descricao" value={values.descricao} onChange = {handleChange} />


          {/*<label> 

              Cor: 

              <input type="color" name="cor" value={values.cor} 

              onChange = {handleChange} />

          </label> */}
          <FormField label="Cor" type="color" name="cor" value={values.cor} onChange = {handleChange} />

      </div> 




           

          <button>Cadastrar</button> 

      </form>

      <ul> 

          {categorias.map( (categoria, indice) => { 

            return ( 

              <li key={`${categoria}${indice}`}> 

                {categoria.nome}

              </li> 

            ) 

          } )} 

      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;