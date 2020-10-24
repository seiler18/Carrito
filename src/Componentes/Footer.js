import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {} from "@fortawesome/free-solid-svg-icons" // FAS = SOLIDO
import {} from "@fortawesome/fontawesome-svg-core" //FAB = CORE
import {faFacebook, faGithub, faGitlab, faGoogle,faInstagram,faLinkedin,faTwitter,faWhatsapp} from "@fortawesome/free-brands-svg-icons" // FAB MARCAS
import {} from "@fortawesome/free-regular-svg-icons"
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
      <div className=" text-center">
            <h1 className="font-weight-bold text-center mb-5">Mis redes sociales </h1>
        
       <a href="https://www.facebook.com/IchBinSeiler" target="_blank" rel="noopener noreferrer"><span>Facebook&nbsp;</span></a><FontAwesomeIcon icon={faFacebook} size="2x"/>
        <a href="https://www.twitte.com/Ich_BinSeiler" target="_blank" rel="noopener noreferrer"> <span>Twitter&nbsp;</span></a><FontAwesomeIcon icon={faTwitter} size="2x"/>
       
        <a href="https://www.instagram.com/ichbinseiler" target="_blank" rel="noopener noreferrer"><span>Instagram&nbsp;</span></a><FontAwesomeIcon icon={faInstagram} size="2x"/>
       <div><br/></div>
       <p> <a href="https://gitlab.com/seiler18" target="_blank" rel="noopener noreferrer"> <span>Gitlab&nbsp;</span></a><FontAwesomeIcon icon={faGitlab} size="2x"/>
        
        <a href="https://github.com/seiler18" target="_blank" rel="noopener noreferrer"> <span>Github&nbsp;</span></a><FontAwesomeIcon icon={faGithub} size="2x"/>
        <a href="https://www.linkedin.com/in/ichbinseiler/" target="_blank" rel="noopener noreferrer"> <span>LinkedIn&nbsp;</span></a><FontAwesomeIcon icon={faLinkedin} size="2x"/></p>
       
<br/>
        <p><a href="https://api.whatsapp.com/send?phone=+56953292612" target="_blank" rel="noopener noreferrer"> <span>Contactar via WhatsApp &nbsp;</span></a><FontAwesomeIcon icon={faWhatsapp} size="2x"/></p>
      <p><a href="mailto:ichbinseiler@gmail.com" target="_blank" rel="noopener noreferrer"> <span>Contactar por Gmail&nbsp;</span></a><FontAwesomeIcon icon={faGoogle} size="2x"/></p>
        </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()}<b> Jesús Seiler. Todos los derechos reservados.</b>  
          
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;