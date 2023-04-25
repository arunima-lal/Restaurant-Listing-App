import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="logo"
                        src="https://www.pngitem.com/pimgs/m/21-216129_restaurants-clipart-restaurant-symbol-logo-for-restaurant-png.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                  &nbsp; Food Circles
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header