"use client"

import React from 'react';
import { Card, Typography, Badge, Tooltip } from 'antd';
import { CalendarOutlined, ClockCircleOutlined, LinkOutlined, CopyOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export default function UpcomingSchedule() {
  const schedules = [
    {
      id: 1,
      title: 'Schedule 1',
      price: '180$',
      status: '10 Minute left',
      bookedBy: 'Mahmud',
      date: '12-Jan-2025, Saturday',
      startTime: '10 : 00 pm',
      endTime: '11 : 00 pm',
      description: 'This description is very important for a user, they can Acknowledge the full program on this schedule. This description is very important for',
      meetingType: 'Zoom meeting',
      link: 'https://www.youtube.com/watch?...'
    },
    {
      id: 2,
      title: 'Schedule 2',
      price: '180$',
      status: 'After 1 Day',
      bookedBy: 'Mahmud',
      date: '12-Jan-2025, Saturday',
      startTime: '10 : 00 pm',
      endTime: '11 : 00 pm',
      description: 'This description is very important for a user, they can Acknowledge the full program on this schedule. This description is very important for',
      meetingType: 'Zoom meeting',
      link: 'https://www.youtube.com/watch?...'
    },
    {
      id: 3,
      title: 'Schedule 3',
      price: '180$',
      status: 'After 2 Days',
      bookedBy: 'Mahmud',
      date: '12-Jan-2025, Saturday',
      startTime: '10 : 00 pm',
      endTime: '11 : 00 pm',
      description: 'This description is very important for a user, they can Acknowledge the full program on this schedule. This description is very important for',
      meetingType: 'Zoom meeting',
      link: 'https://www.youtube.com/watch?...'
    }
  ];

  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link);
    // You could add a notification here
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <Title level={4} className="m-0">Upcoming Schedule</Title>
        <Text className="font-medium">Total Upcoming Schedule : {schedules.length}</Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {schedules.map((schedule) => (
          <Card 
            key={schedule.id}
            className="border border-red-100 rounded-lg bg-red-50"
            bodyStyle={{ padding: '1rem' }}
          >
            <div className="flex justify-between items-start mb-1">
              <Title level={5} className="m-0">{schedule.title}</Title>
              <Badge 
                count={schedule.price} 
                className="font-medium"
                style={{ 
                  backgroundColor: 'transparent', 
                  color: '#ef4444', 
                  boxShadow: 'none',
                  fontSize: '16px'
                }} 
              />
            </div>
            
            <div className="mb-2">
              <Text className="text-red-500 font-medium">{schedule.status}</Text>
            </div>
            
            <div className="mb-4">
              <Text className="block">Booked by {schedule.bookedBy}</Text>
            </div>
            
            <div className="flex items-center mb-2">
              <CalendarOutlined className="text-gray-500 mr-2" />
              <Text className="text-gray-500">Date</Text>
            </div>
            <div className="ml-6 mb-3">
              <Text>{schedule.date}</Text>
            </div>
            
            <div className="flex mb-2">
              <div className="flex items-center mr-6">
                <ClockCircleOutlined className="text-gray-500 mr-2" />
                <Text className="text-gray-500">Start Time</Text>
              </div>
              <div className="flex items-center">
                <ClockCircleOutlined className="text-gray-500 mr-2" />
                <Text className="text-gray-500">End Time</Text>
              </div>
            </div>
            
            <div className="flex mb-4">
              <Text className="mr-10 ml-6">{schedule.startTime}</Text>
              <Text className="ml-6">{schedule.endTime}</Text>
            </div>
            
            <div className="mb-4">
              <Text className="text-gray-700 text-sm">{schedule.description}</Text>
            </div>
            
            <div className="mb-2">
              <Text className="text-gray-500 text-sm">Type of link : {schedule.meetingType}</Text>
            </div>
            
            <div className="flex items-center">
              <Text className="text-blue-500 text-sm mr-1">link : </Text>
              <Text className="text-blue-500 text-sm truncate flex-1">
                {schedule.link}
              </Text>
              <Tooltip title="Copy link">
                <CopyOutlined 
                  className="text-gray-500 cursor-pointer ml-2" 
                  onClick={() => handleCopyLink(schedule.link)}
                />
              </Tooltip>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}