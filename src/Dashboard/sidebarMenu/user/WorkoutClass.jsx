"use client";

import React, { useState } from "react";
import { Button, Tabs } from "antd";
import CustomButton from "@/components/customComponent/CustomButton";
import { useRouter } from "next/navigation";
import Link from "next/link";
 

const { TabPane } = Tabs;

// Sample data for specialists
const specialists = [
  {
    id: 1,
    name: "Sakib Ahmed",
    description: "Description for this item is very important for the user",
    protocol: "Protocol Name",
    protocolCount: 2,
    image: "/images/trainer.png", // Replace with actual image path
  },
  {
    id: 2,
    name: "Sakib Ahmed",
    description: "Description for this item is very important for the user",
    protocol: "Protocol Name",
    protocolCount: 2,
    image: "/images/trainer.png",
  },
  {
    id: 3,
    name: "Sakib Ahmed",
    description: "Description for this item is very important for the user",
    protocol: "Protocol Name",
    protocolCount: 2,
    image: "/images/trainer.png",
  },
  {
    id: 4,
    name: "Sakib Ahmed",
    description: "Description for this item is very important for the user",
    protocol: "Protocol Name",
    protocolCount: 2,
    image: "/images/trainer.png",
  },
];


// Card component for each specialist
const SpecialistCard = ({ specialist }) => (

    

  <div className="bg-white rounded-lg shadow overflow-hidden">
    {/* Specialist Image */}
    <div className="w-full overflow-hidden">
      <img
        src={specialist.image}
        alt={specialist.name}
        className="  object-cover"
      />
    </div>
    
    {/* Specialist Info */}
    <div className="p-4">
      <h3 className="text-lg font-semibold">{specialist.name}</h3>
      <p className="text-gray-600 text-sm mt-1">
        {specialist.description}
        <span className="text-red-600 cursor-pointer">...see more</span>
      </p>
      
      {/* Protocol Badge */}
      <div className="flex items-center mt-3">
        <span className="text-sm text-gray-800 border border-gray-300 px-3 py-1 rounded-md">
          {specialist.protocol}
        </span>
        <span className="ml-2 text-gray-600 font-medium">+{specialist.protocolCount}</span>
      </div>
      
      {/* View Full Button */}
      <Link href='/dashboard/workout-class/details'>
      
      <CustomButton 
       text="View Full"
       className="mt-2"
      
      />
      </Link>
    
   
    </div>
  </div>
);

export default function WorkoutPage() {

  
  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div className="bg-gray-50 p-4 md:p-6">
      <div className=" mx-auto">
        {/* Custom Tabs */}
        <div className="mb-6">
          <div className="flex border-b border-gray-200">
            <div 
              className={`cursor-pointer px-8 py-3 font-medium text-base ${
                activeTab === "1" 
                  ? "text-red-600 border-b-2 border-red-600" 
                  : "text-gray-500"
              }`}
              onClick={() => handleTabChange("1")}
            >
              Your Specialists
            </div>
            <div 
              className={`cursor-pointer px-8 py-3 font-medium text-base ${
                activeTab === "2" 
                  ? "text-red-600 border-b-2 border-red-600" 
                  : "text-gray-500"
              }`}
              onClick={() => handleTabChange("2")}
            >
              Others Specialists
            </div>
          </div>
        </div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activeTab === "1" && (
            specialists.map(specialist => (
              <SpecialistCard key={specialist.id} specialist={specialist} />
            ))
          )}
          
          {activeTab === "2" && (
            specialists.map(specialist => (
              <SpecialistCard key={specialist.id} specialist={specialist} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}