'use client';

import React, { Suspense, useEffect, useState } from 'react';
import {
  Button,
  InputNumber,
  Tag,
  Typography,
  Divider,
  Space,
  Card,
} from 'antd';
import {
  EditOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import { GoPlus } from 'react-icons/go';
import BackHeader from '@/components/customComponent/BackHeader';
import { useRouter, useSearchParams } from 'next/navigation';
import { useGetAllProgramBySpecialistIdQuery } from '@/redux/fetures/Specialist/traningProgram';
import url from '@/redux/api/baseUrl';
import Link from 'next/link';

const { Title, Text, Paragraph } = Typography;

// ✅ Actual page content (inside Suspense boundary)
function ProgramViewContent() {
  const router = useRouter();
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);

  const searchParams = useSearchParams();
  const programId = searchParams.get('programId');
  const specialistId = searchParams.get('specialistId');

  const { data, isLoading } = useGetAllProgramBySpecialistIdQuery(
    { programId, specialistId },
    { skip: !programId || !specialistId }
  );

  const programs = data?.data?.attributes || {};

  useEffect(() => {
    if (programs?.result?.results?.length > 0) {
      setSessions(programs.result.results);
      setSelectedSession(programs.result.results[0]);
    }
  }, [programs]);

  if (isLoading) {
    return <div className="text-center text-blue-500">Loading programs...</div>;
  }

  return (
    <div>
      <BackHeader title="Session" />
      <div className="min-h-screen flex items-start xl:flex-row flex-col gap-5 p-6 bg-gray-50">
        {/* Left Panel */}
        <div className="w-64 bg-white rounded-md shadow p-4 flex flex-col items-center gap-4">
          <img
            src={url + programs?.specialistInfo?.profileImage?.imageUrl}
            alt="Trainer"
            className="rounded-lg object-cover"
          />
          <div className="text-center">
            <Title level={5} className="mb-0">
              {programs?.specialistInfo?.name}
            </Title>
            <Text type="secondary" className="text-xs">
              New York, America
            </Text>
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {programs?.specialistInfo?.profileId?.protocolNames?.map((name, i) => (
              <Tag key={i} color="default" className="text-xs">
                {name}
              </Tag>
            ))}
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
              <InputNumber
                min={0}
                max={100}
                defaultValue={
                  programs?.specialistInfo?.profileId?.howManyPrograms
                }
                size="small"
              />
            </div>
          </div>

          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition gap-2 w-full text-center flex items-center justify-center"
            type="primary"
            block
          >
            Save
          </button>
        </div>

        {/* Middle Panel */}
        <div className="flex-1 bg-white rounded-md shadow p-6 flex flex-col">
          <div className="md:flex justify-between items-center mb-6">
            <div>
              <Title level={5} className="mb-0">
                Gain Chest
              </Title>
            </div>
            <div>
              <Text className="text-xs">
                Total Session: {programs?.trainingProgramInfo?.totalSessionCount} &nbsp;&nbsp; Total Purchases: 100
              </Text>
            </div>
            <div>
              <Link
                href={`/specialistDs/program/create-session?programId=${programId}`}
                className="text-xs ml-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition flex items-center gap-2"
              >
                <GoPlus className="text-2xl" /> Create Session
              </Link>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4">
            {sessions?.map((session, idx) => (
              <Card
                key={idx}
                hoverable
                className="gap-4 w-full"
                onClick={() => setSelectedSession(session)}
              >
                <div className="flex justify-between w-full gap-4">
                  <img
                    src={session.coverPhotos?.[0]?.attachment}
                    alt={session.exercise}
                    className="w-20 h-16 object-cover rounded"
                  />
                  <div className="flex w-full justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">
                        Session: {session.sessionCount}
                      </p>
                      <p className="my-2 text-xl font-semibold">
                        {session.title}
                      </p>
                      <Space size="small" className="text-xs text-gray-600">
                        <Text>
                          <span className="font-semibold">Duration:</span>{' '}
                          {session.duration}
                        </Text>
                        <Text>{session.durationUnit}</Text>
                      </Space>
                    </div>
                    <div>
                      <Button
                        icon={<EditOutlined />}
                        onClick={() =>
                          router.push(
                            `/specialistDs/program/edit-session?sessionId=${session._TrainingSessionId}&programId=${programId}`
                          )
                        }
                        size="small"
                        className="flex justify-end"
                        danger
                        type="default"
                      >
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-80 bg-white rounded-md shadow p-4 flex flex-col">
          {selectedSession && (
            <>
              <img
                src={selectedSession?.coverPhotos?.[0]?.attachment}
                alt={selectedSession.tokenCount}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <div>
                <Text type="secondary" className="text-[18px]">
                  Session: {selectedSession.sessionCount}
                </Text>
                <Title level={5} className="mb-0 text-[22px]">
                  {selectedSession.title}
                </Title>
                <Space size="small" className="text-xs text-gray-600">
                  <Text>
                    <span className="font-semibold">Duration:</span>{' '}
                    {selectedSession.duration}
                  </Text>
                  <Text>{selectedSession.durationUnit}</Text>
                </Space>
              </div>

              <Text className="mt-2" strong>
                Benefits
              </Text>
              <ul className="list-disc space-y-2 mt-2 list-inside text-xs text-gray-700 mb-4">
                {selectedSession.benefits?.map((b, i) => (
                  <li className="flex items-center" key={i}>
                    <CheckOutlined className="text-green-500 mr-1" /> {b}
                  </li>
                ))}
              </ul>

              <Button
                icon={<EditOutlined />}
                size="small"
                danger
                type="default"
                className="mt-auto h-14"
              >
                Edit
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ✅ Wrap content in Suspense for client-only hook safety
export default function ProgramView() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
      <ProgramViewContent />
    </Suspense>
  );
}