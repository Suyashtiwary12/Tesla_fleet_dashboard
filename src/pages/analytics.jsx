// Analytics.jsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

function Analytics() {
  const energyUsage = [
    { month: "Jan", kWh: 4200 },
    { month: "Feb", kWh: 3900 },
    { month: "Mar", kWh: 4700 },
    { month: "Apr", kWh: 5000 },
    { month: "May", kWh: 5300 },
    { month: "Jun", kWh: 4900 },
  ];

  const fleetDistribution = [
    { name: "Model 3", value: 12 },
    { name: "Model Y", value: 18 },
    { name: "Model S", value: 5 },
    { name: "Model X", value: 3 },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto font-sans">
        <h1 className="text-2xl text-black font-bold mb-6">Fleet Analytics</h1>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Monthly Energy Usage (kWh)
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={energyUsage}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="kWh"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Fleet Composition</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={fleetDistribution}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  label
                >
                  {fleetDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Analytics;
