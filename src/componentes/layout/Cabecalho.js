import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cabecalho = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/noticia/adiciona" className="nav-link">
                <i className="fas fa-plus" /> Adicionar Notícia
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sobre" className="nav-link">
                <i className="fas fa-question" /> Sobre
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Cabecalho.defaultProps = {
  branding: 'POC Crud'
};

Cabecalho.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Cabecalho;
