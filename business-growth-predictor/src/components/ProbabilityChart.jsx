import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function ProbabilityChart({ result }) {

  if (!result) return null;

  const data = [
    {
      name: "Success",
      value: result.successProbability
    },
    {
      name: "Failure",
      value: result.failureProbability
    }
  ];

  const COLORS = ["#28a745", "#dc3545"];

  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>

        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={75}
          dataKey="value"
          label={({ name, value }) =>
            `${name}: ${value}%`
          }
        >
          {
            data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))
          }
        </Pie>

        <Tooltip />
        <Legend />

      </PieChart>
    </ResponsiveContainer>
  );
}

export default ProbabilityChart;