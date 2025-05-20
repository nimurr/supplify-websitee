"use client"

import BackHeader from "@/components/customComponent/BackHeader";
import React, { useState } from "react";

const initialKeyPoints = [
  { id: 1, keyPoint: "Should have diet", solutionName: "eat 3 cope rice", suggestLink: 'https://linkis', editable: true },
  { id: 2, keyPoint: "", solutionName: "", suggestLink: "", editable: false },
];

const keyPointOptions = [
  "Should have diet",
  "should note eat on the brkafast",
  // add more key points here if needed
];

export default function MealPlan() {
  const [rows, setRows] = useState(initialKeyPoints);

  const addNewRow = () => {
    setRows([...rows, { id: Date.now(), keyPoint: "", solutionName: "", suggestLink: "", editable: false }]);
  };

  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const updateRow = (id, field, value) => {
    setRows(
      rows.map((row) =>
        row.id === id
          ? {
              ...row,
              [field]: value,
            }
          : row
      )
    );
  };

  const handleSubmit = () => {
    // handle form submission here
    console.log("Submit:", rows);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
        <BackHeader title={"View full"} />
      <h1 className="text-xl font-semibold mb-4">Meal Plan</h1>

      <div className="mb-6">
        <h2 className="font-semibold mb-2">Key Points</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Should have diet</li>
          <li>should note eat on the brkafast</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="font-semibold mb-2">Description</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Massa risus eget justo vel urna sapien posuere. Mauris magna egestas vestibulum cum egestas etiam
          mollis dolor. Massa curabitur quis felis ultrices varius orci facilisi auctor nunc. Aliquam lacus sit quisque pulvinar vitae accumsan
          pellentesque in. Congue ut luctus id proin in porttitor leo et. Libero proin euismod eget sed nulla ornare mattis. Ridiculus ac quam in
          lacus. Ultricies sapien risus quam diam posuere mauris. Malesuada diam neque in adipiscing condimentum eros neque. Eget aliquet sit scelerisque
          velit. Non felis congue gravida lobortis turpis pellentesque. Et consectetur sollicitudin blandit ridiculus sed. Nulla fermentum sit augue
          nibh eros ultrices. Vitae tempor bibendum nunc sed in commodo interdum mi aliquet. Mattis molestie luctus in sed rutrum. Vulputate massa et diam
          volutpat. Faucibus elementum magnis nam odio eu orci velit. Facilisi
        </p>
      </div>

      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-3 py-2 text-left">Sl No</th>
            <th className="border border-gray-300 px-3 py-2 text-left">Key Point</th>
            <th className="border border-gray-300 px-3 py-2 text-left">Solution Name</th>
            <th className="border border-gray-300 px-3 py-2 text-left">Suggest From Store</th>
            <th className="border border-gray-300 px-3 py-2 w-16"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={row.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="border border-gray-300 px-3 py-2">{idx + 1}</td>
              <td className="border border-gray-300 px-3 py-2">
                {row.editable ? (
                  <select
                    className="border border-gray-300 rounded px-2 py-1 w-full"
                    value={row.keyPoint}
                    onChange={(e) => updateRow(row.id, "keyPoint", e.target.value)}
                  >
                    <option value="">Select key point name</option>
                    {keyPointOptions.map((kp) => (
                      <option key={kp} value={kp}>
                        {kp}
                      </option>
                    ))}
                  </select>
                ) : (
                  row.keyPoint
                )}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {row.editable ? (
                  <input
                    type="text"
                    placeholder="type solution name"
                    className="border border-gray-300 rounded px-2 py-1 w-full"
                    value={row.solutionName}
                    onChange={(e) => updateRow(row.id, "solutionName", e.target.value)}
                  />
                ) : (
                  row.solutionName
                )}
              </td>
              <td className="border border-gray-300 px-3 py-2 flex items-center gap-1">
                {row.editable ? (
                  <input
                    type="text"
                    placeholder="paste the product link"
                    className="border border-gray-300 rounded px-2 py-1 flex-grow"
                    value={row.suggestLink}
                    onChange={(e) => updateRow(row.id, "suggestLink", e.target.value)}
                  />
                ) : (
                  <>
                    <a href={row.suggestLink} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                      {row.suggestLink}
                    </a>
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => alert("Edit link clicked")}
                      aria-label="Edit link"
                    >
                      ✏️
                    </button>
                  </>
                )}
              </td>
              <td className="border border-gray-300 px-1 py-2 text-center">
                {row.editable && (
                  <button
                    type="button"
                    className="text-red-600 hover:text-red-800"
                    onClick={() => deleteRow(row.id)}
                    aria-label="Delete row"
                  >
                    🗑️
                  </button>
                )}
              </td>
            </tr>
          ))}

          <tr>
            <td colSpan={5} className="border border-gray-300 px-3 py-2 text-center">
              <button
                type="button"
                onClick={addNewRow}
                className="border border-gray-400 rounded px-4 py-1 hover:bg-gray-100"
              >
                + Add New
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <button
        type="button"
        onClick={handleSubmit}
        className="mt-6 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
      >
        Send
      </button>
    </div>
  );
}
