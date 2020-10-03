import React from 'react';
import {CardSubtitle,CardText,CardTitle,CardBody,CardImg,Col, Card} from 'reactstrap';
import './Producto.css';

import FichaProducto from './FichaProducto';

class Producto extends React.Component{
    render(){
    return(
        
<Col sm ="4" >
        <Card className="Card" body outline color="dark" >

<CardImg src={this.props.imagen}/>
       <CardBody>
           <CardTitle>{this.props.titulo}</CardTitle>
           <CardSubtitle><b>{this.props.valor} $ CLP</b></CardSubtitle>
           <CardText>{this.props.descripcion}</CardText>
           
           {/* <Button className="Button">Comprar</Button> */}
          <FichaProducto props={this.props}/>
           </CardBody> 
        </Card>
        </Col>
       
    );
}
}

export default Producto;