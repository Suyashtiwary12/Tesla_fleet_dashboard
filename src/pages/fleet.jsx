import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Fleet = () => {
  const [fleet] = useState([
    { vin: "5YJ3E1EA7JF000001", battery_health: 92, mileage: 32000, avg_range: 285 },
    { vin: "5YJ3E1EA7JF000002", battery_health: 85, mileage: 54000, avg_range: 260 },
    { vin: "5YJ3E1EA7JF000003", battery_health: 89, mileage: 41000, avg_range: 278 },
  ]);

  const batteryData = [
    { month: "Jan", health: 97 },
    { month: "Feb", health: 94 },
    { month: "Mar", health: 90 },
    { month: "Apr", health: 87 },
    { month: "May", health: 83 },
    { month: "Jun", health: 79 },
    { month: "Jul", health: 72 },
  ];

  const rangeData = [
    { month: "Jan", range: 240 },
    { month: "Feb", range: 230 },
    { month: "Mar", range: 300 },
    { month: "Apr", range: 320 },
    { month: "May", range: 275 },
    { month: "Jun", range: 260 },
    { month: "Jul", range: 220 },
  ];

  return (
    <main className="flex-1 p-4 md:p-8 overflow-y-auto">
      <h1 className="text-2xl text-black font-bold mb-6">Tesla Fleet Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-500">Fleet Size</p>
          <h2 className="text-3xl text-black font-semibold">{fleet.length}</h2>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-500">Avg Battery Health</p>
          <h2 className="text-3xl text-black font-semibold">
            {Math.round(fleet.reduce((sum, c) => sum + c.battery_health, 0) / fleet.length)}%
          </h2>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-500">CO₂ Saved</p>
          <h2 className="text-3xl text-black font-semibold">5.43 tons</h2>
              </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Battery Health</h3>
          <div className="w-full h-64">
            <ResponsiveContainer>
              <LineChart data={batteryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="health" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Range per Charge Cycle</h3>
          <div className="w-full h-64">
            <ResponsiveContainer>
              <BarChart data={rangeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="range" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Maintenance Alerts */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Predictive Maintenance</h3>
        {fleet.map((car) =>
          car.battery_health < 80 || car.mileage > 50000 ? (
            <div key={car.vin} className="flex items-center space-x-2 text-red-600 mb-2">
              <span>⚠️</span>
              <p>
                Car VIN <b>{car.vin}</b> may need service soon.
              </p>
            </div>
          ) : null
        )}
      </div>
    </main>
  );
};

export default Fleet;
