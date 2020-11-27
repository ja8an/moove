import { useMemo, useState } from "react";
import { Jumbotron, Button, Badge, Row, Col, Form } from "react-bootstrap";
import tmdb, {imgUrl} from '../../../api/TMDb';
import { faImdb } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {randomInt} from '../../../utils';

const Home = () => {

    const [movie, setMovie] = useState(null);

    useMemo(() => {
        if (movie == null) {
            tmdb.trendOfTheDay().then(response => {

                let results = response.data.results;

                console.log('results', results)

                setMovie(results[randomInt(0, results.length - 1)]);

            });
        }
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

        {JSON.stringify(movie)}

        {movie && <Jumbotron style={{backgroundColor: 'transparent'}}>
            <Row>
                <Col sm={12} md={4}>
                    <h1>
                        <Link to={`/${movie.id}`}>{movie.title}</Link>
                    </h1>
                    <p>{movie.overview}</p>
                    <Badge variant={'primary'}>
                        <FontAwesomeIcon icon={faImdb} />
                        {movie.vote_average}/10
                        </Badge>
                </Col>
            </Row>
        </Jumbotron>}

    </>;
};

export default Home;