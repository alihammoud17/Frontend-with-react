import React from 'react';
import { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, 
    Collapse, NavItem, Jumbotron, Button, 
    Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const HeaderComponent = (props) => {

    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var remember = document.getElementById("remember");

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleLogin = (event) => {
        toggleModal();
        alert("Username: " + username.value + " Password: " + password.value
        + " Remember: " + remember.checked);
        event.preventDefault();
    }

    //uncontrolled forms
    return (
        <React.Fragment>
            <Navbar dark expand="md"> {/*for Meduim to XL screens*/}
                <div className="container">
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion"/>
                    </NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span>
                                    &nbsp; Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span> 
                                    &nbsp; About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span> 
                                    &nbsp; Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> 
                                    &nbsp; Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={toggleModal}>
                                    <span className="fa fa-sign-in fa-lg"/>
                                    &nbsp;Login
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse> 
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>
                                We take inspiration from the World's best cuisines, 
                                and create a unique fusion experience. 
                                Our lipsmacking creations will tickle your culinary senses!
                            </p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" 
                                innerRef={(i) => username = i} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password" 
                                innerRef={(i) => password = i}/>
                        </FormGroup>
                        <FormGroup ckeck>
                            <Label check>
                                &nbsp;&nbsp;&nbsp;&nbsp;<Input type="checkbox" name="remember"
                                    innerRef={(i) => remember = i}/>
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">
                            Login
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}

export default HeaderComponent
