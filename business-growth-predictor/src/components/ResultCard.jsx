import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ProbabilityChart from './ProbabilityChart';

function ResultCard({ result }) {

  if (!result) {
    return (
      <Card className="shadow h-100">

        <Card.Body>

          <h4 className="text-center mb-4">
            Prediction Result
          </h4>

          <p className="text-center text-muted">
            Enter startup details and click Predict
          </p>

        </Card.Body>

      </Card>
    );
  }

  return (

    <Card className="shadow h-100">

      <Card.Body className="text-center">

        <h4 className="mb-4">
          Prediction Result
        </h4>

        <div
          className={
            result.result === "SUCCESS"
              ? "alert alert-success"
              : "alert alert-danger"
          }
        >
          <h3 className="mb-0">
            {result.result}
          </h3>
        </div>

        <hr />

        <h5>
          Confidence: {result.confidence}%
        </h5>

        <h5 className="mt-3">
          Risk Level: {result.risk}
        </h5>

        <hr />

        <h6 className="mb-2">
          Success Probability
        </h6>

        <ProgressBar
          now={result.successProbability}
          label={`${result.successProbability}%`}
          variant="success"
          className="mb-4"
        />

        <h6 className="mb-2">
          Failure Probability
        </h6>

        <ProgressBar
          now={result.failureProbability}
          label={`${result.failureProbability}%`}
          variant="danger"
          className="mb-4"
        />

        <hr />

        <ProbabilityChart
          result={result}
        />

      </Card.Body>

    </Card>

  );
}

export default ResultCard;