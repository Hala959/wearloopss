import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'



export default class Nave extends Component {
    render() {


        
        return (
<div>
    <div>

<div class="wrapper">

  <div class="multi_color_border">

  </div>


  <div className="top_nav">

  <Nav className="justify-content-end">
                        <Button variant="link" size="md" > تسجيل الدخول</Button>
                        <Button  variant="link"size="md" > تسجيل جديد</Button>
                    </Nav>
  </div>

  </div>





    </div>
                <Navbar md="light" variant="light" className="justify-content-end   col-xs-5 header-left"  >
                    <Nav>
                    <Navbar.Brand href="#home">

                    </Navbar.Brand>
                        <Nav.Link as={Link} to="/Accessories">الاكسسوارات</Nav.Link>
                        <Nav.Link as={Link} to="/shoes">أحذية</Nav.Link>
                        <Nav.Link as={Link} to="/Bags">شنط</Nav.Link>
                        <Nav.Link as={Link} to="/Clothing">الملابس</Nav.Link>
                        <Nav.Link as={Link} to="/home">الصفحة الرئيسية</Nav.Link>
                    </Nav>
                   
                </Navbar>
            </div>
        )
    }
}