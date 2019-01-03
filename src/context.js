import React, { Component } from 'react';
import axios from 'axios';

// cria o Context para gerenciar os dados
const Context = React.createContext();

// reducer com as ações definidas para deletar, adicionar e atualizar a notícia
const reducer = (state, action) => {
  switch (action.type) {
    // ação definida para filtrar a noticia deletada na lista de notícias
    case 'DELETA_NOTICIA':
      return {
        ...state,
        noticias: state.noticias.filter(
          noticia => noticia.id !== action.payload
        )
      };
    // ação para adicionar a noticia passando os dados do formulário para o state
    case 'ADICIONA_NOTICIA':
      return {
        ...state,
        noticias: [action.payload, ...state.noticias]
      };
    // ação para atualizar a noticia passando os dados do formulário para o state cujo id é o id da notícia atualizada
    case 'ATUALIZA_NOTICIA':
      return {
        ...state,
        noticias: state.noticias.map(noticia =>
          noticia.id === action.payload.id
            ? (noticia = action.payload)
            : noticia
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  // inicia o state com o array de notícias vazio
  state = {
    noticias: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  // método componentDidMount que é chamado ao carregar a página setando os dados da API pelo método GET
  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

    // seta o state com os dados vindos da API
    this.setState({ noticias: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
