import React from 'react'
import {Navbar,Container,Nav,Form,FormControl,Button} from 'react-bootstrap';
import {Link } from 'react-router-dom'

const Navbaar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">E-commerce</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/Categories">Categories</Nav.Link>
        <Nav.Link as = {Link} to="/Scategoriesdt">Scategories</Nav.Link>
        <Nav.Link as = {Link} to="/Articles">Articles</Nav.Link>
        <Nav.Link as = {Link} to="/ArticlesCard">Articles cards</Nav.Link>
        <Nav.Link as = {Link} to="/Articlesdt">Articles database</Nav.Link>
        <Nav.Link as = {Link} to="/Categoriesdt">Categories database</Nav.Link>

      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navbaar
