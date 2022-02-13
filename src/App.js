
import React from 'react';
import './App.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BiLogOut } from "react-icons/all-files";
import { AiOutlineUser } from "react-icons/all-files";
import { FcCustomerSupport } from "react-icons/fc";
import {BiMessageSquare } from "react-icons/bi";
import {GoReport } from "react-icons/go";
import {FcHome } from "react-icons/fc";

function App() {
  return (
 <><Navbar bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><AiOutlineUser/></Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#home">Home<FcHome/></Nav.Link>
    <Nav.Link href="#reports"><GoReport/>Reports</Nav.Link>
    <Nav.Link href="#Messages"><BiMessageSquare/>Messages</Nav.Link>
    <Nav.Link href="#features"><FcCustomerSupport/>support</Nav.Link>
    <Nav.Link href=" #pricing">  <BiLogOut />  logout
   
    </Nav.Link>
    
  </Nav>
  </Container>
</Navbar>


<br />
</>)
}    
export default App;
  
