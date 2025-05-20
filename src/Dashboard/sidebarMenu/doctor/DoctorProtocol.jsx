'use client'

import React from 'react';
import { Table, Button, Avatar, Typography } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

export default function DoctorProtocol() {
    const router = useRouter()
  // Sample data for the table
  const protocolData = [
    {
      key: '1',
      id: '01',
      memberName: 'Mahmud',
      avatar: '/images/user4.jpg',
      lastConsultationDate: '5 Jan, 2025',
      protocol: 10,
      action: 'View'
    },
    {
      key: '2',
      id: '02',
      memberName: 'Mahmud',
      avatar: '/images/user4.jpg',
      lastConsultationDate: '5 Jan, 2025',
      protocol: 2,
      action: 'View'
    },
    {
      key: '3',
      id: '03',
      memberName: 'Mahmud',
      avatar: '/images/user4.jpg',
      lastConsultationDate: '5 Jan, 2025',
      protocol: 1,
      action: 'View'
    },
    {
      key: '4',
      id: '04',
      memberName: 'Mahmud',
      avatar: '/images/user4.jpg',
      lastConsultationDate: '5 Jan, 2025',
      protocol: 0,
      action: 'View'
    },
  ];

  // Table columns definition
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
    },
    {
      title: 'Member Name',
      dataIndex: 'memberName',
      key: 'memberName',
      width: '25%',
      render: (text, record) => (
        <div className="flex items-center">
          <Avatar src={record.avatar} size={36} className="mr-3" />
          <Text>{text}</Text>
        </div>
      ),
    },
    {
      title: 'Last Consultation Date',
      dataIndex: 'lastConsultationDate',
      key: 'lastConsultationDate',
      width: '25%',
    },
    {
      title: 'Protocol',
      dataIndex: 'protocol',
      key: 'protocol',
      width: '20%',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: '20%',
      render: (text) => (
       
        
        <Button type="link"
        onClick={() => router.push('/doctorDs/doctor-protocol/view')}
         className="text-blue-500 p-0">
          {text}
        </Button>
       
      ),
    },
  ];

  return (
    <div className="  mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <Title level={4} className="m-0">Protocol</Title>
        <div className="flex items-center">
          <Text className="mr-4 font-medium">Total Schedule : 10</Text>
          <Button 
            type="primary" 
            icon={<PlusCircleOutlined />} 
            className="bg-red-600 hover:bg-red-700 border-red-600"
          >
            Create New
          </Button>
        </div>
      </div>

      <Table 
        columns={columns} 
        dataSource={protocolData} 
        pagination={false}
        className="border border-gray-200 rounded-lg"
        rowClassName="hover:bg-gray-50"
      />
    </div>
  );
}