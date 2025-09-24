"use client"

import BackHeader from "@/components/customComponent/BackHeader";
import { useGetAllMealSuggestionQuery, useGetMealPlanByProtocolIdAndPatientIdQuery } from "@/redux/fetures/Specialist/specialist";
import React, { useState, useEffect } from "react";

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
          {/* <li>Should have diet</li> 
          <li>should note eat on the brkafast</li> */}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="font-semibold mb-2">Description</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          {fullMealPlanData?.description || "No description available."}
        </p>
      </div>
      <div>
        {/* show all specialistSuggestions */}
 
      </div>



    </div>
  );
}
