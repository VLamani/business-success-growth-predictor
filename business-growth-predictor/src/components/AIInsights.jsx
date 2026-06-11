import Card from 'react-bootstrap/Card';

function AIInsights({ result, formData }) {

  if (!result) return null;

  const insights = [];

  if (Number(formData.companyAge) < 3)
    insights.push("Young startup with limited track record");

  if (Number(formData.fundingRounds) < 3)
    insights.push("Few funding rounds completed");

  if (Number(formData.fundingAmount) > 10000000)
    insights.push("Strong funding support from investors");

  if (result.result === "SUCCESS")
    insights.push("Business indicators suggest growth potential");
  else
    insights.push("Model detected higher business risk");

  return (
    <Card className="shadow mt-4">

      <Card.Body>

        <h4 className="text-center mb-4">
           AI Insights
        </h4>

        <div className="px-3">

          {
            insights.map((item, index) => (
              <p key={index}>
                ✅ {item}
              </p>
            ))
          }

        </div>

      </Card.Body>

    </Card>
  );
}

export default AIInsights;