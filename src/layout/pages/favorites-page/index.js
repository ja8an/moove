import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getFavorites } from "../../../redux/selectors";
import MovieCard from "../../elements/movie-card";

const FavoritesPage = ({ favorites }) => {

    const [login, setLogin] = useState(false);

    return <>

        <h5 className='text-primary'>
            <FontAwesomeIcon icon={faStar} fixedWidth />
            Favorites
            </h5>

        {!login && <div className='p-3 text-center text-muted'>
            You must be logged in to sync your favorites!
                </div>}

        <Row>
            {favorites && Object.keys(favorites).map((movie, index) => {
                return <Col sm={12} md={4} lg={3} key={index}>
                    <MovieCard movie={favorites[movie]} />
                </Col>
            })}
        </Row>

    </>;
};

const mapStateToProps = state => {
    const favorites = getFavorites(state);
    return { favorites };
};

export default connect(mapStateToProps)(FavoritesPage);
