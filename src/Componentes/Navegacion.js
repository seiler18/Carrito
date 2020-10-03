import React from 'react';
import {Navbar,Nav,NavItem,NavLink,NavbarBrand} from 'reactstrap';
import './FichaProducto.css'
import Carro from './Carro';

class Navegacion extends React.Component{
    render(){
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><h1>{this.props.titulo}</h1></NavbarBrand>
            <Nav  className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="https://seiler18.github.io/Curriculo/" target="_blank"><b>Link al perfil de Jesus Seiler</b></NavLink>
                </NavItem>
                <NavItem>
                    <Carro/>
                </NavItem>

            </Nav>
            </Navbar>
        );
    }
}
export default Navegacion