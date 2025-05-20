"use client"

// pages/doctorProtocol.tsx
import React from "react";
import { Card, Button, Avatar, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import CustomButton from "@/components/customComponent/CustomButton";
import BackHeader from "@/components/customComponent/BackHeader";

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
  return (

    <div >
        <BackHeader title={"Back"} />

    <div className="flex gap-6 p-6 bg-gray-50 min-h-screen">
      {/* Left Sidebar */}
      <div className="bg-white rounded-lg shadow-md p-6 w-72 flex flex-col">
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
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {protocols.map(({ id, title, totalPlan, image }) => (
          <Card
            key={id}
            hoverable
            cover={
              <img
                alt={title}
                src={image}
                className="rounded-t-lg object-cover w-full"
              />
            }
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
            {/* <Button
              type="primary"
              icon={<EditOutlined />}
              size="small"
              className="mt-4 w-full"
            >
              Edit
            </Button> */}
            <CustomButton text="Vieew" />
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DoctorProtocolPage;
