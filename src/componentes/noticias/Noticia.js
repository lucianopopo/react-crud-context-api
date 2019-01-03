import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Noticia extends Component {
  // função chamada ao clicar no ícone de deletar
  onDeleteClick = async (id, dispatch) => {
    try {
      // chama a API passando o id da notícia para o método DELETE
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      // chama o dispach definido no context
      dispatch({ type: 'DELETA_NOTICIA', payload: id });
    } catch (e) {
      // chama o dispach definido no context mesmo se falhar
      dispatch({ type: 'DELETA_NOTICIA', payload: id });
    }
  };

  render() {
    const { id, title, body } = this.props.noticia;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {title}{' '}
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`noticia/edita/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h4>
              <p>{body}</p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// define o PropTypes setando o objeto noticia como requerido
Noticia.propTypes = {
  noticia: PropTypes.object.isRequired
};

export default Noticia;
