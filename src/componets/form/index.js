import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useContext } from "react";
import { useState } from 'react';
import { useEffect } from "react";
import Context  from "../../context/index";

export default () => {

    const [data, setData] = useState([])
    const {characters, setCharacters} = useContext(Context)

    useEffect(() => {
        setData(characters.filter(val => val.favorito === true))
    },[])

    return (
        <div className="home-class">
            <Container>
                <Row className="aling-items-center">
                    {data ? data.map(val =>
                    <Col lg={4} md={12} className= 'my-4'>
                        <Card>
                            <Card.Img variant="top" src={val.image} />
                            <Card.Body>
                                <Card.Title>{val.name}</Card.Title>
                                <Card.Text>
                                    <p>Especie: {val.species}</p>
                                    <p>status: {val.status}</p>
                                </Card.Text>
                                <Button variant="dark">Favorito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    ): <p>loading...</p>}
                </Row>
            </Container>
        </div>
    )
}


