"use client";

import CustomButton from "@/components/customComponent/customButton";
import { Card, Button, Radio, Row, Col, Divider, Tabs, Image } from "antd";
import { useRouter } from "next/navigation";

import { useState } from "react";

const { TabPane } = Tabs;

const yourDoctors = [
  {
    id: 1,
    name: "Sakib Ahmed",
    description: "Description for this item is very important for the user",
    imageUrl: "/images/doctor.png",
  },
  {
    id: 2,
    name: "John Doe",
    description: "Another doctor description here for the user",
    imageUrl: "/images/doctor.png",
  },
];

const otherDoctors = [
  {
    id: 3,
    name: "Jane Smith",
    description: "Description for other doctor",
    imageUrl: "/images/doctor.png",
  },
  {
    id: 4,
    name: "Alice Johnson",
    description: "Description for other doctor",
    imageUrl: "/images/doctor.png",
  },
  {
    id: 5,
    name: "Bob Brown",
    description: "Description for other doctor",
    imageUrl: "/images/doctor.png",
  },
  {
    id: 6,
    name: "Charlie White",
    description: "Description for other doctor",
    imageUrl: "/images/doctor.png",
  },
];

const schedules = [
  {
    id: 1,
    title: "Schedule 1",
    date: "12-Jan-2025, Saturday",
    startTime: "10:00 pm",
    endTime: "11:00 pm",
    price: 180,
    oldPrice: 200,
    description:
      "This description is very important for a user, they can Acknowledge the full program on this schedule. This description is very important for a user.",
  },
  // add more schedules if needed
];

export default function DoctorPage() {
    const router = useRouter()
  // Select the first doctor from "yourDoctors" by default for full view
  const ViewFull = (id) => {
      console.log('cliceddd')
        console.log(id)
        router.push(`/dashboard/doctor/view-full/${id}`)

    }

  return (
    <div className=" mx-auto p-6 space-y-10">
      {/* Doctors Tabs: Your Doctor & Others Doctor */}
      <Tabs defaultActiveKey="your" size="middle" tabBarGutter={50}>
        <TabPane
          tab={<span className="text-red-600 font-semibold">Your Doctor</span>}
          key="your"
        >
         <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
            {otherDoctors.slice(0,2).map((doc) => (
              <Card
                key={doc.id}
                hoverable
                className="rounded-lg shadow-md cursor-pointer"
                cover={
                  <div className="relative rounded-t-lg overflow-hidden">
                    <Image
                      src={doc.imageUrl}
                      alt={doc.name}
                      layout="fill"
                      objectFit="cover"
                      className=" object-cover aspect-auto"
                    />
                  </div>
                }
              >
                <h3 className="font-semibold text-lg mb-1">{doc.name}</h3>
                <p className="text-gray-600 text-sm mb-1">
                  {doc.description}{" "}
                  <span className="font-semibold">...see more</span>
                </p>
                <CustomButton 
                   onClick={() => ViewFull(doc.id)}
                  text="View Full"
                  className="p-2"
                  />
              </Card>
            ))}
          </div>
        </TabPane>

        <TabPane
          tab={<span className="text-gray-600">Others Doctor</span>}
          key="others"
        >
          <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
            {otherDoctors.map((doc) => (
              <Card
                key={doc.id}
                hoverable
                className="rounded-lg shadow-md cursor-pointer"
                cover={
                  <div className="relative rounded-t-lg overflow-hidden">
                    <Image
                      src={doc.imageUrl}
                      alt={doc.name}
                      layout="fill"
                      objectFit="cover"
                      className=" object-cover aspect-auto"
                    />
                  </div>
                }
              >
                <h3 className="font-semibold text-lg mb-1">{doc.name}</h3>
                <p className="text-gray-600 text-sm mb-1">
                  {doc.description}{" "}
                  <span className="font-semibold">...see more</span>
                </p>
                <CustomButton 
                   onClick={() => ViewFull(doc.id)}
                  text="View Full"
                  className="p-2"
                  />
              </Card>
            ))}
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
