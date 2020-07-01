import React, { Component } from "react";
import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  height: 100%;
}
*::after,*::before{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
};
body{
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  color: #555;
  box-sizing: border-box; 
}
`;
const data_ini =[
  { id:10, nombre: 'Luis Andres', apellido:'Acuña Ramos' , direccion:'Los Cedros' , fecha:'1990-04-09' , hora:'18:12' , sintomas:'Dolor Estomago'},
]

const initalState = {
  cita: {
    id:"",
    nombre: "",
    apellido: "",
    direccion: "",
    fecha: "",
    hora: "",
    sintomas: "",
  },
  edicion:false,
  error: false,
};


class App extends Component {
  state = {
    //listaCitas: [],
    listaCitas:data_ini,
    citaObjPrincipal:{...initalState},
    estamoseditando:false
  };

  setearData =(e)=>{
    this.setState({
      cita: { ...this.state.cita, [e.target.name]: e.target.value },
    });
  }
  agregarCita = (cita) => {
    const indiceCoincidenciadeCita = this.state.listaCitas.findIndex(
      (citaaEvaluar) => citaaEvaluar.id == cita.id
    );
      console.log("indiceCoincidenciadeCita");
      console.log(indiceCoincidenciadeCita);
    if(indiceCoincidenciadeCita>-1){
      let listadeCitasActualizada = this.state.listaCitas;
      listadeCitasActualizada[indiceCoincidenciadeCita] = cita;
      console.log( "editar" );
      console.log(listadeCitasActualizada);
      this.setState({listaCitas:listadeCitasActualizada});
      //Actualización
    }else{
      console.log( "register" );
      //Registro 
      this.setState({ listaCitas: [...this.state.listaCitas, cita] });

    }

    this.setState({
      citaObjPrincipal:{
        ...initalState
      }
    });
  };

  elimnarCita = (id) => {
    const nuevaListaCitas = this.state.listaCitas.filter(
      (cita) => cita.id !== id
    );
      //agregar nuevo arreglo de citas
    this.setState({ listaCitas: nuevaListaCitas });
  };
  mostrarInformacionEleccion = (id) => {
    const citaElegida = this.state.listaCitas.filter(
       (cita) => cita.id === id
    )[0];
    console.log("citaElegida");
    console.log(citaElegida);    
    this.setState({
      citaObjPrincipal:{
        cita:{
          ...citaElegida
        }
        ,error:false
      }
    });    
    console.log(this.state);    
  };



  render() {
    return (
      <div>
        <GlobalStyle />
        <Formulario agregarCita={this.agregarCita} citaTransferencia={this.state.citaObjPrincipal} estamoseditando={this.state.estamoseditando} />
        <ListaCitas
          listaCitas={this.state.listaCitas}
          elimnarCita={this.elimnarCita}
          mostrarInformacionEleccion={this.mostrarInformacionEleccion}
        />
      </div>
    );
  }
}

export default App;
