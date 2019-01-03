import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import TextAreaGroup from '../layout/TextAreaGroup';
import axios from 'axios';

class AdicionaNoticia extends Component {
  // inicia o state com dados vazios
  state = {
    title: '',
    body: '',
    errors: {}
  };

  // função onSubmit que é chamada ao enviar o formulário
  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { title, body } = this.state;

    // checa por campo vazio
    if (title === '') {
      this.setState({ errors: { title: 'O título é obrigatório' } });
      return;
    }

    if (body === '') {
      this.setState({ errors: { body: 'A notícia é obrigatória' } });
      return;
    }

    // cria a variável que receberá os dados do formulário
    const novaNoticia = {
      title,
      body
    };

    // chama a API passando os dados da notícia para o método POST
    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      novaNoticia
    );

    // chama o dispach definido no context
    dispatch({ type: 'ADICIONA_NOTICIA', payload: res.data });

    // limpa o state
    this.setState({
      title: '',
      body: '',
      errors: {}
    });

    // retorna à página inicial após enviar os dados
    this.props.history.push('/');
  };

  // função que atualiza o campo ao digitar
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { title, body, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                <h4>Adicionar Notícia</h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Título"
                    name="title"
                    placeholder="Digite o título"
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}
                  />
                  <TextAreaGroup
                    label="Notícia"
                    name="body"
                    rows="10"
                    value={body}
                    onChange={this.onChange}
                    error={errors.body}
                  />
                  <input
                    type="submit"
                    value="Adicionar Notícia"
                    className="btn btn-secondary btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AdicionaNoticia;
