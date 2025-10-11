'use client';
import React, { useState } from 'react';
import { BsBank } from "react-icons/bs";
import { Modal, Button, Form, Input, Switch } from 'antd'; // Import necessary components from Ant Design


const Page = () => {
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [form] = Form.useForm(); // To handle form fields

    // Function to open the modal
    const openModal = () => setShowModal(true);

    // Function to close the modal
    const closeModal = () => setShowModal(false);

    // Handle the form submission
    const handleSubmit = (values) => {
        console.log('Bank Information:', values);
        closeModal(); // Close modal after submission
    };

    return (
        <div className='my-20'>
            <div className='relative'>
                <img className='w-1/2 mx-auto' src="/images/erning-bg.png" alt="" />
                <div className='absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <p className='text-center font-medium mb-2'>Total Balance</p>
                    <h2 className='text-2xl font-semibold text-red-600 text-center'>$1200</h2>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-4 items-end mt-10'>
                <div className='w-full'>
                    <h3 className='font-medium mb-2'>Enter AMOUNT TO WITHDRAW</h3>
                    <input type="text" placeholder='Enter Amount' className='border border-gray-400 p-2 rounded-md w-full' />
                </div>
                <button className='w-full bg-red-600 text-white py-2 rounded-lg '>Withdraw</button>
                <button className='w-full bg-red-600 text-white py-2 rounded-lg ' onClick={openModal}>ADD BANK INFORMATION</button>
            </div>
            {/* Table for showing recent withdrawals */}
            <div className='mt-8'>
                <div className='flex justify-between items-center gap-5 '>
                    <div className='flex gap-4'>
                        <div className='flex w-12 h-12 justify-center items-center bg-red-100 rounded-lg'>
                            <BsBank className='text-3xl text-red-600' />
                        </div>
                        <div>
                            <h4 className='font-semibold text-xl'>$150</h4>
                            <p>Bank of America</p>
                        </div>
                    </div>
                    <p>May 6, 2025</p>
                </div>
            </div>

            {/* Modal for adding bank information */}
            <Modal
                title="Add Bank Information"
                visible={showModal}
                onCancel={closeModal}
                footer={[
                    <button  key="cancel" onClick={closeModal} className='bg-gray-500 mr-2 !py-2 px-8 rounded-md text-white'>
                        Cancel
                    </button>,
                    <button form="bankForm" key="submit" htmlType="submit" className='bg-red-600 !py-2 px-8 rounded-md text-white'>
                        Create
                    </button>,
                ]}
            >
                <Form
                    form={form}
                    id="bankForm"
                    onFinish={handleSubmit}
                    layout="vertical"
                >
                    {/* Bank Account Number */}
                    <Form.Item
                        label="Bank Account Number"
                        name="accountNumber"
                        rules={[{ required: true, message: 'Please enter your bank account number!' }]}
                    >
                        <Input className='py-2' placeholder="Enter your bank account number" />
                    </Form.Item>

                    {/* Routing Number */}
                    <Form.Item
                        label="Routing Number"
                        name="routingNumber"
                        rules={[{ required: true, message: 'Please enter your routing number!' }]}
                    >
                        <Input className='py-2' placeholder="Enter your routing number" />
                    </Form.Item>

                    {/* Account Holder Name */}
                    <Form.Item
                        label="Account Holder Name"
                        name="accountHolderName"
                        rules={[{ required: true, message: 'Please enter the account holder name!' }]}
                    >
                        <Input className='py-2' placeholder="Enter account holder name" />
                    </Form.Item>

                    {/* Account Type */}
                    <Form.Item
                        label="Account Type"
                        name="accountType"
                        rules={[{ required: true, message: 'Please select the account type!' }]}
                    >
                        <Input className='py-2' placeholder="Enter account type" />
                    </Form.Item>

                    {/* Branch Name */}
                    <Form.Item
                        label="Branch Name"
                        name="branchName"
                        rules={[{ required: true, message: 'Please enter the branch name!' }]}
                    >
                        <Input className='py-2' placeholder="Enter branch name" />
                    </Form.Item>

                    {/* Bank Name */}
                    <Form.Item
                        label="Bank Name"
                        name="bankName"
                        rules={[{ required: true, message: 'Please enter the bank name!' }]}
                    >
                        <Input className='py-2' placeholder="Enter bank name" />
                    </Form.Item>

                    {/* Visibility Switch for Profile */}
                    {/* <Form.Item
                        label="Visibility"
                        name="visibility"
                        valuePropName="checked"
                    >
                        <Switch checkedChildren="Visible" unCheckedChildren="Hide" />
                    </Form.Item> */}
                </Form>
            </Modal>
        </div>
    );
};

export default Page;
