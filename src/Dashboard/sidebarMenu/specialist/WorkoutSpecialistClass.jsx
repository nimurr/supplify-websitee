'use client'
import React from 'react';
import { Button, Card, Typography, Space } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { LuMonitorPlay } from 'react-icons/lu';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { useGetAllWorkoutClassQuery } from '@/redux/fetures/Specialist/workoutClass';

const { p, Text, Paragraph } = Typography;

const WorkoutSpecialistClass = () => {

  const { data } = useGetAllWorkoutClassQuery();
  console.log(data);



  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex lg:flex-row flex-col items-start gap-6">
        {/* Left Panel: Trainer Info */}
        <div className="w-64 bg-white rounded-md shadow p-4">
          <img
            src="trainer_image_url_here" // Update with actual trainer image URL
            alt="Trainer"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <div className="text-center mb-4">
            <p level={5}>Sakib Ahmed</p>
            <p type="secondary" className="text-xs">New Yorke, America</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {/* Replaced Ant Design Tag with raw <tag> */}
            <tag className="text-xs bg-gray-200 px-2 py-1 rounded-md">Trainer</tag>
            <tag className="text-xs bg-gray-200 px-2 py-1 rounded-md">Body trainer</tag>
          </div>
          <p className="text-xs text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur. Massa risus eget justo vel urna sapien posuere.
          </p>
        </div>

        {/* Right Panel: Available Workouts */}
        <div className="flex-1 bg-white rounded-md shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-2xl font-semibold">Available Workout Schedule</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-red-600 transition-colors"
            >
              <PlusCircleOutlined />
              Create New
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* Workout Session Card */}
            <div className="space-y-5 border border-gray-200 rounded-md p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Icon Placeholder */}
              <div className="mb-4">
                <LuMonitorPlay className="text-6xl text-gray-800" />
              </div>

              {/* Workout Title */}
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold text-center">Push-up Workout</p>
                <p className="text-lg text-gray-900 font-semibold">
                  $180 <span className="line-through text-gray-500">$200</span>
                </p>
              </div>

              {/* Session and Duration Info */}
              <div className="flex justify-between mb-4">
                <p className="text-sm text-gray-600">Total Session: <strong>4</strong></p>
                <p className="text-sm text-gray-600">Total Duration: <strong>4h</strong></p>
              </div>

              {/* Start Date and Platform */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                <p><strong>Start Date:</strong> 12-Jan-2025, Saturday</p>
                <p><strong>Platform:</strong> Zoom</p>
              </div>

              {/* Start and End Time */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                <p><strong>Start Time:</strong> 10:00 PM</p>
                <p><strong>End Time:</strong> 11:00 PM</p>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-500 mb-4">
                This description is very important for a user, they can acknowledge the full program on this schedule.
                This description is very important for the user to understand the details.
              </p>

              {/* Booking Info */}
              <div className="flex justify-between items-center mb-4">
                <p className=" text-red-600 text-xl font-semibold underline">1 booked</p>
                <tag className="text-xs bg-red-200 px-2 py-1 rounded-md">Private</tag>
              </div>

              <p className="text-xl flex items-center cursor-pointer gap-2 text-purple-400  mb-4">
                <IoDocumentTextOutline /> rtiyoit57ortiyoit57ortiyoit57o
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkoutSpecialistClass;
