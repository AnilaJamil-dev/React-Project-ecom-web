import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function NavigationBar() {
  return (
    <Navbar expand="lg"  data-bs-theme="dark" className="bg-body-tertiary" >
      <Container>
        <Link className='nav-link text-light' to="/"><h3>Yin & Yang</h3></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
         

            <Link className='nav-link text-light' to="/">Home</Link>
            <Link className='nav-link text-light' to="/categoriessection">Categories</Link>
            <Link className='nav-link text-light' to="/products">Products</Link>
            <Link className='nav-link text-light' to="/signin">Sign in</Link>
            <Link className='ms-4 btn btn-dark' to="/signup">Sign up</Link>
            <Link className=' nav-link ms-auto ' to="/usercartinfo"><AiOutlineShoppingCart size={25} color={"white"}/></Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;