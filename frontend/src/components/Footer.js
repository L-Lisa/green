import React from "react"
import styled from 'styled-components/macro'
import img from '../lib/images/lightleaves.jpg'
import linkedin from '../lib/images/iconmonstr-linkedin-1.svg'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const NavContainer = styled.div`
width: 100%;
display: flex;
flex-direction:column;
justify-items: center;
align-content: center;
margin-left: 30px;
li {
    margin: 0.5rem 1rem;
}
div{
    width: min-content;
    margin: 0 auto;
}
h5 {
    text-align: center;
}
`;

export const Footer = () => {
    return (
        <MDBFooter color="grey darken-1" className="font-small pt-0 mt-0">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow >
                    <MDBCol md="6">
                    </MDBCol>
                    <NavContainer md="6">
                        <div>
                            <h5 className="title pt-5">Let's stay in touch!</h5>
                            <div className="mb-5 inline-flex-center ">
                                <ul className="d-inline-flex p-2">
                                    <li className="list-unstyled">
                                        <a href="https://www.linkedin.com/in/lisa-ojeland/"><i className="fab fa-linkedin  fa-2x"></i></a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="https://github.com/L-Lisa"><i className="fab fa-github-square fa-2x"></i></a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="mailto:lisaojeland@gmail.com"><i className="fas fa-envelope fa-2x"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </NavContainer>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3 ">
                <MDBContainer fluid >
                    &copy; {new Date().getFullYear()} Copyright: Lisa.AB
                </MDBContainer>
            </div>
        </MDBFooter >
    )
}
