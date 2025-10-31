'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { Table } from 'antd';
import { IoEyeOutline } from "react-icons/io5";
import { useGetAllOrdersQuery } from '@/redux/fetures/patient/order';

// Table columns
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
          record.status === 'Processing'
            ? 'text-[#e88c31]'
            : 'text-[#009914e8]'
        } px-2 py-1 rounded text-center`}
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
        <IoEyeOutline className="text-2xl" />
      </a>
    ),
  },
];

// ✅ Separate safe client component wrapped in Suspense
function OrdersTable() {
  const [userId, setUserId] = useState(null);

  // ✅ Get user data safely in the client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser?.id) {
            setUserId(parsedUser.id);
          }
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      }
    }
  }, []);

  // ✅ Only run the query when userId is available
  const { data, isLoading } = useGetAllOrdersQuery(userId, {
    skip: !userId,
  });

  const fullData = data?.data?.attributes?.results || [];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Orders</h2>

      {isLoading ? (
        <div className="text-center text-blue-500">Loading orders...</div>
      ) : (
        <Table
          dataSource={fullData}
          columns={columns}
          pagination={false}
          style={{
            backgroundColor: '#f4f4f4',
            borderRadius: '8px',
          }}
          components={{
            header: {
              cell: (props) => (
                <th
                  {...props}
                  style={{ backgroundColor: '#dc1111', color: 'white' }}
                />
              ),
            },
          }}
        />
      )}
    </div>
  );
}

// ✅ Wrap in Suspense to ensure CSR rendering
export default function CompositionEvent() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <OrdersTable />
    </Suspense>
  );
}
