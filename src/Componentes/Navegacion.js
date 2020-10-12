import React from 'react';
import {Navbar,Nav,NavItem,NavLink,NavbarBrand} from 'reactstrap';
import './FichaProducto.css'
import Carro from './Carro';

class Navegacion extends React.Component{
    render(){
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand><h1>{this.props.titulo}</h1></NavbarBrand>
            <Nav  className="col-9" navbar>
                <NavItem>
                    <NavLink href="https://seiler18.github.io/Curriculo/" target="_blank"><b>Curriculo Jesus Seiler</b></NavLink>
                </NavItem>
               

            </Nav>
            
            <Carro/>
               
            
            </Navbar>
        );
    }
}
export default Navegacion
