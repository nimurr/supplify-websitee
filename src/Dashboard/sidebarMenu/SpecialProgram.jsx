 "use client";

import React, { useState } from "react";
import { Card, Button, Tooltip } from "antd";
import { ClockCircleOutlined, CalendarOutlined, LeftOutlined } from "@ant-design/icons";
 
import { useRouter } from "next/navigation";
import Link from "next/link";
import CustomButton from "@/components/customComponent/CustomButton";

const data = Array(12).fill({
  title: "Gain chest",
  sessions: 10,
  price: "$50",
  duration: "5 month",
});

const SpecialistProgram = ({id}) => {
    console.log(id)
    const router = useRouter()
  const [selectedIndex, setSelectedIndex] = useState(0);
  const back = () => {
    router.push('/dashboard/specialist')
}

 

  return (
    <div> 
          <h1  className='text-2xl font-semibold items-center gap-2 mb-6 mt-6'>
        <LeftOutlined onClick={() => back()} className='cursor-pointer' />
        View Full Program {id}
        </h1>
    <div className="p-4 border border-blue-200 rounded-lg overflow-auto">
      <div className="grid md:grid-cols-6 grid-cols-1 gap-4">
        {data.map((item, index) => (
          <Card
            key={index}
            hoverable
            className={`border ${
              index === selectedIndex
                ? "border-blue-500 shadow-lg"
                : "border-gray-200"
            } rounded-md`}
            cover={
              <img
                alt="program"
                src="/images/sprogram.png" // Replace with your actual image path
                className="w-full object-cover rounded-t-md"
              />
            }
            onClick={() => setSelectedIndex(index)}
          >
            <h3 className="font-semibold text-base mb-2">{item.title}</h3>

            <div className="flex items-center space-x-2 mb-1">
              <Tooltip title="Sessions">
                <CalendarOutlined className="text-gray-500" />
              </Tooltip>
              <span className="text-xs text-gray-600">{item.sessions} Session</span>
              <span className="ml-auto font-semibold">{item.price}</span>
            </div>

            <div className="flex items-center space-x-2 mb-3">
              <Tooltip title="Duration">
                <ClockCircleOutlined className="text-gray-500" />
              </Tooltip>
              <span className="text-xs text-gray-600 ">{item.duration}</span>
            </div>

            {index === selectedIndex ? (
              
               <Button
                 type="default"
                 block
                 onClick={() => router.push("/dashboard/specialist/specialist-details")}
                 className="border-red-300 mt-5 text-red-500 hover:text-white hover:bg-red-500"
               >
                 Start
               </Button>
           
            ) : (
              <CustomButton
              text="Buy"
              className="mt-5"
              />
            )}
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SpecialistProgram;
