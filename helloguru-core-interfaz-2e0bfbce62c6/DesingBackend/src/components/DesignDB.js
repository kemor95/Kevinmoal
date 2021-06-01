//Dependencias
import React, { Component } from 'react';
import {Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import { Link } from 'react-router-dom';

//CSS
import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const data =[
    {id:1, name:"user"},
    {id:2, name:"users"},
    {id:3, name:"userx"},
    {id:4, name:"usert"},
    {id:5, name:"userm"},
];

class DesignDB extends Component{
    state={
        data: data,
        form:{
            id:'',
            name:''
        },
        modalInsertar:false,
        modalEditar:false,
    };
    
    //open/close modals
    selectModalInsert=()=>{
        this.setState({modalInsertar: !this.state.modalInsertar});
    }
    selectModalEdit=(registro)=>{
        this.setState({modalEditar: !this.state.modalEditar, form: registro});
    }
    //actualiza el estado del cambio actual en pantalla
    handleChange=e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,                
            }
        });
    }
    //metodo de insertar registro
    insertar=()=>{
        var valorNuevo={...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista=this.state.data;
        lista.push(valorNuevo);
        this.setState({data: lista, modalInsertar: false});
    }
    //metodo de editar registro
    editar=(dato)=>{
        var cont=0; //controla pos
        var lista=this.state.data; //almacenar lista
        lista.map((registro)=>{ //recorrer lista para comparar id a editar con id de existencia
            if(dato.id==registro.id){
                lista[cont].name=dato.name;
            }
            cont++;
        });
        this.setState({data: lista, modalEditar: false});
    }
    //metodo de eliminar registro
    eliminar=(dato)=>{
        var opcion=window.confirm("Dese eliminar el registro: "+dato.id);
        if(opcion){
            var cont=0; //controla pos
            var lista=this.state.data; //almacenar lista
            lista.map((registro)=>{ //recorrer lista para comparar id a eliminar con id de existencia
                if(dato.id==registro.id){
                    lista.splice(cont, 1);
                }
                cont++;
            });
            this.setState({data: lista, modalEditar: false});
        }
    }

    render() {
        return(
            <div className = "App-principal" >
                <div className = "Button-groupsLeft" >
                    <Link to="/DesignDB" className = "btn btn-dark">
                        Database
                    </Link>
                    <Link to="/DesignDB" className = "btn btn-dark">
                        Data Type
                    </Link>
                    <Link to="/DesignDB" className = "btn btn-dark">
                        Security
                    </Link>
                </div>
                <br /><br />
                <Button color="success" onClick={this.selectModalInsert}>Insertar nueva tabla</Button>
                <br /><br />


                <Table dark hover responsive>
                    <thead><tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr></thead>
                    <tbody>
                        {this.state.data.map((elemento)=>(
                            <tr>
                                <td>{elemento.id}</td>
                                <td>{elemento.name}</td>
                                <td>
                                    <Button color="primary" onClick={()=>this.selectModalEdit(elemento)}>Editar</Button>
                                    <Button color="danger" onClick={()=>this.eliminar(elemento)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        Insertar tabla
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="ID">ID:</Label>
                            <Input className="form-control" type="text" readOnly value={this.state.data.length+1}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="Name">Nombre tabla:</Label>
                            <Input className="form-control" name="name" type="text" onChange={this.handleChange}></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.selectModalInsert}>Cancelar</Button>
                        <Button color="danger" onClick={()=>this.insertar()}>Crear</Button>
                    </ModalFooter>
                </Modal>


                <Modal isOpen={this.state.modalEditar}>
                    <ModalHeader>
                        Editar tabla
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="ID">ID:</Label>
                            <Input className="form-control" type="text" readOnly value={this.state.form.id}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="Name">Nombre tabla:</Label>
                            <Input className="form-control" name="name" type="text" value={this.state.form.name} onChange={this.handleChange}></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.selectModalEdit}>Cancelar</Button>
                        <Button color="danger" onClick={()=>this.editar(this.state.form)}>Editar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default DesignDB;