import "./navbar.css"
import {Col, Container, Nav, Navbar, Stack} from "react-bootstrap"
import ScrollSpy from "react-ui-scrollspy";
import {FaGithub,FaLinkedin} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"

const NavigationBar = () => {

  const scrollitems = ["home","about","project","contact"]

    return ( 
        <>
        <ScrollSpy
          item={scrollitems}
          currentClassName="active"
        >
        <Navbar data-bs-theme="dark" fixed="top">
        <Container fluid className="container-navbar">
        <Stack gap={3} className="stack-nav">
          <Navbar.Brand href="/">Faisal Swargaloka</Navbar.Brand>          
          <Nav className="me-auto">
            <Col className="col-nav">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#about" >About Me</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <div className="sosmed">
            <span className="span-sosmed"><a href="https://github.com/FaisalSwargaloka"><FaGithub size={35} /></a></span>
            <span className="span-sosmed"><a href="https://www.linkedin.com/in/faisal-swargaloka-727142267/"><FaLinkedin size={35}/></a></span>
            <span className="span-sosmed"><a href="https://instagram.com/faisal.jsx?igshid=MmIzYWVlNDQ5Yg=="><BsInstagram size={30}/></a></span>
            </div>
            </Col>
          </Nav>
          </Stack>
        </Container>
      </Navbar>
      </ScrollSpy>
        </>
    );
}
 
export default NavigationBar;