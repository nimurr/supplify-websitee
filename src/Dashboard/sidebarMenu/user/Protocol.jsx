"use client";

import React from "react";
import { Table, Button, Avatar } from "antd";
import CustomButton from "@/components/customComponent/CustomButton";
import Link from "next/link";

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

// Sample data for protocol assignments (doctors/trainers)
const protocolAssignments = [
  {
    id: 1,
    doctorName: "Sakib Ahmed",
    protocol: 5,
    avatar: "/images/trainer.png",
  },
  {
    id: 2,
    doctorName: "Sakib Ahmed",
    protocol: 2,
    avatar: "/images/trainer.png",
  },
  {
    id: 3,
    doctorName: "Sakib Ahmed",
    protocol: 2,
    avatar: "/images/trainer.png",
  },
  {
    id: 4,
    doctorName: "Sakib Ahmed",
    protocol: 2,
    avatar: "/images/trainer.png",
  },
];

// Protocol card component
const ProtocolCard = ({ protocol }) => (

    
  <div className="bg-white rounded-md overflow-hidden shadow-sm">
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
      <p className="text-gray-600 text-sm mb-3">Total Plan : {protocol.totalPlan}</p>
      
      {/* View Full Button */}
      <Link href='/dashboard/protocol/details'>
      
     <CustomButton
     text="View Full"
     
     />
      
      </Link>
      
    </div>
  </div>
);

export default function ProtocolPage() {
  // Table columns configuration
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 50,
    },
    {
      title: "Doctor Name",
      dataIndex: "doctorName",
      key: "doctorName",
      render: (text, record) => (
        <div className="flex items-center">
          <Avatar src={record.avatar} size="small" className="mr-2" />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Protocol",
      dataIndex: "protocol",
      key: "protocol",
      width: 80,
    },
  ];

  return (
    <div className="p-4 md:p-6 bg-gray-50">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side - Protocol assignments table */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-medium mb-4">Protocols</h2>
              
              <Table
                dataSource={protocolAssignments}
                columns={columns}
                pagination={false}
                size="small"
                rowClassName={(record, index) => 
                  index === 0 ? "bg-red-50" : ""
                }
                rowKey="id"
              />
            </div>
          </div>
          
          {/* Right side - Protocol cards */}
          <div className="w-full md:w-2/3 l ">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {protocolsData.map((protocol) => (
                  <ProtocolCard key={protocol.id} protocol={protocol} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}