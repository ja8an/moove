import { useEffect, useMemo, useState } from "react";
import omdb from "../../../api/OMDb";
import queryString from 'query-string';
import { Row, Form, Card } from "react-bootstrap";

const Search = ({ location, ...rest }) => {

    let params = queryString.parse(location.search);

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState(null);

    setSearchTerm(params.q);

    useState(() => {
        if (results == null)
            omdb.search(params.q).then(result => {
                setResults(result.data);
            });
    }, [results]);

    return <>

        <Form>
            <Form.Group>
                <Form.Control value={searchTerm} onChange={v => setSearchTerm(v.target.value)} />
            </Form.Group>
        </Form>

        {JSON.stringify(results)}

    </>;
};

export default Search;