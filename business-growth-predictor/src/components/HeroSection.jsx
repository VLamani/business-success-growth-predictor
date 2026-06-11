import Container from 'react-bootstrap/Container';

function HeroSection() {
  return (
    <Container className="text-center my-4">
      <h2 className="fw-bold">
        Startup Success Prediction System
      </h2>

      <p className="text-muted">
        Predict whether a startup or business is likely to succeed using Machine Learning.
      </p>
    </Container>
  );
}

export default HeroSection;