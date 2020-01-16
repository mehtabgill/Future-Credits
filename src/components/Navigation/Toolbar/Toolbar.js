import React from 'react' ;
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap' ;

const Toolbar = (props) => {

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Future Credits</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Project Posts</Nav.Link>
                <Nav.Link href="#pricing">Create Post</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
}

export default Toolbar ;