import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useSelector } from "react-redux";
const NavBar = () => {
  const cartCounter = useSelector((state) => state.cartStore.cartCounter);
  return (
    <Navbar expand="lg" className=" navbar mb- bg-primar position-sticky ">
      <Container>
        <Navbar.Brand className="fs-3">
          <Link className="link text-white" to="/">
            Home
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-4">
            <Link className="link ms-4 text-white" to="/products">
              Shopping
            </Link>
            <Link className="link ms-4 text-white" to="/cart">
              <BsCart4 className="fs-2" />
              <span className="ms-2 bg-danger p-1 rounded-4 ">
                {cartCounter}
              </span>
            </Link>
            <Link className="link ms-4 text-white" to="/counter">
              Counter
            </Link>
            <Link className="link ms-4 text-white" to="/logIn">
              Log In
            </Link>
            <Link className="link ms-4 text-white" to="/signUp">
              Sign up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
