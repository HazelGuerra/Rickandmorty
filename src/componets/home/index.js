import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useContext } from "react";
import Context  from "../../context/index";

export default () => {

    const {characters, setCharacters} = useContext(Context)

    const handleClick = (id) => {
        const character = characters.map((fav) => {
            if (fav.id === id) {
                return {...fav,favorito:true}
            } else {
                return fav;
            }
        })
        setCharacters(character)
    }

    return (
        <div className="home-class">
            <Container>
                <Row className="aling-items-center">
                    {characters ? characters.map(character =>
                    <Col lg={4} md={12} className= 'my-4'>
                        <Card>
                            <Card.Img variant="top" src={character.image} />
                            <Card.Body>
                                <Card.Title>{character.name}</Card.Title>
                                <Card.Text>
                                    <p>Especie: {character.species}</p>
                                    <p>status: {character.status}</p>
                                </Card.Text>
                                <Button variant="dark" onClick={() => handleClick(character.id)}>Favorito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    ): <p>loading...</p>}
                </Row>
            </Container>
        </div>
    )
}


