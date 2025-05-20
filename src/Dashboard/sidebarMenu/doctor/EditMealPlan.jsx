'use client';

import { useState, useEffect } from 'react';
import { Form, Input, Button, Typography, Tooltip, Spin, message } from 'antd';
import { DeleteOutlined, PlusOutlined, InfoCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title } = Typography;
const { TextArea } = Input;

export default function EditMealPlan({ params }) {
  const [form] = Form.useForm();
  const [keyPoints, setKeyPoints] = useState(['']);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Mock function to fetch meal plan data - replace with actual API call
  const fetchMealPlanData = async (id) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: id || '1',
          planName: 'High Protein Diet Plan',
          keyPoints: [
            'Protein-rich meals throughout the day',
            'Limited carbohydrate intake',
            'Healthy fats in moderation'
          ],
          description: 'A balanced meal plan focused on high protein intake to support muscle growth and recovery. Ideal for active individuals and those engaged in regular strength training.'
        });
      }, 800);
    });
  };

  useEffect(() => {
    const loadMealPlan = async () => {
      try {
        // In a real app, you would get the ID from the route params
        const mealPlanId = params?.id;
        const data = await fetchMealPlanData(mealPlanId);
        
        // Set form values
        form.setFieldsValue({
          planName: data.planName,
          description: data.description
        });
        
        // Set key points
        setKeyPoints(data.keyPoints.length > 0 ? data.keyPoints : ['']);
        
        setLoading(false);
      } catch (error) {
        console.error('Failed to load meal plan:', error);
        message.error('Failed to load meal plan details');
        setLoading(false);
      }
    };

    loadMealPlan();
  }, [form, params]);

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

  const onFinish = async (values) => {
    try {
      setSubmitting(true);
      // Filter out empty key points
      const filteredKeyPoints = keyPoints.filter(point => point.trim() !== '');
      
      const mealPlanData = {
        id: params?.id || '1', // In a real app, this would come from the route
        ...values,
        keyPoints: filteredKeyPoints
      };
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Updated meal plan:', mealPlanData);
      message.success('Meal plan updated successfully');
      setSubmitting(false);
      // In a real app, you might redirect here
    } catch (error) {
      console.error('Failed to update meal plan:', error);
      message.error('Failed to update meal plan');
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" tip="Loading meal plan..." />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6 flex items-center">
        <Link href="/doctorDs/create-plan" className="mr-4">
          <Button icon={<ArrowLeftOutlined />} className="flex items-center">
            Back
          </Button>
        </Link>
        <Title level={2} className="m-0">Edit Meal Plan</Title>
      </div>
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

        <div className="flex justify-between">
          <Button
            danger
            className="px-6 rounded"
          >
            Delete
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={submitting}
            className="bg-red-600 hover:bg-red-700 border-red-600 px-8 py-5 h-auto rounded"
          >
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
}