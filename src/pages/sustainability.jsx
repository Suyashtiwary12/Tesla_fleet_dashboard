// Sustainability.jsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function Sustainability() {
  const co2Savings = [
    { year: "2020", saved: 2.1 },
    { year: "2021", saved: 3.5 },
    { year: "2022", saved: 4.8 },
    { year: "2023", saved: 5.9 },
    { year: "2024", saved: 7.3 },
  ];

  const renewableShare = [
    { source: "Solar", percent: 45 },
    { source: "Wind", percent: 35 },
    { source: "Grid", percent: 20 },
  ];

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto font-sans">
        <h1 className="text-2xl text-black font-bold mb-6">
          Sustainability Impact
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">CO₂ Savings (tons)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={co2Savings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="saved" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Renewable Energy Sources
            </h3>
            <ul className="space-y-3">
              {renewableShare.map((item, idx) => (
                <li key={idx} className="flex justify-between text-gray-700">
                  <span>{item.source}</span>
                  <span className="font-bold">{item.percent}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Sustainability;
