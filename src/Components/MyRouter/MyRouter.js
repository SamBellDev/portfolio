import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import HomePage from '../Homepage/Homepage';
import Contact from '../Contact/Contact'
import NotFound from '../NotFound/NotFound'
import ProjectsPage from '../ProjectsPage/ProjectsPage'

const MyRouter = () => {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Sam Bell Dev</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Projects" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/projects">All projects</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='/projects/1'>Project 1</NavDropdown.Item>
                                <NavDropdown.Item href={'/projects/2'}>Project 2</NavDropdown.Item>
                                <NavDropdown.Item href={'/projects/3'}>Project 3</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contact">Contact me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default MyRouter