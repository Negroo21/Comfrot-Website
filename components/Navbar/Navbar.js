import { useContext, useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";
import { DataContainer } from "../../App";
import { Link } from "react-router-dom";
const NavBar = () => {
  const {CartItem,setCartItem} =useContext(DataContainer);
  const [expand, setExpand] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 100) {
        setIsFixed(true);
    } else if(window.scrollY <= 50) {
        setIsFixed(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);
  useEffect(()=> {
    if(CartItem.length ===0) {
      const storedCart = localStorage.getItem("cartItem");
      setCartItem(JSON.parse(storedCart));
    }
  },[])
  return (
      <Navbar
      fixed="top"
      expand="md"
      className={isFixed ? "navbar fixed":"navbar"}
      >
        <Container className="navbar-container">
            <Navbar.Brand to="/">
              <ion-icon name="bag"></ion-icon>
              <h1 className="logo">Comfort</h1>
            </Navbar.Brand>
            <div className="d-flex">
              <div className="media-cart">
              </div>
              <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => {
                  setExpand(expand ? false : "expanded");
              }}
              >
              <span></span>
              <span></span>
              <span></span>sta
              </Navbar.Toggle>
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Item>
                  <Link aria-label="Go to Home Page" className="navbar-link" to="/" onClick={() => setExpand(false)}>
                      <span className="nav-link-label">Home</span>
                  </Link>
                </Nav.Item>

                <Nav.Item>
                <Link aria-label="Go to Shop Page" className="navbar-link" to="/shop" onClick={() => setExpand(false)}>
                    <span className="nav-link-label">Shop</span>
                </Link>
                </Nav.Item>

                <Nav.Item>
                <Link aria-label="Go to Big Page" className="navbar-link" to="/big" onClick={() => setExpand(false)}>
                    <span className="nav-link-label">Big Discount</span>
                </Link>
                </Nav.Item>

                <Nav.Item>
                <Link aria-label="Go to New Page" className="navbar-link" to="/new" onClick={() => setExpand(false)}>
                    <span className="nav-link-label">New Arrivals</span>
                </Link>
                </Nav.Item>

                <Nav.Item>
                <Link aria-label="Go to Best Page" className="navbar-link" to="/best" onClick={() => setExpand(false)}>
                    <span className="nav-link-label">Best Sales</span>
                </Link>
                </Nav.Item>

                <Nav.Item>
                <Link aria-label="Go to Form Page" className="navbar-link" to="/form" onClick={() => setExpand(false)}>
                    <span className="nav-link-label">Join Us</span>
                </Link>
                </Nav.Item>

                <Nav.Item>
                <Link aria-label="Go to Cart Page" className="navbar-link" to="/cart" onClick={() => setExpand(false)}>
                    <span className="nav-link-label">Cart</span>
                </Link>
                </Nav.Item>
              </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar
