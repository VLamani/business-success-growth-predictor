import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          📈 Business Growth Expansion Predictor
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;