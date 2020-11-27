import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getFavorites } from "../../../redux/selectors";
import MovieCard from "../../elements/movie-card";

const FavoritesPage = ({ favorites }) => {

    return <>

        <h5 className='text-primary'>
            <FontAwesomeIcon icon={faStar} fixedWidth />
            Favorites
            </h5>

        {(!favorites || Object.keys(favorites).length === 0) && <>
            <div className='p-5 text-center text-muted'>
                No favorite movie yet!
                </div>
        </>}

        {favorites && favorites.length > 0 &&
            <Row>
                {Object.keys(favorites).map((movie, index) => {
                    return <Col sm={12} md={4} lg={3} key={index}>
                        <MovieCard movie={favorites[movie]} />
                    </Col>
                })}
            </Row>
        }

    </>;
};

const mapStateToProps = state => {
    const favorites = getFavorites(state);
    return { favorites };
};

export default connect(mapStateToProps)(FavoritesPage);
