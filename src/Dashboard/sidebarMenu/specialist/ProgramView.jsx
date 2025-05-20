"use client"

import { useState } from "react";
import {
  Button,
  InputNumber,
  Tag,
  Typography,
  Divider,
  Space,
  Card,
} from "antd";
import {
  EditOutlined,
  PlusCircleOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import BackHeader from "@/components/customComponent/BackHeader";
import CustomButton from "@/components/customComponent/CustomButton";
import { useRouter } from "next/navigation";

const { Title, Text, Paragraph } = Typography;

const sampleSessions = new Array(6).fill({
  id: 1,
  sessionNumber: "Session 2",
  exercise: "Push-ups",
  duration: "30 min/day",
  remainingDays: "Remain 3 days",
  imgSrc:
    "/images/sprogram.png",
});

export default function ProgramView() {
    const router = useRouter();
  const [sessions, setSessions] = useState(sampleSessions);
  const [selectedSession, setSelectedSession] = useState(sampleSessions[0]);

  return (
    <div>

        <BackHeader
        title={"Session"}
        />
    <div className="min-h-screen md:flex gap-6 p-6 bg-gray-50">
      {/* Left Panel: Trainer Info */}
      <div className="w-64 bg-white rounded-md shadow p-4 flex flex-col items-center gap-4">
        <img
          src="/images/trainer.png"
          alt="Trainer"
          className="  rounded-lg object-cover"
        />
        <div className="text-center">
          <Title level={5} className="mb-0">Sakib Ahmed</Title>
          <Text type="secondary" className="text-xs">New Yorke, America</Text>
        </div>
        <div className="flex flex-wrap justify-center gap-1">
          <Tag color="default" className="text-xs">Stagnant trainer</Tag>
          <Tag color="default" className="text-xs">Trainer</Tag>
          <Tag color="default" className="text-xs">Body trainer</Tag>
          <Tag color="default" className="text-xs">Body trainer</Tag>
        </div>
        <Divider className="my-2" />
        <Paragraph className="text-xs px-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Massa risus eget justo vel
          urna sapien posuere. Mauris magna egestas vestibulum cum egestas
          etiam pulvinar dolor.
        </Paragraph>

        <div className="w-full space-y-2 text-sm">
          <div className="flex justify-between">
            <Text>Programs</Text>
            <InputNumber min={0} max={100} defaultValue={10} size="small" />
          </div>
          <div className="flex justify-between">
            <Text>Price</Text>
            <InputNumber
              min={0}
              max={10000}
              defaultValue={199}
              size="small"
              formatter={(value) => `$ ${value}`}
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
          </div>
          <div className="flex justify-between">
            <Text>Duration</Text>
            <InputNumber min={0} max={24} defaultValue={5} size="small" />
            <Text className="ml-1">month</Text>
          </div>
        </div>

        <Button type="primary" block className="mt-4">
          Save
        </Button>
      </div>

      {/* Middle Panel: Sessions List */}
      <div className="flex-1 bg-white rounded-md shadow p-6 flex flex-col">
        <div className=" md:flex  justify-between items-center mb-6">
            <div>

          <Title level={5} className="mb-0">Gain chest</Title>
            </div>
            <div>

          <Text className="text-xs">
            Total Session : 10 &nbsp;&nbsp; Total Parches : 100
          </Text>
            </div>
            <div>


         <CustomButton 
         text="Create new"
         onClick={() => router.push('/specialistDs/program/create-session')}
         />
            </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4">
          {sessions.map((session, idx) => (
            <Card
              key={idx}
              hoverable
              className="  gap-4"
              onClick={() => setSelectedSession(session)}
            >
              <img
                src={session.imgSrc}
                alt={session.exercise}
                className="w-20 h-16 object-cover rounded"
              />
              <div className="flex justify-between items-center">
                <div>

                <Text type="secondary" className="text-xs">
                  {session.sessionNumber}
                </Text>
                <Title level={5} className="mb-0">
                  {session.exercise}
                </Title>
                <Space size="small" className="text-xs text-gray-600">
                  <Text>{session.duration}</Text>
                  <Text>{session.remainingDays}</Text>
                </Space>
                </div>
                <div>

              <Button
                icon={<EditOutlined />}
                size="small"
                className="flex justify-end"
                danger
                type="default"
              >
                Edit
              </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Right Panel: Session Details */}
      <div className="w-80 bg-white rounded-md shadow p-4 flex flex-col">
        <img
          src={selectedSession.imgSrc}
          alt={selectedSession.exercise}
          className="w-full h-40 object-cover rounded mb-4"
        />
        <Title level={5} className="mb-0">
          Details {selectedSession.sessionNumber}
        </Title>
        <Text type="secondary" className="text-xs mb-2">
          {selectedSession.sessionNumber}
        </Text>

        <Title level={4} className="mb-1">
          {selectedSession.exercise}
        </Title>

        <Text strong>Duration</Text>
        <Text className="mb-2">{selectedSession.duration}</Text>

        <Text strong>Benefits</Text>
        <ul className="list-disc list-inside text-xs text-gray-700 mb-4">
          <li>
            <CheckOutlined className="text-green-500 mr-1" /> Strengthens the
            Chest
          </li>
          <li>
            <CheckOutlined className="text-green-500 mr-1" /> Improves Upper Body
            Strength
          </li>
          <li>
            <CheckOutlined className="text-green-500 mr-1" /> Increases Muscle
            Endurance
          </li>
          <li>
            <CheckOutlined className="text-green-500 mr-1" /> Enhances Posture
          </li>
          <li>
            <CheckOutlined className="text-green-500 mr-1" /> Boosts Metabolism
          </li>
        </ul>

        <Button
          icon={<EditOutlined />}
          size="small"
          danger
          type="default"
          className="mt-auto"
        >
          Edit
        </Button>
      </div>
    </div>
    </div>
  );
}
