"use client";
import React from 'react';
import { Table } from 'antd';
import { IoEyeOutline } from "react-icons/io5";

// Your data
const data = [
    {
        key: '1',
        orderId: '1231',
        orderType: 'Product',
        transactionId: '1234567',
        paymentMethod: 'Online',
        totalAmount: '$123',
        status: 'Delivered',
        action: 'View',
    },
    {
        key: '2',
        orderId: '1231',
        orderType: 'Product',
        transactionId: '1234567',
        paymentMethod: 'Online',
        totalAmount: '$123',
        status: 'Processing',
        action: 'View',
    },
];

// Your columns configuration
const columns = [
    {
        title: 'Order ID',
        dataIndex: 'orderId',
        key: 'orderId',
    },
    {
        title: 'Order Type',
        dataIndex: 'orderType',
        key: 'orderType',
    },
    {
        title: 'Transaction ID',
        dataIndex: 'transactionId',
        key: 'transactionId',
    },
    {
        title: 'Payment Method',
        dataIndex: 'paymentMethod',
        key: 'paymentMethod',
    },
    {
        title: 'Total Amount',
        dataIndex: 'totalAmount',
        key: 'totalAmount',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (text, record) => (
            <h3
                className={`${
                    record.status === 'Processing' ? "text-[#e88c31]" : "text-[#009914e8]"
                } px-2 py-1 rounded text-center `}
            >
                {record.status}
            </h3>
        ),
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
            <a href={`/dashboard/order/${record.key}`}>
                <IoEyeOutline className='text-2xl' />
            </a>
        ),
    },
];

const CompositionEvent = ({ header }) => {
    return (
        <div>
            <Table
                dataSource={data}
                columns={columns}
                pagination={false}
                style={{
                    backgroundColor: '#f4f4f4',
                    borderRadius: '8px',
                }}
                // Custom header style via CSS or inline
                components={{
                    header: {
                        cell: (props) => <th {...props} style={{ backgroundColor: '#dc1111', color: 'white' }} />,
                    },
                }}
            />
        </div>
    );
};

export default CompositionEvent;
