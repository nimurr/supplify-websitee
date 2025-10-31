'use client';

import React, { Suspense, useState } from 'react';
import { Button, Form, Input, Upload, Radio, Tooltip } from 'antd';
import { UploadOutlined, DeleteOutlined, PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import BackHeader from '@/components/customComponent/BackHeader';
import { useCreateTrainingSessionMutation } from '@/redux/fetures/Specialist/traningProgram';
import toast from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';

// ✅ Separate the actual logic into a suspense-safe child component
function CreateSessionContent() {
  const [benefits, setBenefits] = useState(['']);
  const [form] = Form.useForm();
  const [createSession] = useCreateTrainingSessionMutation();

  const addBenefit = () => setBenefits([...benefits, '']);
  const removeBenefit = (i) => setBenefits(benefits.filter((_, index) => index !== i));
  const updateBenefit = (i, value) => {
    const newBenefits = [...benefits];
    newBenefits[i] = value;
    setBenefits(newBenefits);
  };

  const searchParams = useSearchParams();
  const programId = searchParams.get('programId');

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('trainingProgramId', programId);
    formData.append('title', values.name);
    formData.append('duration', values.duration);
    formData.append('durationUnit', values.durationUnit);

    benefits.forEach((b) => formData.append('benefits', b));

    if (values.photo?.[0]?.originFileObj) {
      formData.append('coverPhotos', values.photo[0].originFileObj);
    }
    if (values.video?.[0]?.originFileObj) {
      formData.append('attachments', values.video[0].originFileObj);
    } else if (values.videoLink) {
      formData.append('external_link', values.videoLink);
    } else {
      return toast.error('Please provide a video file or link');
    }

    try {
      const res = await createSession(formData);
      if (res?.error?.data?.message) toast.error(res.error.data.message);
      if (res?.data?.message) {
        toast.success(res.data.message);
        form.resetFields();
      }
    } catch (err) {
      console.error(err);
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
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark={true}
          >
            {/* Photo Upload */}
            <Form.Item
              label="Photo"
              name="photo"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload
                listType="picture-card"
                maxCount={1}
                beforeUpload={() => false}
                accept="image/*"
              >
                <div className="text-center">
                  <UploadOutlined className="text-lg" />
                  <div className="mt-2">Upload Photo</div>
                  <div className="text-xs text-gray-400">
                    PNG, JPEG or JPG up to 10MB
                  </div>
                </div>
              </Upload>
            </Form.Item>

            {/* Video Upload */}
            <Form.Item
              label="Video"
              name="video"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload
                listType="picture-card"
                maxCount={1}
                beforeUpload={() => false}
                accept="video/*"
              >
                <div className="text-center">
                  <UploadOutlined className="text-lg" />
                  <div className="mt-2">Upload Video</div>
                  <div className="text-xs text-gray-400">
                    MP4, MOV or AVI up to 100MB
                  </div>
                </div>
              </Upload>
            </Form.Item>

            {/* Video Link */}
            <Form.Item
              label={<span className="font-medium">Video Link</span>}
              name="videoLink"
            >
              <Input placeholder="Enter video link" />
            </Form.Item>

            {/* Session Name */}
            <Form.Item
              label={<span className="font-medium">Name</span>}
              name="name"
              rules={[{ required: true, message: 'Please enter the session name' }]}
            >
              <Input placeholder="Session Name" />
            </Form.Item>

            {/* Duration */}
            <Form.Item
              label={<span className="font-medium">Duration</span>}
              name="duration"
              rules={[{ required: true, message: 'Please enter the duration' }]}
            >
              <div className="flex">
                <Input
                  type="number"
                  placeholder="1"
                  className="flex-grow"
                />
                <Form.Item name="durationUnit" noStyle initialValue="minutes">
                  <Radio.Group className="ml-2 flex items-center">
                    <Radio.Button value="minutes">Minutes</Radio.Button>
                    <Radio.Button value="hours">Hours</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </div>
            </Form.Item>

            {/* Benefits */}
            <div className="mb-4">
              <p className="font-medium">
                Benefits
                <Tooltip title="Add benefits of this session">
                  <InfoCircleOutlined className="ml-1 text-gray-400" />
                </Tooltip>
              </p>
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center mb-2">
                  <Input
                    value={b}
                    onChange={(e) => updateBenefit(i, e.target.value)}
                    placeholder="Benefit"
                    className="flex-grow"
                  />
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => removeBenefit(i)}
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

// ✅ Wrap in Suspense to make useSearchParams safe
export default function CreateSession() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
      <CreateSessionContent />
    </Suspense>
  );
}
