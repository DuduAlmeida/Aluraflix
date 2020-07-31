import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Layout';

function CadastroVideo() {
  return (
    <Layout>
      <h1>Cadastro de Video</h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </Layout>
  )
}

export default CadastroVideo; 