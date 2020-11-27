import { Navbar, Nav, Jumbotron, Badge, Container, Image, Row, Col } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
    return (<div>
        <Container>
            <Navbar bg="transparent" expand="lg">
                <Link to={'/'} component={Navbar.Brand}>
                    <Image src={logo} width={150} alt={'moove logo'} />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={'ml-auto'}>
                        <Link to={'/'} component={Nav.Link}>
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                        <Nav.Link href="#link">Sign In</Nav.Link>
                        <Nav.Link href="#link">
                            <FontAwesomeIcon icon={faStar} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </div>);
};

export default Header;