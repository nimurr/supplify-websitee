"use client";
import { useState } from "react";
import { Form, Input, Button, DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import BackHeader from "@/components/customComponent/BackHeader";

export default function CreateSchedule() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
      <div>
          <BackHeader title={"Back"} />
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-6">Create Schedule</h3>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          price: "150",
          date: dayjs("2025-01-01"),
          startTime: dayjs("22:30", "HH:mm"),
          endTime: dayjs("22:30", "HH:mm"),
        }}
        requiredMark="optional"
        colon={false}
      >
        <div className="grid grid-cols-2 gap-6">
          <Form.Item
            label={
              <>
                Price <span className="text-red-600">*</span>
              </>
            }
            name="price"
            rules={[{ required: true, message: "Please input price" }]}
          >
            <Input prefix="$" />
          </Form.Item>

          <Form.Item
            label={
              <>
                Date <span className="text-red-600">*</span>
              </>
            }
            name="date"
            rules={[{ required: true, message: "Please select date" }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Form.Item
            label={
              <>
                Start Time <span className="text-red-600">*</span>
              </>
            }
            name="startTime"
            rules={[{ required: true, message: "Please select start time" }]}
          >
            <TimePicker className="w-full" format="h:mm a" use12Hours />
          </Form.Item>

          <Form.Item
            label={
              <>
                End Time <span className="text-red-600">*</span>
              </>
            }
            name="endTime"
            rules={[{ required: true, message: "Please select end time" }]}
          >
            <TimePicker className="w-full" format="h:mm a" use12Hours />
          </Form.Item>
        </div>

        <Form.Item
          label={
            <>
              Description <span className="text-red-600">*</span>
            </>
          }
          name="description"
          rules={[{ required: true, message: "Please type description" }]}
        >
          <Input.TextArea rows={4} placeholder="Type description" />
        </Form.Item>

        <div className="grid grid-cols-2 gap-6">
          <Form.Item
            label={
              <>
                Type of link <span className="text-red-600">*</span>
              </>
            }
            name="linkType"
            rules={[{ required: true, message: "Please input link type" }]}
          >
            <Input placeholder="type link name" />
          </Form.Item>

          <Form.Item
            label={
              <>
                Link <span className="text-red-600">*</span>
              </>
            }
            name="link"
            rules={[{ required: true, message: "Please input link" }]}
          >
            <Input placeholder="https://" />
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            type="primary"
            danger
            htmlType="submit"
            className="mt-4 w-28"
          >
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
}
