import React from "react";
import Producto from "./Componentes/Producto";
import { Container, Row } from "reactstrap";
import Navegacion from "./Componentes/Navegacion";
import "./App.css";
import { listaProductos } from "./listaProductos.json";
import FooterPage from "./Componentes/Footer";
import Banner from "./Componentes/FirmaCurriculo.png"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      listaProductos,
    };
  }

  render() {
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) => {
        return (
          <Producto
            key={i}
            titulo={listaProductos.titulo}
            imagen={listaProductos.imagen}
            descripcion={listaProductos.descripcion}
            valor={listaProductos.valor}
            stock={listaProductos.stock}
          />
        );
      }
    );

    return (
      <Container>
<div className="container justify-content-center">
        
          <div className="container row justify-content-center">
        <img src={Banner} alt="" width="100%" height="80%"/></div>
          <br/>
          
          </div>
          

        <b>
          <h4>
            <Navegacion titulo="Carrito" />
          </h4>
        </b>
        <Row>{arregloComponentes}</Row>

      <FooterPage/>
      </Container>
      
    );
  }
}

export default App;

