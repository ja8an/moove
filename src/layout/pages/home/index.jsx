import { useMemo, useState } from "react";
import { Jumbotron, Button, Badge, Row, Col, Form } from "react-bootstrap";
import omdb from '../../../api/OMDb';
import { faImdb } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {

    const [movie, setMovie] = useState(null);

    useMemo(() => {
        if (movie == null)
            omdb.random().then(response => {
                console.log(response);
                setMovie(response);
            });
    }, [movie]);

    return <>

        <Form action={'/search'}>
            <Row className={['align-content-center', 'justify-content-center', 'align-items-center', 'justify-items-center', 'p-5', 'm-5']}>
                <Col xs={12}>
                    <Form.Group>
                        <Form.Control name={'q'} placeholder={'Type a movie name to search'} />
                    </Form.Group>
                </Col>
                <Col>
                    <Button>Search</Button>
                </Col>
            </Row>
        </Form>

        <Jumbotron style={{ backgroundColor: 'transparent' }}>
            <Row>
                <Col sm={12} md={4}>
                    <h1>
                        <Link to={`/${movie?.imdbID}`}>{movie?.Title}</Link>
                    </h1>
                    <p>{movie?.Plot}</p>
                    <Badge variant={'primary'}>
                        <FontAwesomeIcon icon={faImdb} />
                        {movie?.imdbRating}/10
                        </Badge>
                </Col>
            </Row>
        </Jumbotron>

    </>;
};

export default Home;