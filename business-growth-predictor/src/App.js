import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection';
import PredictionForm from './components/PredictionForm';
import ResultCard from './components/ResultCard';
import BusinessInsights from './components/BusinessInsights';
import AIInsights from './components/AIInsights';
import Footer from './components/Footer';

function App() {

  const [formData, setFormData] = useState({
    category: '',
    country: '',
    stateCode: '',
    region: '',
    city: '',
    fundingAmount: '',
    fundingRounds: '',
    companyAge: '',
    fundingDuration: ''
  });

  const [result, setResult] = useState(null);

  return (
    <>
      <NavbarComponent />

      <HeroSection />

      <PredictionForm
        formData={formData}
        setFormData={setFormData}
        setResult={setResult}
      />

      <Container className="mb-5">

        <Row>

          <Col lg={4}>
            <ResultCard result={result} />
          </Col>

          <Col lg={8}>
            <BusinessInsights formData={formData} />
          </Col>

        </Row>

        <Row className="mt-4">

          <Col>
            <AIInsights
              result={result}
              formData={formData}
            />
          </Col>

        </Row>

      </Container>

      <Footer />
    </>
  );
}

export default App;