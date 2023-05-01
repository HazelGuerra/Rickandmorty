import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
    return(
        <>
        <Navbar bg="dark" variant="danger">
            <Container>
                <Navbar.Brand className="text-white ms-3 position-absolute top-0 end-0">Rick And Morty</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="text-white ms-3 text-decoration-none" to="/">Personajes</Link>
                        <Link className="text-white ms-3 text-decoration-none" to="/form">Favoritos</Link>
                    </Nav>
            </Container>
        </Navbar>
        </>
    );
}