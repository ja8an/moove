import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import logo from '../../../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './index.scss';


const Header = ({ showLogo = true, gradient = false, ...rest }) => {

    return (<div className={gradient ? 'linear-gradient' : ''}>
        <Container>
            <Navbar bg="transparent" variant={gradient ? 'dark' : 'light'} expand="lg">

                {showLogo && <Link to={'/'} className='navbar-brand'>
                    <Image src={logo} width={150} alt={'moove logo'} className='p-3' />
                </Link>}

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className={'ml-auto'}>
                        <Link to={'/stared'} className='nav-link'>
                            <FontAwesomeIcon icon={faStar} />{' '}Favorite Movies
                        </Link>
                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        </Container>
    </div >);
};

export default Header;