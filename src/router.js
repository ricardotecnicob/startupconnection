import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil';
import Vercrescimento from './pages/Vercrescimento';
import Negociacoes from './pages/Negociacoes';

const Rotas = () => {
    return(
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard"  component={Dashboard} /> 
        <Route path="/perfil"  component={Perfil} /> 
        <Route path="/vercrescimento"  component={Vercrescimento} />
        <Route path="/negociacoes"  component={Negociacoes} />
        {/* <Route path="/premios" exact component={Premios} />  */}


        <Route >404</Route>

      </Switch>
    )
}

export default Rotas;