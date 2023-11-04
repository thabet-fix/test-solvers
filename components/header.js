import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="logo mx-auto">AI Ignition</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;
