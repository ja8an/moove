import { Navbar, Nav, Jumbotron, Badge, Container, Image, Row, Col, NavDropdown, Form, FormControl, FormGroup, Button, Dropdown } from 'react-bootstrap';
import logo from '../../../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './index.scss';
import LoginForm from '../login-form';


const Header = ({ showLogo = true, gradient = false, ...rest }) => {

    return (<div className={gradient ? 'linear-gradient' : ''}>
        <Container>
            <Navbar bg="transparent" variant={gradient ? 'dark' : 'light'} expand="lg">

                {showLogo && <Link to={'/'} component={Navbar.Brand}>
                    <Image src={logo} width={150} alt={'moove logo'} className='p-3' />
                </Link>}

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className={'ml-auto'}>
                        <Link to={'/stared'} component={Nav.Link}>
                            <FontAwesomeIcon icon={faStar} />{' '}Favorite Movies
                        </Link>
                    </Nav>

                    <Dropdown>

                        <Dropdown.Toggle variant="transparent" className={gradient ? 'text-light' : 'text-dark'} id="dropdown-basic">Sign in</Dropdown.Toggle>

                        <Dropdown.Menu style={{ width: 300 }} align="right">
                            <Dropdown.ItemText>
                                <LoginForm />
                            </Dropdown.ItemText>
                        </Dropdown.Menu>
                    </Dropdown>

                </Navbar.Collapse>

            </Navbar>
        </Container>
    </div >);
};

export default Header;