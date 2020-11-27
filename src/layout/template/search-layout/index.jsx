import React, { useEffect, useMemo, useState } from "react";

import { Route, Link } from 'react-router-dom';

import Header from '../../elements/header';

import './index.scss';
import { Badge, Container, Jumbotron } from 'react-bootstrap';
import TMDb, { imgUrl } from "../../../api/TMDb";
import { randomInt } from "../../../utils";


const SearchLayout = ({ component: Component, ...rest }) => {

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        TMDb.trendOfTheDay().then(response => {
            let results = response.data.results;
            setMovie(results[randomInt(0, results.length - 1)]);
        });
    }, []);

    return <Route {...rest} render={props => (
        <div style={{ backgroundImage: `url(${movie && imgUrl(movie.backdrop_path)})` }} className={'movie-backdrop d-flex flex-column vh-100'}>
            <Header showLogo={false} gradient className='flex-shrink-1' />
            <Container className={'flex-grow-1'}>
                <Component {...props} />
            </Container>
            {movie && <Jumbotron fluid style={{ backgroundColor: 'transparent' }} className={'jumbotron-backdrop flex-shrink-1 mb-0'}>
                <Container>
                    <Badge variant='primary'>trending</Badge>
                    <h1 className={'text-shadow'}>
                        <Link to={{
                            pathname: '/search',
                            search: `?q=${movie.title}`
                        }} className='text-white'>{movie.title}</Link>
                    </h1>
                    <p className={'text-shadow  text-white'}>{movie.overview}</p>
                </Container>
            </Jumbotron>}
        </div>
    )} />;
}

export default SearchLayout;