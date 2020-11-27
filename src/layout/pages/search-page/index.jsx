import { useEffect, useState } from "react";
import omdb from "../../../api/OMDb";
import queryString from 'query-string';
import { Form, Row, Col } from "react-bootstrap";

import InfiniteScroll from 'react-infinite-scroll-component';

import './index.scss';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";


import MovieCard from "../../elements/movie-card";

const SearchPage = ({ setFavorite, unsetFavorite, location, ...rest }) => {

    const params = queryString.parse(location.search);
    const history = useHistory();

    const [searchTerm, setSearchTerm] = useState('');
    const [totalResults, setTotalResults] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const doSearch = () => {
        omdb.search(params.q).then(response => {
            if (response.data && response.data.Response === 'True') {
                setResults(response.data.Search);
                if (Number(response.data.totalResults) === 1) {
                    history.push(`/${response.data.Search[0].imdbID}`);
                    return;
                }
                setTotalResults(response.data.totalResults);
                const _totalPages = Math.ceil(response.data.totalResults / 10);
                setTotalPages(_totalPages);
                setHasMore(response.data.totalResults > 10);
            }
        });
    };

    const fetchMore = () => {
        if (!hasMore)
            return;
        const _currentPage = page + 1;
        omdb.search(params.q, _currentPage).then(response => {
            if (response.data.Search) {
                setResults([...results, ...response.data.Search]);
                setHasMore(page < totalPages);
            } else {
                setHasMore(false);
            };
        });
        setPage(_currentPage);
    };

    useEffect(() => {
        doSearch(searchTerm);
    }, [searchTerm]);

    useEffect(() => {
        if (params.q) {
            setSearchTerm(params.q);
            doSearch(params.q);
        }
        else
            history.push('/');
    }, []);



    return <>

        <Form action='/search'>
            <Form.Group>
                <Form.Control name='q' value={searchTerm} onChange={v => setSearchTerm(v.target.value)} />
            </Form.Group>
        </Form>

        {(!results || results.length === 0) && <>
            <div className='text-muted p-5 text-center'>
                <FontAwesomeIcon icon={faExclamation} fixedWidth />
                No results found!
            </div>
        </>}

        {results && results.length > 0 && <>

            <h5 className='text-primary p-3'>{totalResults} results found:</h5>

            <InfiniteScroll
                dataLength={results.length} //This is important field to render the next data
                next={fetchMore}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }} className={'p-5'}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }>
                <Row>
                    {results && results.map((result, index) => {
                        return result && <Col sm={12} md={4} lg={3} key={index}>
                            <MovieCard movie={result} />
                        </Col>;
                    })}
                </Row>
            </InfiniteScroll>
        </>}

    </>;
};
export default SearchPage;