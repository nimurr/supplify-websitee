'use client';

import React, { Suspense, useState } from 'react';
import { Card, Button, Avatar, Input, Modal, Select } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import BackHeader from '@/components/customComponent/BackHeader';
import { FiPlusCircle } from 'react-icons/fi';
import {
  useAssignProtocolToPatientMutation,
  useAssignSpecialistPatientMutation,
  useGetAllProtocalsByPatientIdQuery,
  useGetAllSpacialistQuery,
} from '@/redux/fetures/doctor/doctor';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import url from '@/redux/api/baseUrl';

const { TextArea } = Input;

// 🧩 Separate component to use inside Suspense
function DoctorProtocolPageContent() {
  const searchParams = useSearchParams();
  const patientId = searchParams.get('patientId'); // ✅ Safe client-side access

  const { data: patientData } = useGetAllProtocalsByPatientIdQuery(patientId, {
    skip: !patientId,
  });
  const fullPatientData = patientData?.data?.attributes || {};

  const [isModalVisible, setIsModalVisible] = useState(false);
  const { data: specialistData } = useGetAllSpacialistQuery(patientId, {
    skip: !patientId,
  });
  const fullSpecialistData = specialistData?.data?.attributes || [];

  const [assignSpecialist] = useAssignSpecialistPatientMutation();
  const [assignProtocol] = useAssignProtocolToPatientMutation();
  const [specialist, setSpecialist] = useState();

  // ✅ Assign specialist
  const handleAssignSpecialist = async () => {
    if (!patientId || !specialist) return toast.error('Select a specialist first');

    const data = { patientId, specialistId: specialist };
    try {
      const res = await assignSpecialist(data);
      if (res?.data?.code === 200) {
        toast.success(res?.data?.message);
        setIsModalVisible(false);
      } else {
        toast.error(res?.data?.message || 'Failed to assign specialist');
      }
    } catch (error) {
      console.error('Error assigning specialist:', error);
      toast.error('Failed to assign specialist');
    }
  };

  // ✅ Create new protocol
  const handleCreateNewProtocol = async () => {
    if (!patientId) return toast.error('Missing patient ID');

    try {
      const res = await assignProtocol({ patientId });
      if (res?.data?.code === 200) {
        toast.success(res?.data?.message);
        const protocolId = res?.data?.data?.attributes?._protocolId;
        window.location.href = `/doctorDs/doctor-protocol/create-plane?protocolId=${protocolId}&patientId=${patientId}`;
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      console.error('Error creating protocol:', error);
      toast.error('Failed to create new protocol');
    }
  };

  return (
    <div>
      <Toaster />
      <BackHeader title="Back" />

      <div className="flex lg:flex-row flex-col gap-6 p-6 bg-gray-50 min-h-screen">
        {/* 🧍 Left Sidebar */}
        <div className="bg-white rounded-lg shadow-md p-6 md:w-72 w-full flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Avatar
              size={60}
              src={
                url +
                (fullPatientData?.extraNote?.patientId?.profileImage?.imageUrl || '')
              }
              alt="Patient"
            />
            <span className="font-semibold capitalize text-sm">
              {fullPatientData?.extraNote?.patientId?.name || 'No name found'}
            </span>
          </div>
          <div className="mb-1 text-sm font-semibold">Extra Note</div>
          <p className="text-xs text-gray-500 mb-4">
            {fullPatientData?.extraNote?.extraNote || 'No note found'}
          </p>
          <TextArea
            rows={6}
            placeholder="Type your note ..."
            className="resize-none rounded-md border border-gray-300"
          />
          <button className="bg-red-600 text-white py-2 px-6 rounded-lg mt-3">
            Save
          </button>
        </div>

        {/* 📋 Right Content */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2>All Protocols</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setIsModalVisible(true)}
                className="bg-red-600 text-white py-2 px-6 rounded-lg"
              >
                Assign a Specialist
              </button>
              <button
                onClick={handleCreateNewProtocol}
                className="bg-red-600 text-white py-2 px-6 rounded-lg flex items-center gap-2"
              >
                <FiPlusCircle /> Create New
              </button>
            </div>
          </div>

          {/* Protocol Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {fullPatientData?.results?.map(({ id, name, _protocolId }) => (
              <Card
                key={id}
                hoverable
                bodyStyle={{ padding: '12px 16px' }}
                className="rounded-lg shadow"
              >
                <Card.Meta
                  title={
                    <div className="truncate font-semibold text-sm capitalize">
                      {name}
                    </div>
                  }
                  description={<div className="text-xs text-gray-600"></div>}
                />
                <Link
                  href={`/doctorDs/doctor-protocol/create-plane?protocolId=${_protocolId}&patientId=${patientId}`}
                  className="bg-red-600 w-full text-white py-2 px-6 rounded-lg mt-5 text-center flex items-center justify-center"
                >
                  <EditOutlined /> Edit
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* 🧠 Assign Specialist Modal */}
      <Modal
        title="Assign a Specialist"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={400}
      >
        <div>
          <div className="mb-4">
            <Select
              value={specialist}
              onChange={(value) => setSpecialist(value)}
              style={{ width: '100%' }}
              placeholder="Select Specialist"
            >
              {fullSpecialistData?.map((s) => (
                <Select.Option key={s?.profile?._id} value={s?.profile?._id}>
                  {s?.name}
                </Select.Option>
              ))}
            </Select>
          </div>
          <Button
            type="primary"
            block
            className="bg-red-600 text-white"
            onClick={handleAssignSpecialist}
          >
            Assign Specialist
          </Button>
        </div>
      </Modal>
    </div>
  );
}

// ✅ Wrap with Suspense for useSearchParams()
export default function DoctorProtocolPage() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
      <DoctorProtocolPageContent />
    </Suspense>
  );
}
