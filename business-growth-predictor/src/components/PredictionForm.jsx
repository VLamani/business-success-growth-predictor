import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PredictionForm({
  formData,
  setFormData,
  setResult
}) {

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handlePredict = async () => {

  try {

    const API_URL =
      "https://startup-success-backend.onrender.com";

    const response = await axios.post(
      `${API_URL}/predict`,
      formData
    );

    setResult(response.data);

  } catch (error) {

    console.error(error);

    alert('Prediction Failed');

  }

};

  const generateSampleStartup = () => {

    const startups = [

      {
        category: "Software",
        country: "USA",
        stateCode: "CA",
        region: "California",
        city: "San Francisco",
        fundingAmount: "50000000",
        fundingRounds: "15",
        companyAge: "15",
        fundingDuration: "120"
      },

      {
        category: "FinTech",
        country: "USA",
        stateCode: "NY",
        region: "New York",
        city: "New York",
        fundingAmount: "12000000",
        fundingRounds: "8",
        companyAge: "7",
        fundingDuration: "60"
      },

      {
        category: "Healthcare",
        country: "UK",
        stateCode: "LN",
        region: "London",
        city: "London",
        fundingAmount: "5000000",
        fundingRounds: "4",
        companyAge: "5",
        fundingDuration: "36"
      },

      {
        category: "E-Commerce",
        country: "IND",
        stateCode: "KA",
        region: "Karnataka",
        city: "Bangalore",
        fundingAmount: "800000",
        fundingRounds: "2",
        companyAge: "2",
        fundingDuration: "12"
      },

      {
        category: "Education",
        country: "IND",
        stateCode: "MH",
        region: "Maharashtra",
        city: "Mumbai",
        fundingAmount: "1500000",
        fundingRounds: "3",
        companyAge: "4",
        fundingDuration: "24"
      },

      {
        category: "AI",
        country: "USA",
        stateCode: "TX",
        region: "Texas",
        city: "Austin",
        fundingAmount: "25000000",
        fundingRounds: "10",
        companyAge: "8",
        fundingDuration: "72"
      },

      {
        category: "Retail",
        country: "IND",
        stateCode: "GA",
        region: "Goa",
        city: "Panaji",
        fundingAmount: "2000",
        fundingRounds: "1",
        companyAge: "0",
        fundingDuration: "1"
      },

      {
        category: "Unknown",
        country: "xyz",
        stateCode: "xx",
        region: "test",
        city: "test",
        fundingAmount: "1000",
        fundingRounds: "1",
        companyAge: "0",
        fundingDuration: "1"
      }

    ];

    const randomStartup =
      startups[Math.floor(Math.random() * startups.length)];

    setFormData(randomStartup);

  };

  const clearForm = () => {

    setFormData({
      category: "",
      country: "",
      stateCode: "",
      region: "",
      city: "",
      fundingAmount: "",
      fundingRounds: "",
      companyAge: "",
      fundingDuration: ""
    });

  };

  return (

    <Container className="mb-4">

      <Card className="shadow p-4">

        <h3 className="text-center mb-4">
          Startup Information
        </h3>

        <Form>

          <Row>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Country Code</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

          </Row>

          <Row>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>State Code</Form.Label>
                <Form.Control
                  type="text"
                  name="stateCode"
                  value={formData.stateCode}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Region</Form.Label>
                <Form.Control
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

          </Row>

          <Row>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Funding Amount</Form.Label>
                <Form.Control
                  type="number"
                  name="fundingAmount"
                  value={formData.fundingAmount}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

          </Row>

          <Row>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Funding Rounds</Form.Label>
                <Form.Control
                  type="number"
                  name="fundingRounds"
                  value={formData.fundingRounds}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Company Age</Form.Label>
                <Form.Control
                  type="number"
                  name="companyAge"
                  value={formData.companyAge}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

          </Row>

          <Row>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Funding Duration</Form.Label>
                <Form.Control
                  type="number"
                  name="fundingDuration"
                  value={formData.fundingDuration}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

          </Row>

          <div className="text-center">

            <Button
              variant="warning"
              className="me-2"
              onClick={generateSampleStartup}
            >
              🎲 Generate Sample Startup
            </Button>

            <Button
              variant="secondary"
              className="me-2"
              onClick={clearForm}
            >
              🧹 Clear
            </Button>

            <Button
              variant="success"
              size="lg"
              onClick={handlePredict}
            >
              🚀 Predict Business Growth
            </Button>

          </div>

        </Form>

      </Card>

    </Container>

  );
}

export default PredictionForm;