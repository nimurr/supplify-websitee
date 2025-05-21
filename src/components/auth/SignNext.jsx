"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Upload, Button, Form } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function SignUpNext() {
    const router = useRouter()
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "";
  const email = searchParams.get("email") || "";
  const name = searchParams.get("name") || "";
  const password = searchParams.get("password") || "";

  const onFinish = (values) => {
 
    // API call or next step
    const fullData = {role, email,name,password, ...values}
    console.log("Uploaded files:", fullData);
    router.push("/auth/signup-success");
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
            getValueFromEvent={(e) => e.fileList}
            rules={[{ required: true, message: "Please upload your document" }]}
          >
            <Upload beforeUpload={() => false} multiple>
              <Button icon={<UploadOutlined />}>Add File</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block className="bg-red-700 border-none">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
