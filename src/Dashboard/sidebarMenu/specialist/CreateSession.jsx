'use client'

import React, { useState } from 'react';
import { Button, Form, Input, Upload, Radio, Space, Tooltip } from 'antd';
import { UploadOutlined, DeleteOutlined, PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import BackHeader from '@/components/customComponent/BackHeader';

export default function CreateSession() {
  const [benefits, setBenefits] = useState(['']);
  const [form] = Form.useForm();

  const addBenefit = () => {
    setBenefits([...benefits, '']);
  };

  const removeBenefit = (index) => {
    const newBenefits = [...benefits];
    newBenefits.splice(index, 1);
    setBenefits(newBenefits);
  };

  const updateBenefit = (index, value) => {
    const newBenefits = [...benefits];
    newBenefits[index] = value;
    setBenefits(newBenefits);
  };

  const handleSubmit = (values) => {
    console.log('Form values:', {
      ...values,
      benefits: benefits.filter(benefit => benefit.trim() !== '')
    });
    // Here you would typically send data to your backend
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div >
        <BackHeader title={"Create Session"} />

    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
    
      <div className="border-t border-gray-200 pt-6">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          requiredMark={true}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Photo Upload */}
            <div>
              <p className="mb-2 font-medium">Photo</p>
              <Form.Item
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
                    <div className="text-xs text-gray-400">PNG, JPEG or JPG up to 10MB</div>
                  </div>
                </Upload>
              </Form.Item>
            </div>

            {/* Video Upload */}
            <div>
              <p className="mb-2 font-medium">Video</p>
              <Form.Item
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
                    <div className="text-xs text-gray-400">MP4, MOV or AVI up to 100MB</div>
                  </div>
                </Upload>
              </Form.Item>
            </div>
          </div>

          {/* Session Name */}
          <Form.Item
            label={<span className="font-medium">Name</span>}
            name="name"
            rules={[{ required: true, message: 'Please enter the session name' }]}
          >
            <Input placeholder="Push up" />
          </Form.Item>

          {/* Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Form.Item
                label={<span className="font-medium">Duration</span>}
                name="duration"
                rules={[{ required: true, message: 'Please enter the duration' }]}
              >
                <div className="flex">
                  <Input placeholder="1" className="flex-grow" />
                  <Form.Item name="durationUnit" noStyle initialValue="minutes">
                    <Radio.Group className="ml-2">
                      <Radio.Button value="minutes">Minutes</Radio.Button>
                      <Radio.Button value="hour">Hour</Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </Form.Item>
            </div>

            {/* Total Days */}
            <div>
              <Form.Item
                label={<span className="font-medium">Total day</span>}
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
              Benefits
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

          {/* Submit Button */}
          <Form.Item className="mt-6">
            <Button type="primary" htmlType="submit" className="bg-red-600 hover:bg-red-700 border-red-600 w-32">
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    </div>
  );
}