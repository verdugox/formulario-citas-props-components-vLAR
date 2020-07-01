import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListaItems,
  Item,
  CardFooter,
  Button,
} from "./style.js";

const Cita = (props) => {
  const {
    id,
    nombre,
    apellido,
    direccion,
    fecha,
    hora,
    sintomas,
  } = props.cita;

  const handleClick = (id) => (e) =>{
    e.preventDefault();
    props.elimnarCita(id);
  }
  const handleEdit = (id) => (e) =>{
    e.preventDefault();
    console.log("consulta inforamción");
    //this.state.editando =true;
    console.log(id);
    props.mostrarInformacionEleccion(id);
  }
  
  return (
    <Card>
      <CardHeader>
        <strong>Descripción de cita</strong>
      </CardHeader>
      <CardBody>
        <ListaItems>
          <Item>
            <strong>Nombre:</strong> {nombre}
          </Item>
          <Item>
            <strong>Apellidos:</strong> {apellido}
          </Item>
          <Item>
            <strong>Dirección:</strong> {direccion}
          </Item>
          <Item>
            <strong>Fecha:</strong> {fecha}
          </Item>
          <Item>
            <strong>Hora:</strong> {hora}
          </Item>
          <Item>
            <strong>Sintomas:</strong> {sintomas}
          </Item>
        </ListaItems>
      </CardBody>
      <CardFooter>
        <Button onClick={handleClick(id)}>Eliminar</Button>
        <Button onClick={handleEdit(id)}>Editar</Button>
      </CardFooter>
    </Card>
  );
};

export default Cita;
