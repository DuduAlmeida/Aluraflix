import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch, 
  Route
} from 'react-router-dom';
import './index.css';
import App from './Pages/Home/Home';
import CadastroCategoria from './Pages/Cadastro/Categoria';
import CadastroVideo from './Pages/Cadastro/Video';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={() => (<div>404 error</div>)}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

