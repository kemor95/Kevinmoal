//Dependencias
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

//CSS
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importar componentes
import Login from './components/Login';
import CreateApp from './components/CreateApp';
import DesignDB from './components/DesignDB';
import Atributos from './components/Atributos';
import prueba from './components/prueba';

class App extends Component{
    render(){
        return ( 
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/Login" component={Login} />
                        <Route exact path="/CreateApp" component={CreateApp} />
                        <Route exact path="/DesignDB" component={DesignDB} />
                        <Route exact path="/Atributos" component={Atributos}/>
                        <Route exact path="/prueba" components={prueba}/>
                        <Route exact path="/" component={Login} />
                    </Switch>
            </BrowserRouter> 
        );
    }
}

export default App;

