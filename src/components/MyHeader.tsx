import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function MyHeader () {
    return (
    <>
    <header>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ArtcileSpace</Navbar.Brand>
          <Nav className="me-auto">
            <Link className=" nav-link" to ="/">Home</Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
    </>)
}