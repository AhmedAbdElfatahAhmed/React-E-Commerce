import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = ({ productsInCart }) => {
  return (
    <Navbar expand="lg" className=" navbar mb-3 bg-primary">
      <Container>
        <Navbar.Brand className="fs-3">
          <Link className="link text-white" to="/">
            Products
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-4">
            <Link className="link ms-4 text-white" to="/cart">
              <BsCart4 className="fs-2" />
              <span className="ms-2 bg-danger p-1 rounded-4 ">
                {productsInCart}
              </span>
            </Link>
            <Link className="link ms-4 text-white" to="/counter">
              counter
            </Link>
            <Link className="link ms-4 text-white" to="/register">
              register
            </Link>
            <Link className="link ms-4 text-white" to="/login">
              login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
