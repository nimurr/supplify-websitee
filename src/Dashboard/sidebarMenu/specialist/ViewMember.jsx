"use client";

import React, { useState } from "react";
import { Table, Avatar } from "antd";
import CustomButton from "@/components/customComponent/CustomButton";
import Link from "next/link";
import BackHeader from "@/components/customComponent/BackHeader";
import { useSpacialistPatientByIdQuery } from "@/redux/fetures/Specialist/specialist";
import url from "@/redux/api/baseUrl";

// Sample data for protocols
const protocolsData = [
  {
    id: 1,
    title: "Fat Loss Protocol",
    totalPlan: 4,
    image: "/images/sprogram.png",
  },
  {
    id: 2,
    title: "Muscle Gain Protocol",
    totalPlan: 4,
    image: "/images/sprogram.png",
  },
  {
    id: 3,
    title: "Performance Training",
    totalPlan: 4,
    image: "/images/sprogram.png",
  },
  {
    id: 4,
    title: "Gut Health Optimization",
    totalPlan: 4,
    image: "/images/sprogram.png",
  },
  {
    id: 5,
    title: "Longevity & Anti-Aging",
    totalPlan: 4,
    image: "/images/sprogram.png",
  },
];

// Protocol card component
const ProtocolCard = ({ protocol, selectedId }) => (
  <div
    className={`bg-white rounded-md overflow-hidden shadow-sm ${selectedId === protocol.id ? "border-4 border-blue-500" : ""
      }`}
  >
    {/* Protocol Image */}
    <div className="w-full h-48 overflow-hidden">
      <img
        src={protocol.image}
        alt={protocol.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Protocol Info */}
    <div className="p-3">
      <h3 className="font-medium text-base mb-1">{protocol.title}</h3>
      <p className="text-gray-600 text-sm mb-3">Total Plan: {protocol.totalPlan}</p>

      {/* View Full Button */}
      <Link href="/specialistDs/members/mealplan">
        <CustomButton text="View Full" />
      </Link>
    </div>
  </div>
);

export default function ViewMember() {
  // get data from search params patientId
  const patientId =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("patientId")
      : null;

  // Fetch patient data using patientId
  const { data: patientData, isLoading } = useSpacialistPatientByIdQuery(patientId);
  const assignedProtocols = patientData?.data?.attributes?.results || [];

  // State to store the selected protocol id
  const [selectedProtocolId, setSelectedProtocolId] = useState(null);
  console.log(selectedProtocolId);

  // Handle row click
  const handleRowClick = (record) => {
    setSelectedProtocolId(record._id);
  };

  // Table columns configuration
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 50,
      render: (text, record, index) => <span className="font-semibold">{index + 1}</span>,
    },
    {
      title: "Doctor Name",
      dataIndex: "doctorName",
      key: "doctorName",
      render: (text, record) => (
        <div className="flex items-center">
          <Avatar src={url + record?.doctorProfileImage?.imageUrl} size="small" className="mr-2" />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Protocol",
      dataIndex: "protocol",
      key: "protocol",
      width: 80,
      render: (text, record) => <span className="font-semibold">{record?.protocolCount}</span>,
    },
  ];

  return (
    <div className="p-4 md:p-6 bg-gray-50">
      <BackHeader title={"View full"} />
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side - Protocol assignments table */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-medium mb-4">Protocols</h2>

              <Table
                dataSource={assignedProtocols}
                columns={columns}
                pagination={false}
                size="small"
                rowClassName={(record, index) =>
                  index === 0 ? "bg-red-50" : ""
                }
                rowKey="id"
                onRow={(record) => ({
                  onClick: () => handleRowClick(record), // Handle row click
                })}
                style={{ cursor: "pointer" }} // Add pointer cursor to rows
              />
            </div>
          </div>

          {/* Right side - Protocol cards */}
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {protocolsData.map((protocol) => (
                  <ProtocolCard
                    key={protocol.id}
                    protocol={protocol}
                    selectedId={selectedProtocolId} // Pass selectedId to highlight selected protocol
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
