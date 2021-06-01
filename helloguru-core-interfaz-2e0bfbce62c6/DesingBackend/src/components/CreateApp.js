//Dependencias
import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import { Link } from 'react-router-dom';

//CSS
import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class CreateApp extends Component{
    state={
        abierto: false,
    }

    seleccionarBtn=()=>{
        this.setState({abierto: !this.state.abierto});
    }

    render() {
        return (
            <div className = "App-principal" >
                <header className="App-header">
                    <p className="title">Welcome Hello Tool</p>
                </header>
                <div >
                    <Button color="danger" size="lg" onClick={this.seleccionarBtn}>Crear nueva App</Button>
                </div>

                
                <Modal isOpen={this.state.abierto}>
                    <ModalHeader>
                        Crear tu app
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="ID">Nombre de la nueva app</Label>
                            <Input type="text" id="id"></Input>
                        </FormGroup>                       
                        <FormGroup>
                            <Label for="Usuario">Usuario</Label>
                            <Input type="text" id="user"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="Contraseña">Contraseña</Label>
                            <Input type="text" id="pass"></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.seleccionarBtn}>Cancelar</Button>
                        <Link to="/DesignDB" id="user" className = "btn btn-danger">
                            Crear App
                        </Link>
                    </ModalFooter>
                </Modal>
                
                
            </div>
        );
        
    }

}

export default CreateApp;