"use client"

import React from 'react';
import { Card, Button, Table, Typography, Avatar } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import CustomButton from '@/components/customComponent/CustomButton';

const { Title, Text } = Typography;

export default function ProtocolsAndMealPlans() {
    const router = useRouter()
  // Protocol table data
  const protocolData = [
    {
      key: '1',
      slNo: 1,
      planName: 'Meal plan',
      keyPoint: 2,
    },
    {
      key: '2',
      slNo: 2,
      planName: 'Workout',
      keyPoint: 2,
    },
    {
      key: '3',
      slNo: 3,
      planName: 'Supplement',
      keyPoint: 2,
    },
    {
      key: '4',
      slNo: 4,
      planName: 'Life style changes',
      keyPoint: 2,
    }
  ];

  // Meal plans data
  const mealPlans = [
    { id: 1, name: 'Meal Plan 1', keyPoints: 5 },
    { id: 2, name: 'Meal Plan 2', keyPoints: 5 },
    { id: 3, name: 'Meal Plan 3', keyPoints: 5 },
    { id: 4, name: 'Meal Plan 4', keyPoints: 5 },
    { id: 5, name: 'Meal Plan 5', keyPoints: 5 },
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
    },
    {
      title: 'Key Point',
      dataIndex: 'keyPoint',
      key: 'keyPoint',
      width: '30%',
    },
  ];

  return (
    <div className=" mx-auto p-4">
          <div className="my-4 w-full flex justify-end">
            <div> 
  <CustomButton onClick={() => router.push('/doctorDs/create-plan/added-mealPlan')} className='' text="Create Plan" />
            </div>
</div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Protocols Table */}
        <div className="lg:col-span-1">
          <Card 
            title={<Title level={5} className="m-0">Protocols</Title>}
            className="shadow-sm"
            bodyStyle={{ padding: 0 }}
          >
            <Table 
              columns={columns} 
              dataSource={protocolData} 
              pagination={false}
              size="small"
              rowClassName={(record) => "bg-pink-50"}
            />
          </Card>
        </div>

        {/* Meal Plans Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mealPlans.map((plan) => (
              <Card 
                key={plan.id}
                className="shadow-sm"
                bodyStyle={{ padding: '1rem' }}
              >
                <div className="mb-1">
                  <Text strong>{plan.name}</Text>
                </div>
                <div className="mb-3">
                  <Text className="text-gray-500">key points : {plan.keyPoints}</Text>
                </div>
                <Button 
                onClick={() => router.push('/doctorDs/create-plan/edit-mealPlan')}
                  type="primary" 
                  icon={<EditOutlined />} 
                  className="w-full bg-red-600 hover:bg-red-700 border-red-600"
                >
                  Edit
                </Button>

                {/* {plan.id === 3 && (
                  <div className="absolute bottom-2 right-2">
                    <Avatar src="/images/sprogram.png" size={32} />
                  </div>
                )} */}
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Create Plan Button */}
  
    </div>
  );
}