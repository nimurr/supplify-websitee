// pages/doctorProtocol.tsx
'use client'
import React, { useState } from "react";
import { Card, Button, Avatar, Input, Modal, Select } from "antd";
import { EditOutlined } from "@ant-design/icons";
import CustomButton from "@/components/customComponent/CustomButton";
import BackHeader from "@/components/customComponent/BackHeader";
import { FiPlusCircle } from "react-icons/fi";
import { useAssignProtocolToPatientMutation, useGetAllProtocalsByPatientIdQuery } from "@/redux/fetures/doctor/doctor";

const { TextArea } = Input;

const protocols = [
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
    totalPlan: 0,
    image: "/images/sprogram.png",
  },
  {
    id: 5,
    title: "Longevity & Anti-Aging",
    totalPlan: 0,
    image: "/images/sprogram.png",
  },
];

const DoctorProtocolPage = () => {
  // get patientId from url
  const urlParams = new URLSearchParams(window.location.search);
  const patientId = urlParams.get("patientId");

  const [assignProtocol] = useAssignProtocolToPatientMutation();

  const { data } = useGetAllProtocalsByPatientIdQuery(patientId);
  const protocolData = data?.data?.attributes?.results || [];
  console.log(protocolData);

  // State for modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  // State for selected specialist
  const [specialist, setSpecialist] = useState();

  const handleAssignSpecialist = () => {
    // Logic to assign specialist (can be integrated with API)
    console.log("Assigned Specialist:", specialist);
    setIsModalVisible(false);  // Close the modal after assigning
  };

  return (
    <div>
      <BackHeader title={"Back"} />

      <div className="flex lg:flex-row flex-col gap-6 p-6 bg-gray-50 min-h-screen">
        {/* Left Sidebar */}
        <div className="bg-white rounded-lg shadow-md p-6 md:w-72 w-full flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Avatar
              size={60}
              src="https://i.pravatar.cc/150?img=12"
              alt="Mahmud"
            />
            <span className="font-semibold text-sm">Mahmud</span>
          </div>
          <div className="mb-1 text-sm font-semibold">Extra Note</div>
          <p className="text-xs text-gray-500 mb-4">
            Feel free to add a private note for this member. Only you will be able
            to view it.
          </p>
          <TextArea
            rows={12}
            placeholder="Type your note ..."
            className="resize-none rounded-md border border-gray-300"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2>All Protocol</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setIsModalVisible(true)}  // Show modal on click
                className="bg-red-600 text-white py-2 px-6 rounded-lg"
              >
                Assign a Specialist
              </button>
              <button className="bg-red-600 text-white py-2 px-6 rounded-lg flex items-center gap-2">
                <FiPlusCircle /> Create New
              </button>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {protocols.map(({ id, title, totalPlan, image }) => (
              <Card
                key={id}
                hoverable
                bodyStyle={{ padding: "12px 16px" }}
                className="rounded-lg shadow"
              >
                <Card.Meta
                  title={
                    <div className="truncate font-semibold text-sm">{title}</div>
                  }
                  description={
                    <div className="text-xs text-gray-600">
                      Total Plan : {totalPlan}
                    </div>
                  }
                />
                <button className="bg-red-600 text-white py-2 px-6 rounded-lg mt-3 w-full" size="small">
                  <EditOutlined /> Edit
                </button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Assign Specialist Modal */}
      <Modal
        title="Assign a Specialist"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}  // Close modal
        footer={null}  // No default footer
        width={400}
      >
        <div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Select Name</label>
            <Select
              value={specialist}
              onChange={(value) => setSpecialist(value)}
              style={{ width: "100%" }}
              placeholder="Select Specialist"
            >
              <Select.Option value="Mahmud">Mahmud</Select.Option>
              {/* Add other options here */}
            </Select>
          </div>
          <Button
            type="primary"
            block
            className="bg-red-600 text-white"
            onClick={handleAssignSpecialist}
          >
            Assign a Specialist
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default DoctorProtocolPage;
