import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer
      className="bg-dark text-white mt-5 py-3"
    >
      <Container className="text-center">

        <h6>
          Business Growth Expansion Predictor
        </h6>

        <small>
          Developed using React, Flask and Machine Learning
        </small>

      </Container>
    </footer>
  );
}

export default Footer;