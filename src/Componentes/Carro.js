import React from "react";
import {
  Table,
  PopoverBody,
  Popover,
  Badge,
  Button,
  PopoverHeader,
} from "reactstrap";
import { listaCarrito } from "../listaCarrito";

class Carro extends React.Component {
  constructor() {
    super();
    this.state = {
      popoverOpen: false,
      listaCarrito,
    };

    this.toggle = this.toggle.bind(this);
    this.total = this.totalPrecio.bind(this)
  }

  toggle() {
    this.setState((prevState) => ({
      popoverOpen: !prevState.popoverOpen,
    }));
  }

  totalPrecio(){
    let totalSuma=0;
    this.state.listaCarrito.map(
      (listaCarrito,i)=>{
        totalSuma += parseInt (listaCarrito.valor);
        return(totalSuma)
      }
    );
    return (totalSuma*1000)
  }
  render() {
    const arregloCarrito = this.state.listaCarrito.map((listaCarrito, i) => {
      return (
        //para que no de error de key
        <tr key={i}>
          <td>{(i += 1)}</td>
          <td>{listaCarrito.titulo}</td>
          <td>{listaCarrito.valor}$ CLP</td>
        </tr>
      );
    });
   

    return (
      <div>
        <Button id="Popover1" color="dark">
          <span className="material-icons">shopping_cart</span>
          <Badge color="danger">{arregloCarrito.length}</Badge>
        </Button>

        <Popover
          target="Popover1"
          placement="bottom"
          isOpen={this.state.popoverOpen}
          toggle={this.toggle}
        >
          <PopoverHeader>Listado de Compra</PopoverHeader>
          <PopoverBody>
            <Table className="table table-dark">
              <thead>
                <tr>
                  <th>Cantidad</th>
                  <th>Producto</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>{arregloCarrito}</tbody>
              <tfoot>
                <tr>
                <td><b>Total</b></td>
<td></td>
  <td>{this.totalPrecio()} $ CLP</td>



                </tr>
                </tfoot>
            </Table>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}
export default Carro;
