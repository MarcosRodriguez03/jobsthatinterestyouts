import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="navColor">
            <Container fluid>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end '>
                    <Nav className="gap-2 pe-5">
                        <Nav.Link className='navText' as={Link} to={'/'} >Home</Nav.Link>
                        <Nav.Link className='navText' as={Link} to={'/discord'} >Discord</Nav.Link>
                        <Nav.Link className='navText' as={Link} to={'/google'} >Google</Nav.Link>
                        <Nav.Link className='navText' as={Link} to={'/mircosoft'} >Microsoft</Nav.Link>
                        <Nav.Link className='navText' as={Link} to={'/mojang'} >Mojang</Nav.Link>
                        <Nav.Link className='navText' as={Link} to={'/nvidia'} >Nvidia</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;