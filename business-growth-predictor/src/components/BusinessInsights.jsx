import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BusinessInsights({ formData }) {

  return (
    <Card className="shadow h-100">

      <Card.Body>

        <h4 className="text-center mb-4">
          Business Insights
        </h4>

        <Row>

          <Col>

            <p>
              <strong>Category:</strong>
              <br />
              {formData.category || '-'}
            </p>

            <p>
              <strong>Country:</strong>
              <br />
              {formData.country || '-'}
            </p>

            <p>
              <strong>State Code:</strong>
              <br />
              {formData.stateCode || '-'}
            </p>

            <p>
              <strong>Region:</strong>
              <br />
              {formData.region || '-'}
            </p>

          </Col>

          <Col>

            <p>
              <strong>City:</strong>
              <br />
              {formData.city || '-'}
            </p>

            <p>
              <strong>Funding Amount:</strong>
              <br />
              {formData.fundingAmount || '-'}
            </p>

            <p>
              <strong>Funding Rounds:</strong>
              <br />
              {formData.fundingRounds || '-'}
            </p>

            <p>
              <strong>Company Age:</strong>
              <br />
              {formData.companyAge || '-'}
            </p>

            <p>
              <strong>Funding Duration:</strong>
              <br />
              {formData.fundingDuration || '-'}
            </p>

          </Col>

        </Row>

      </Card.Body>

    </Card>
  );
}

export default BusinessInsights;