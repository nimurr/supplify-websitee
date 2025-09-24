"use client"

import BackHeader from "@/components/customComponent/BackHeader";
import { useGetAllMealSuggestionQuery, useGetMealPlanByProtocolIdAndPatientIdQuery } from "@/redux/fetures/Specialist/specialist";
import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";

const initialKeyPoints = [
  { id: 1, keyPoint: "Should have diet", solutionName: "eat 3 cope rice", suggestLink: 'https://linkis', editable: true },
  { id: 2, keyPoint: "", solutionName: "", suggestLink: "", editable: false },
];

const keyPointOptions = [
  "Should have diet",
  "should note eat on the breakfast",
  // add more key points here if needed
];

export default function MealPlan() {
  const [rows, setRows] = useState(initialKeyPoints);
  const [planByDoctorId, setPatientId] = useState(null);

  // Get patientId and protocolId from URL, only on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      setPatientId(searchParams.get("planByDoctorId"));
    }
  }, []); // This runs only once, after the component mounts on the client side

  const { data, isLoading } = useGetAllMealSuggestionQuery({ protocolId: planByDoctorId });
  const fullMealPlanData = data?.data?.attributes[0] || [];
  console.log(fullMealPlanData?.specialistSuggestions);

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">
      <p>Loading...</p>
    </div>
  }

  // Handle adding new specialist suggestion row
  const addNewRow = () => {
    setRows([...rows, { id: rows.length + 1, keyPoint: "", solutionName: "", suggestLink: "", editable: true }]);
  };

  // Handle editing a row
  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  // Handle deleting a row
  const handleDelete = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
      <BackHeader title={"View full"} />
      <h1 className="text-xl font-semibold mb-4">{fullMealPlanData?.planType == "mealPlan" && "Meal Plan" || "No plan type available."}</h1>

      <div className="mb-6">
        <h2 className="font-semibold mb-2">Key Points</h2>
        <ul className="list-disc list-inside text-gray-700">
          {
            fullMealPlanData?.keyPoints?.map((point, index) => (
              <li key={index}>{point}</li>
            ))
          }
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="font-semibold mb-2">Description</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          {fullMealPlanData?.description || "No description available."}
        </p>
      </div>

      {/* Specialist Suggestions Section */}
      <div className="mb-8">
        <h2 className="font-semibold mb-2">Specialist Suggestions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">SL No</th>
                <th className="border px-4 py-2">Key Point</th>
                <th className="border px-4 py-2">Solution Name</th>
                <th className="border px-4 py-2">Suggest From Store</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{row.id}</td>
                  <td className="border px-4 py-2">
                    {row.editable ? (
                      <select
                        className="w-full"
                        value={row.keyPoint}
                        onChange={(e) => handleChange(index, "keyPoint", e.target.value)}
                      >
                        {keyPointOptions.map((option, i) => (
                          <option key={i} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      row.keyPoint
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="w-full"
                      value={row.solutionName}
                      onChange={(e) => handleChange(index, "solutionName", e.target.value)}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="w-full"
                      value={row.suggestLink}
                      onChange={(e) => handleChange(index, "suggestLink", e.target.value)}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className="text-red-500"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={addNewRow}
          className="mt-4 w-full flex items-center justify-center gap-2 bg-gray-200 text-black px-4 py-2 rounded"
        >
          <FiPlus />Add New Suggestion 
        </button>
        <button className="mt-4 flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded">Save Changes</button>
      </div>
    </div>
  );
}
