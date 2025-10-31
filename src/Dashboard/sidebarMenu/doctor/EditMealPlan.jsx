'use client';

import { Suspense, useState, useEffect } from 'react';
import { Form, Input, Button, Typography, Select } from 'antd';
import { DeleteOutlined, PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useGetSinglePlaneQuery, useUpdatePlaneMutation } from '@/redux/fetures/doctor/createPlane';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter, useSearchParams } from 'next/navigation';

const { Title } = Typography;
const { TextArea } = Input;

// ✅ Wrap main logic in a separate component for Suspense
function EditMealPlanContent() {
  const router = useRouter();
  const searchParams = useSearchParams(); // CSR only hook (safe inside Suspense)
  const id = searchParams.get('id');

  // Avoid query until ID is available
  const { data } = useGetSinglePlaneQuery(id, { skip: !id });
  const mainData = data?.data?.attributes?.results?.[0] || {};

  const [formData, setFormData] = useState({
    planType: '',
    title: '',
    description: '',
    keyPoints: [],
  });

  useEffect(() => {
    if (mainData) {
      setFormData({
        planType: mainData.planType || '',
        title: mainData.title || '',
        description: mainData.description || '',
        keyPoints: mainData.keyPoints || [],
      });
    }
  }, [mainData]);

  const addKeyPoint = () => {
    setFormData((prev) => ({
      ...prev,
      keyPoints: [...prev.keyPoints, ''],
    }));
  };

  const removeKeyPoint = (index) => {
    setFormData((prev) => ({
      ...prev,
      keyPoints: prev.keyPoints.filter((_, i) => i !== index),
    }));
  };

  const handleKeyPointChange = (value, index) => {
    const updatedKeyPoints = [...formData.keyPoints];
    updatedKeyPoints[index] = value;
    setFormData((prev) => ({ ...prev, keyPoints: updatedKeyPoints }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, planType: value }));
  };

  const [updatePlane, { isLoading }] = useUpdatePlaneMutation();

  const onFinish = async () => {
    const submissionData = {
      planType: formData.planType,
      title: formData.title,
      description: formData.description,
      keyPoints: formData.keyPoints,
    };

    try {
      const res = await updatePlane({ submissionData, id });
      if (res?.data?.code === 200) {
        toast.success(res?.data?.message);
        router.push('/doctorDs/create-plan');
        setFormData({ planType: '', title: '', description: '', keyPoints: [] });
      } else {
        toast.error(res?.data?.message || 'Update failed');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to update meal plan');
    }
  };

  const isFormValid =
    formData.title &&
    formData.planType &&
    formData.description &&
    formData.keyPoints.every((p) => p.trim() !== '');

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <Toaster />
      <Link href="/doctorDs/create-plan">
        <Button icon={<ArrowLeftOutlined />}>Back</Button>
      </Link>

      <Title level={2} className="mb-6 text-center">
        Edit Meal Plan
      </Title>
      <div className="border-t border-gray-200 mb-6"></div>

      <Form layout="vertical" onFinish={onFinish} requiredMark="optional">
        {/* Title */}
        <Form.Item name="title" className="mb-6">
          <label className="block text-sm font-medium mb-2">Title</label>
          <Input
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="LifeStyle Changes One By Doctor"
            className="rounded py-2"
          />
        </Form.Item>

        {/* Plan Type */}
        <Form.Item name="planType" className="mb-6">
          <label className="block text-sm font-medium mb-2">Plan Type</label>
          <Select
            value={formData.planType}
            onChange={handleSelectChange}
            className="rounded py-2 h-14"
          >
            <Select.Option value="mealPlan">Meal Plan</Select.Option>
            <Select.Option value="workOut">Workout</Select.Option>
            <Select.Option value="supplement">Supplement</Select.Option>
            <Select.Option value="lifeStyleChanges">Lifestyle Changes</Select.Option>
          </Select>
        </Form.Item>

        {/* Key Points */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Key Points</label>
          {formData.keyPoints.map((point, index) => (
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
                className="ml-2 text-red-500 hover:text-red-700"
                disabled={formData.keyPoints.length === 1}
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

        {/* Description */}
        <Form.Item name="description" className="mb-6">
          <label className="block text-sm font-medium mb-2">Description</label>
          <TextArea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter description about the key point"
            rows={4}
            className="rounded"
          />
        </Form.Item>

        {/* Submit */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-red-600 hover:bg-red-700 w-full py-2 font-semibold rounded"
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? 'Updating...' : 'Update'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

// ✅ Wrap with Suspense boundary
export default function EditMealPlan() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
      <EditMealPlanContent />
    </Suspense>
  );
}
