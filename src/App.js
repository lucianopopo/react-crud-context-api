import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Noticias from './componentes/noticias/Noticias';
import AdicionaNoticia from './componentes/noticias/AdicionaNoticia';
import EditaNoticia from './componentes/noticias/EditaNoticia';
import Cabecalho from './componentes/layout/Cabecalho';
import Sobre from './componentes/paginas/Sobre';
import NaoEncontrada from './componentes/paginas/NaoEncontrada';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    // retorna o Provider com o componente Cabecalho e as Rotas de cada página
    return (
      <Provider>
        <Router>
          <div className="App">
            <Cabecalho branding="Últimas Notícias" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Noticias} />
                <Route
                  exact
                  path="/noticia/adiciona"
                  component={AdicionaNoticia}
                />
                <Route
                  exact
                  path="/noticia/edita/:id"
                  component={EditaNoticia}
                />
                <Route exact path="/sobre" component={Sobre} />
                <Route component={NaoEncontrada} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
