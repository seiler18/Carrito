import React from "react";
import {
  CardImg,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Modal,
  Button,
  Container,
} from "reactstrap";
import "./FichaProducto.css";
import {listaCarrito} from '../listaCarrito.json';
class FichaProducto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      stock: props.props.stock,
      listaCarrito
    };
    this.toggle = this.toggle.bind(this);
    this.agregarCarrito= this.agregarCarrito.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
      
    }));
  }
  

  agregarCarrito(stock){
listaCarrito.push({
  "titulo": this.props.props.titulo,
  "valor" : this.props.props.valor
});
this.setState(prevState=>({
  modal:!prevState.modal,
  stock: prevState.stock -1 ,
}));
  }


  render() {
    return (
      <Container>
        <Button onClick={this.toggle}> Ver Ficha</Button>
        <Modal isOpen={this.state.modal}>
          <ModalHeader>{this.props.props.titulo}</ModalHeader>
          <ModalBody>
            <CardImg src={this.props.props.imagen} />
            <p>
              Detalles del producto seleccionado :{" "}
              <b>{this.props.props.descripcion}</b>
            </p>
            <br />
            <p>
              Valor del producto : <b>{this.props.props.valor} $ CLP</b>{" "}
            </p>
            <p>Existen <b>{this.state.stock}</b> unidades en el inventario actual</p>
          </ModalBody>

          <ModalFooter className="modalFooter">
            <Button color="danger" onClick={this.agregarCarrito}>
              Agregar a su compra
            </Button>
            <Button color="dark" onClick={this.toggle}>
              Volver atras
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
export default FichaProducto;
