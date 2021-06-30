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
  /*
    O 'categorias' printa a string que estiver dentro do useState()
    O 'setCategoria' altera o valor que fica dentro do useState()
  */
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor){ // essa função recebe o 'name' dos campos do formulário (chamados de chave) e um valor
    setValues({
      ...values, // os 3 pontos mantém o que está escrito e não o sobrescreve, e adiciona o valor novo
      [chave]: valor // pegamos todos os valores e mudamos só o valor da 'chave' que estamos recebendo. O colchetes transforma 'chave' em valor dinâmico, pois seu valor muda no formulário (nome, descricao, cor)
    })
  } 

  function handleChange(infosDoEvento){ // função genérica usada nos inputs
    setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value); // envia para a função "setValue" os valores do atributo 'name' dos campos de formulário e seu valor

    /*
      Poderíamos escrever essa função assim:

      const {getAttribute, value} = infosDoEvento.target;
      setValue( getAttribute('name'), value );
    */
  };

  return ( 

    <PageDefault>

      <h1>Cadastro de Categoria: { values.nome } </h1>


      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault(); // se não colocar esse comando, a página fica recarregando quando clicamos no botão 'cadastrar'
        setCategoria([
          ...categorias, // os 3 pontos mantém o que está escrito e não o sobrescreve, e adiciona o valor novo
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