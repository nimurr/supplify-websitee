'use client';

import React, { Suspense, useState } from 'react';
import { Button, Form, Input, Upload, Radio, Tooltip } from 'antd';
import {
  UploadOutlined,
  DeleteOutlined,
  PlusOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import BackHeader from '@/components/customComponent/BackHeader';
import { useCreateTrainingSessionMutation } from '@/redux/fetures/Specialist/traningProgram';
import toast from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';

// ✅ Split the component for Suspense support
function EditSessionContent() {
  const [benefits, setBenefits] = useState(['']);
  const [form] = Form.useForm();
  const [createSession] = useCreateTrainingSessionMutation();

  const searchParams = useSearchParams();
  const programId = searchParams.get('programId');
  const sessionId = searchParams.get('sessionId');
  console.log('Program ID:', programId, 'Session ID:', sessionId);

  const addBenefit = () => setBenefits([...benefits, '']);

  const removeBenefit = (index) => {
    const updated = benefits.filter((_, i) => i !== index);
    setBenefits(updated);
  };

  const updateBenefit = (index, value) => {
    const updated = [...benefits];
    updated[index] = value;
    setBenefits(updated);
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();

    formData.append('trainingProgramId', programId);
    formData.append('title', values.name);
    formData.append('duration', values.duration);
    formData.append('durationUnit', values.durationUnit);

    // Append benefits
    benefits.forEach((b) => formData.append('benefits', b));

    // Uploads
    if (values.photo?.[0]?.originFileObj) {
      formData.append('coverPhotos', values.photo[0].originFileObj);
    }
    if (values.video?.[0]?.originFileObj) {
      formData.append('attachments', values.video[0].originFileObj);
    }
    if (!values.video?.length && values.videoLink) {
      formData.append('external_link', values.videoLink);
    }

    try {
      const res = await createSession(formData);
      if (res?.data?.message) {
        toast.success(res.data.message);
        form.resetFields();
      } else {
        toast.error(res?.error?.data?.message || 'Failed to create session');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong!');
    }
  };

  const normFile = (e) => (Array.isArray(e) ? e : e?.fileList);

  return (
    <div>
      <BackHeader title="Create Session" />
      <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold my-5">Create Session</h2>
        <div className="border-t border-gray-200 pt-6">
          <Form form={form} layout="vertical" onFinish={handleSubmit} requiredMark>
            {/* Photo Upload */}
            <div>
              <p className="mb-2 font-medium">Photo</p>
              <Form.Item name="photo" valuePropName="fileList" getValueFromEvent={normFile}>
                <Upload listType="picture-card" maxCount={1} beforeUpload={() => false} accept="image/*">
                  <div className="text-center">
                    <UploadOutlined className="text-lg" />
                    <div className="mt-2">Upload Photo</div>
                    <div className="text-xs text-gray-400">PNG, JPEG up to 10MB</div>
                  </div>
                </Upload>
              </Form.Item>
            </div>

            {/* Video Upload */}
            <div>
              <p className="mb-2 font-medium">Video</p>
              <Form.Item name="video" valuePropName="fileList" getValueFromEvent={normFile}>
                <Upload listType="picture-card" maxCount={1} beforeUpload={() => false} accept="video/*">
                  <div className="text-center">
                    <UploadOutlined className="text-lg" />
                    <div className="mt-2">Upload Video</div>
                    <div className="text-xs text-gray-400">MP4, MOV, AVI up to 100MB</div>
                  </div>
                </Upload>
              </Form.Item>
            </div>

            {/* Video Link */}
            <Form.Item label={<span className="font-medium">Video Link</span>} name="videoLink">
              <Input placeholder="Video link" />
            </Form.Item>

            {/* Name */}
            <Form.Item
              label={<span className="font-medium">Name</span>}
              name="name"
              rules={[{ required: true, message: 'Please enter the session name' }]}
            >
              <Input placeholder="Session Name" />
            </Form.Item>

            {/* Duration & Days */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Form.Item
                  label={<span className="font-medium">Duration</span>}
                  name="duration"
                  rules={[{ required: true, message: 'Please enter the duration' }]}
                >
                  <div className="flex">
                    <Input type="number" placeholder="1" className="flex-grow" />
                    <Form.Item name="durationUnit" noStyle initialValue="minutes">
                      <Radio.Group className="ml-2 flex items-center">
                        <Radio.Button value="minutes">Minutes</Radio.Button>
                        <Radio.Button value="hours">Hours</Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                  </div>
                </Form.Item>
              </div>

              <div>
                <Form.Item
                  label={<span className="font-medium">Total Days</span>}
                  name="totalDays"
                  rules={[{ required: true, message: 'Please enter total days' }]}
                >
                  <Input placeholder="5" />
                </Form.Item>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-4">
              <p className="font-medium">
                Benefits{' '}
                <Tooltip title="Add benefits of this session">
                  <InfoCircleOutlined className="ml-1 text-gray-400" />
                </Tooltip>
              </p>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center mb-2">
                  <Input
                    value={benefit}
                    onChange={(e) => updateBenefit(index, e.target.value)}
                    placeholder="Strengthens the Chest"
                    className="flex-grow"
                  />
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => removeBenefit(index)}
                    className="ml-2"
                  />
                </div>
              ))}
              <Button
                type="dashed"
                onClick={addBenefit}
                className="w-full mt-2"
                icon={<PlusOutlined />}
              >
                Add new
              </Button>
            </div>

            {/* Submit */}
            <Form.Item className="mt-6">
              <Button
                type="primary"
                htmlType="submit"
                className="bg-red-600 hover:bg-red-700 border-red-600 w-32"
              >
                Create
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

// ✅ Wrap in Suspense for safe useSearchParams()
export default function Page() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading session form...</div>}>
      <EditSessionContent />
    </Suspense>
  );
}
