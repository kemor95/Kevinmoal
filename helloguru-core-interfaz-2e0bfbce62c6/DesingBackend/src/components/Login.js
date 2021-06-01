//Dependencias
import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import { Link } from 'react-router-dom';

//CSS
import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logoHG-02.svg';

/*Pagina principal con navegacion y Modal de Sign in*/
class Login extends Component{
    //State Modals
    state={
        modalLogin:false,
        modalRegistro:false,
    }
    //open/close modals
    selectModalRegistro=()=>{
        this.setState({modalRegistro: !this.state.modalRegistro});
    }
    selectModalLogin=(usuario)=>{
        this.setState({modalLogin: !this.state.modalLogin, form: usuario});
    }

    render() {
        return (
            <div className = "App-principal" >
                <div className = "Button-groupsRight" >
                    <Link to="/" className = "btn btn-dark">
                        Nosotros
                    </Link>
                    <Link to="/CreateApp" className = "btn btn-dark">
                        Academia
                    </Link>
                    <Link to="/Atributos" className= "btn btn-dark">
                        Tablas
                    </Link>
                    <Button className = "btn btn-dark" onClick={this.selectModalLogin}>Iniciar sesión</Button>
                    <Button className = "btn btn-danger" onClick={this.selectModalRegistro}>Registrarse</Button>
                </div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>


                <Modal isOpen={this.state.modalLogin}>
                    <ModalHeader>
                        Iniciar sesion en Hello Tool
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label>Correo</Label>
                            <Input type="text" name="user"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Contraseña</Label>
                            <Input type="password" name="new-pass"></Input>
                        </FormGroup>
                        <Button color="link">¿Olvidaste tu contraseña?</Button>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.selectModalLogin}>Cancelar</Button>
                        <Link to="/CreateApp" className="btn btn-danger">
                            Iniciar sesión
                        </Link>
                    </ModalFooter>
                </Modal>


                <Modal isOpen={this.state.modalRegistro}>
                    <ModalHeader>
                        Registrarse en Hello Tool
                    </ModalHeader>
                    <ModalBody>
                    <FormGroup>
                            <Label>Correo</Label>
                            <Input type="text" name="user"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Contraseña</Label>
                            <Input type="password" name="new-pass"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Confirmar contraseña</Label>
                            <Input type="password" name="repeat-pass"></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.selectModalRegistro}>Cancelar</Button>
                        <Link to="/CreateApp" className="btn btn-danger">
                        Registrar
                        </Link>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Login;