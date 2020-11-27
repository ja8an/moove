import { faAward, faFilm, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Badge, Col, Image, Media, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import OMDb from "../../../api/OMDb";


const MoviePage = () => {

    let { id } = useParams();

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        OMDb.byId(id).then(response => {
            setMovie(response.data);
        });
    }, []);

    return <>
        {movie && <>

            <Row>
                <Col xs={12} md={3}>
                    <Image src={movie.Poster} className='shadow-lg' fluid rounded />

                    {movie.Ratings && movie.Ratings.length > 0 && <>
                        <h5 className='text-primary mt-3'>
                            <FontAwesomeIcon icon={faStar} fixedWidth />{' '}Ratings</h5>
                        {movie.Ratings.map(rating => {
                            return <p>{rating.Source}:{' '}<b>{rating.Value}</b></p>
                        })}
                    </>}

                </Col>
                <Col xs={12} md={9}>
                    <h4 className='text-primary'><FontAwesomeIcon icon={faFilm} fixedWidth />{' '}{movie.Title}</h4>

                    <p>{movie.Plot}</p>

                    <h5 className='text-secondary'>Actors</h5>
                    <p>{movie.Actors}</p>

                    <h5 className='text-secondary'>Awards</h5>
                    <p>{movie.Awards}</p>

                    <h5 className='text-secondary'>Tecnical info</h5>

                    <h6 className='text-secondary'>Direction</h6>
                    <p>{movie.Director}</p>

                    <h6 className='text-secondary'>Script</h6>
                    <p>{movie.Writer}</p>

                    <h6 className='text-secondary'>Language</h6>
                    <p>{movie.Language}</p>
                </Col>
            </Row>

        </>}
    </>;
}

export default MoviePage;