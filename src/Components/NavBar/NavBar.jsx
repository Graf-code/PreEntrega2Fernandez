import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NavBar() {
  return (
    <Navbar expand="lg" className="nav__color w-100">
      <Container className="nav__container">
        <Navbar.Brand className="nav__logo" as={Link} to="/">
          LuCode
        </Navbar.Brand>
        <Navbar.Toggle
          className="boton__despliegue"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <div className="con__links">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn__inicio" : "btn"
                }
                to="/"
              >
                Inicio
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn__categorias" : "btn"
                }
                to="/category/Programacion-Web"
              >
                Programación Web
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn__categorias" : "btn"
                }
                to="/category/Bases-de-Datos"
              >
                Bases de Datos
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn__categorias" : "btn"
                }
                to="/category/Lenguajes-de-Programacion"
              >
                Lenguajes de Programación
              </NavLink>
            </div>
          </Nav>
          <div className="cart__form">
            <div className="cart__padding">
              <Link to="/cart">
                <CartWidget />
              </Link>
            </div>
            <Form className="d-flex ms-auto">
              {" "}
              <Form.Control
                type="search"
                placeholder="Busque su Curso"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Registrarse</Button>
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
