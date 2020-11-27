import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Row, Col, Form, Image, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import logo from '../../../assets/img/logo.png';

import './index.scss';

const HomePage = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();

    const submit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        history.push({ hash: `#search?q=${searchTerm}` });
    };

    return <>
        <Form onSubmit={submit} className='h-100 animate__animated animate__fadeIn'>
            <Row className='h-100 align-content-end justify-content-center'>
                <Col xs={12} className='text-center p-5 animate__animated animate__fadeInUp'>
                    <Image src={logo} height={100} width={294.7} />
                </Col>
                <Col xs={12} md={6}>
                    <InputGroup className='shadow-lg'>
                        <Form.Control name={'q'} placeholder={'Type a movie name to search'} autoFocus
                            value={searchTerm} onChange={v => setSearchTerm(v.target.value)} />
                        <InputGroup.Append>
                            <Button>
                                <FontAwesomeIcon icon={faSearch} fixedWidth />{' '}Search
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        </Form>
    </>;
};

export default HomePage;