'use client';

import { useState } from 'react';
import { Form, Input, Button, Typography, Tooltip } from 'antd';
import { DeleteOutlined, PlusOutlined, InfoCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title } = Typography;
const { TextArea } = Input;

export default function CreateMealPlan() {
  const [form] = Form.useForm();
  const [keyPoints, setKeyPoints] = useState(['']);

  const addKeyPoint = () => {
    setKeyPoints([...keyPoints, '']);
  };

  const removeKeyPoint = (index) => {
    const updatedPoints = [...keyPoints];
    updatedPoints.splice(index, 1);
    setKeyPoints(updatedPoints);
  };

  const handleKeyPointChange = (value, index) => {
    const updatedPoints = [...keyPoints];
    updatedPoints[index] = value;
    setKeyPoints(updatedPoints);
  };

  const onFinish = (values) => {
    // Filter out empty key points
    const filteredKeyPoints = keyPoints.filter(point => point.trim() !== '');
    
    const mealPlanData = {
      ...values,
      keyPoints: filteredKeyPoints
    };
    
    console.log('Submitted meal plan:', mealPlanData);
    // Here you would typically send this data to your backend
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
         <Link href="/doctorDs/create-plan" className="mr-4">
          <Button icon={<ArrowLeftOutlined />} className="flex items-center">
            Back
          </Button>
        </Link>
      <Title level={2} className="mb-6 text-center">Meal Plan</Title>
      <div className="border-t border-gray-200 mb-6"></div>
      
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark="optional"
      >
        <Form.Item
          label="Plan name"
          name="planName"
          rules={[{ required: true, message: 'Please enter the plan name' }]}
          className="mb-6"
        >
          <Input placeholder="Meal plan" className="rounded py-2" />
        </Form.Item>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Key Points
            <span className="text-red-500 ml-1">*</span>
          </label>
          
          {keyPoints.map((point, index) => (
            <div key={index} className="flex items-center mb-3">
              <Input
                value={point}
                onChange={(e) => handleKeyPointChange(e.target.value, index)}
                placeholder="Enter key point"
                className="rounded py-2 flex-grow"
              />
              <Button
                type="text"
                icon={<DeleteOutlined />}
                onClick={() => removeKeyPoint(index)}
                className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                disabled={keyPoints.length === 1}
              />
            </div>
          ))}
          
          <Button
            type="dashed"
            onClick={addKeyPoint}
            className="w-full mt-2 rounded flex items-center justify-center"
            icon={<PlusOutlined />}
          >
            Add new
          </Button>
        </div>

        <Form.Item
          label={
            <span>
              Description
              <Tooltip title="Provide details about this meal plan">
                <InfoCircleOutlined className="ml-1" />
              </Tooltip>
            </span>
          }
          name="description"
          rules={[{ required: true, message: 'Please enter a description' }]}
          className="mb-6"
        >
          <TextArea
            placeholder="Enter description about the key point"
            rows={4}
            className="rounded"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-red-600 hover:bg-red-700 border-red-600 w-full py-5 h-auto rounded"
          >
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}