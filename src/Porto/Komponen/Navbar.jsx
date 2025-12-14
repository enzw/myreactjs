import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';

const MyNavbar = () => {

    const blue = {
        color: '#155DFD'
    }

    const font = {
        fontFamily: 'Poppins, sans-serif',
    };


    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand href="#home" style={{...blue, ...font}} className="fw-bolder fst-italic">ENZW</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto align-items-center gap-3">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <span style={blue}>✦</span>
                        <Nav.Link href="#features">About</Nav.Link>
                        <span style={blue}>✦</span>
                        <Nav.Link href="#pricing">Skills</Nav.Link>
                        <span style={blue}>✦</span>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <img
                    src={logo}
                    width="24"
                    height="24"
                    className="d-inline-block align-top"
                    alt="enzw"
                />
            </Container>
        </Navbar>
    )
}

export { MyNavbar }