import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="footer-copyright text-center py-5">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            
            <p>
           
            </p>
          </MDBCol>
       {/*    <MDBCol md="6">
           <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul> 
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()}<b> Jesús Seiler.</b>  <br/>Contacto teléfono : <b>+56 953292612</b> 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;