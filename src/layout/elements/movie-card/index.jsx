import { faCalendarAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Row, Col, OverlayTrigger, Button, Badge, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { setFavorite, unsetFavorite } from "../../../redux/actions";
import { isFavorite } from "../../../redux/selectors";
import { connect } from "react-redux";
import { useToasts } from 'react-toast-notifications'


const MovieCard = ({ isFavorite, setFavorite, unsetFavorite, movie, ...rest }) => {

    const { addToast } = useToasts();

    const toggleFavorite = movie => {

        if (!isFavorite(movie.imdbID)) {
            setFavorite(movie);
            addToast('Successfully added to your favorites', { appearance: 'success', autoDismiss: true })
        }
        else {
            unsetFavorite(movie.imdbID);
            addToast('Successfully removed from your favorites', { appearance: 'success', autoDismiss: true })
        }


    };

    return <Card className='shadow-lg' {...rest}>
        <Card.Img variant='top' src={movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : 'https://fakeimg.pl/250x300/?retina=1&text=moove&lobster=noto'} className='poster-size' />
        <Card.Body>
            <Row className='align-items-center'>
                <Col>
                    <Badge variant='primary'>
                        <FontAwesomeIcon icon={faCalendarAlt} fixedWidth />
                        {movie.Year}
                    </Badge>
                </Col>
                <Col className='text-right'>
                    <Button variant='link' onClick={() => toggleFavorite(movie)}>
                        <FontAwesomeIcon icon={faStar} className={isFavorite(movie.imdbID) ? 'text-danger' : 'text-secondary'} fixedWidth />
                    </Button>
                </Col>
            </Row>
            <Card.Title>
                <Link to={`/${movie.imdbID}`}>{movie.Title}</Link>
            </Card.Title>
        </Card.Body>
    </Card>;
};


export default connect(
    state => {
        return {
            isFavorite: (id) => {
                return isFavorite(state, id);
            }
        };
    },
    { setFavorite, unsetFavorite }
)(MovieCard);
