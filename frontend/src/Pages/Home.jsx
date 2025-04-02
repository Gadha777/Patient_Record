import { useState } from "react";
import { Navbar } from "../Components/Navbar";

export default function HomePage() {
  const [selectedRider, setSelectedRider] = useState("");
  const riders = ["John Doe", "Jane Smith", "Alice Johnson"];

  return (
    <div>
        <Navbar />
      {/* Rider Selection */}
      <div className="p- bg-gray-200">
        <label className="text-gray-700 font-semibold">Rider Name:</label>
        <select
          className="ml-2 p-2 border rounded"
          value={selectedRider}
          onChange={(e) => setSelectedRider(e.target.value)}
        >
          <option value="">Select Rider</option>
          {riders.map((rider) => (
            <option key={rider} value={rider}>
              {rider}
            </option>
          ))}
        </select>
        <button className="ml-4 px-4 py-2 border rounded hover:bg-gray-300">Refresh</button>
      </div>

      {/* Content Area */}
      <div className="p-6 bg-gray-300 h-80 flex items-center justify-center">
        <p className="text-gray-600">No Data Available</p>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white text-center p-3 text-sm">
        Copyright &copy; 2024. All rights reserved to{" "}
        <span className="font-bold">Caredata Informatics</span>
      </div>
    </div>
  );
}
