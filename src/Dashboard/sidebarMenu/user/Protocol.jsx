'use client';
import React, { useState, useEffect } from 'react';
import { Card, Button, Table, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { FiPlus } from 'react-icons/fi';
import { useGetAllProtocalQuery } from '@/redux/fetures/patient/protocal';

const { Title, Text } = Typography;

export default function ProtocolPage() {
  const router = useRouter();

  // State to hold the current planType (this can come from URL params, for example)
  const [planType, setPlanType] = useState('mealPlan'); // Default to mealPlan or use dynamic value
  const [filteredPlanes, setFilteredPlanes] = useState([]); // State to hold filtered planes based on planType

  const { data } = useGetAllProtocalQuery();
  const fullPlane = data?.data?.attributes?.results || [];
  console.log(fullPlane);



  // Static demo data for planes
  const protocolData = [
    { key: '1', slNo: 1, type: 'mealPlan', planName: 'Meal plan', keyPoint: 2 },
    { key: '2', slNo: 2, type: 'workOut', planName: 'Workout', keyPoint: 2 },
    { key: '3', slNo: 3, type: 'suppliment', planName: 'Supplement', keyPoint: 2 },
    { key: '4', slNo: 4, type: 'lifeStyleChanges', planName: 'Lifestyle changes', keyPoint: 2 }
  ];

  // Static demo data for all planes
  const allPlane = [
    {
      id: '1',
      title: 'Meal Plan 1',
      totalKeyPoints: 5,
      _DoctorPlanId: '12345',
      type: 'mealPlan'
    },
    {
      id: '2',
      title: 'Workout Plan 1',
      totalKeyPoints: 3,
      _DoctorPlanId: '67890',
      type: 'workOut'
    },
    {
      id: '3',
      title: 'Supplement Plan 1',
      totalKeyPoints: 4,
      _DoctorPlanId: '11223',
      type: 'suppliment'
    }
  ];

  // Protocol table columns
  const columns = [
    {
      title: 'Sl No',
      dataIndex: 'slNo',
      key: 'slNo',
      width: '20%',
    },
    {
      title: 'Plan Name',
      dataIndex: 'planName',
      key: 'planName',
      width: '50%',
    }
  ];

  // Handle row click to change planType and filter the planes based on the selected type
  const handleRowClick = (record) => {
    const selectedPlanType = record.type; // Dynamically set the planType (e.g., 'mealPlan', 'lifeStyleChanges')
    setPlanType(selectedPlanType);
    // Filter the planes based on the selected type
    const filteredData = allPlane.filter(plan => plan.type === selectedPlanType);
    setFilteredPlanes(filteredData);
    console.log(selectedPlanType);
  };

  // Initialize filteredPlanes with 'mealPlan' data by default when the component mounts
  useEffect(() => {
    const defaultFilteredData = allPlane.filter(plan => plan.type === 'mealPlan');
    setFilteredPlanes(defaultFilteredData);
  }, []);

  return (
    <div className="mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Protocols Table */}
        <div className="lg:col-span-1">
          <Card title={<Title level={5} className="m-0">Protocols</Title>} className="shadow-sm" bodyStyle={{ padding: 0 }}>
            <Table
              columns={columns}
              dataSource={protocolData}
              pagination={false}
              size="small"
              rowClassName={() => "bg-pink-50 py-2 cursor-pointer"}
              onRow={(record) => ({
                onClick: () => handleRowClick(record), // Add the row click handler
              })}
            />
          </Card>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-start">
          {
            filteredPlanes.length > 0 ? (
              filteredPlanes.map((plan) => (
                <Card key={plan.id} className="shadow-sm" bodyStyle={{ padding: '1rem' }}>
                  <div className="mb-1">
                    <Text className="capitalize" strong>{plan.title}</Text>
                  </div>
                  <div className="mb-3">
                    <Text className="text-gray-500 capitalize">Key Points: {plan.totalKeyPoints}</Text>
                  </div>
                  <Button
                    onClick={() => router.push(`/dashboard/protocol/details?id=${plan._DoctorPlanId}`)}
                    type="primary"
                    className="w-full bg-red-600 hover:bg-red-700 border-red-600"
                  >
                    View Plan
                  </Button>
                </Card>
              ))
            ) : (
              <div className="flex justify-center w-full">
                <p className="text-2xl font-semibold text-red-600 capitalize">No Plan Found!</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
