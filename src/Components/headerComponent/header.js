import React, { Component } from 'react';
import logo from '../img/Logo/angel-logo-finnal.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

class Header extends Component {
   state
   render() {
      return (
         <header>
            <Navbar bg="light" expand="lg" className="main__navbar">
               <Navbar.Brand href="/"><img
                  alt=""
                  src={logo}
                  width="120"
                  height="auto"
                  className="d-inline-block align-top" />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                  <Nav className="row ">
                     
                        <Link className="nav__link" to="/"><i class="fas fa-home"></i></Link>
                        <Link className="nav__link" to="/gioi-thieu">Giới thiệu</Link>
                        <Link className="nav__link" to="/dich-vu">Dịch vụ</Link>
                        <Link className="nav__link" to="/thu-vien">Thư viện</Link>
                        <Link className="nav__link" to="/khuyen-mai">Khuyến mãi</Link>
                    
                        <Link className="nav__link" to="/hoi-dap">Q&A</Link>
                        <Link className="nav__link" to="/khach-hang">Khách hàng</Link>
                        <Link className="nav__link" to="/tuyen-dung">Tuyển dụng</Link>
                        <Link className="nav__link" to="/dao-tao">Đào tạo</Link>
                        <Link className="nav__link" to="/lien-he">Liên hệ</Link>
                     
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
         </header>
      );
   }
}

export default Header;