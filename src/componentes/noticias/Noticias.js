import React, { Component } from 'react';
import Noticia from './Noticia';
import { Consumer } from '../../context';

class Noticias extends Component {
  render() {
    // retorna o Consumer com o Fragment chamando o componente noticia
    return (
      <Consumer>
        {value => {
          const { noticias } = value;
          return (
            <React.Fragment>
              <h2 className="display-4 mb-2">
                Últimas <span className="text-danger">Notícias</span>
              </h2>
              {noticias.map(noticia => (
                <Noticia key={noticia.id} noticia={noticia} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Noticias;
