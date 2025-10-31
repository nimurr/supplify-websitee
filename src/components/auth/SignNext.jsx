'use client';

import React, { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Upload, Button, Form, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useSignUpMutation } from '@/redux/fetures/auth/signUp';
import toast from 'react-hot-toast';

/** ✅ Content wrapped safely for client-side rendering */
function SignUpNextContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const role = searchParams.get('role') || '';
  const email = searchParams.get('email') || '';
  const name = searchParams.get('name') || '';
  const password = searchParams.get('password') || '';

  const [register, { isLoading }] = useSignUpMutation();

  const onFinish = async (values) => {
    const formData = new FormData();
    values.documents.forEach((file) => {
      formData.append('attachments', file.originFileObj);
    });
    formData.append('role', role);
    formData.append('email', email);
    formData.append('name', name);
    formData.append('password', password);

    try {
      const res = await register(formData).unwrap();
      if (res?.code === 201) {
        toast.success(res?.message);
        message.success(res?.message || 'Registration successful!');
        router.push('/auth/signup-success');
      } else {
        toast.error(res?.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error during submission:', error);
      toast.error(error?.data?.message || 'Failed to register');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#111] text-white px-4">
      <div className="bg-white text-black p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          Sign up as a <b>{role}</b>
        </h2>

        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            name="documents"
            label="Upload Certification"
            valuePropName="fileList"
            getValueFromEvent={(e) => e?.fileList}
            rules={[{ required: true, message: 'Please upload your document' }]}
          >
            <Upload beforeUpload={() => false} multiple>
              <Button icon={<UploadOutlined />}>Add File</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              block
              className="bg-blue-700 border-none text-white py-3 rounded-lg hover:bg-blue-800 transition duration-300"
            >
              {isLoading ? 'Submitting...' : 'Submit Now'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

/** ✅ Page wrapped in <Suspense> boundary */
export default function SignUpNext() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <SignUpNextContent />
    </Suspense>
  );
}
