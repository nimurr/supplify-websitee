'use client';
import React, { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import { Modal, Button } from 'antd'; // Import Ant Design's Modal and Button components

// Dummy data for table
const data = [
    { id: 1, orderId: '1001', orderType: 'Online', transactionId: 'TXN001', paymentMethod: 'Credit Card', totalAmount: '$100', status: 'Processing' },
    { id: 2, orderId: '1002', orderType: 'In-Store', transactionId: 'TXN002', paymentMethod: 'Debit Card', totalAmount: '$50', status: 'Booked' },
    { id: 3, orderId: '1003', orderType: 'Online', transactionId: 'TXN003', paymentMethod: 'Paypal', totalAmount: '$200', status: 'Booked' },
];

const Page = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    // Function to open the modal and set data
    const openModal = (data) => {
        setModalData(data);
        setShowModal(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setShowModal(false);
        setModalData(null);
    };

    return (
        <div>
            <table border="1" className='rounded-lg' style={{ borderRadius: '10px', width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: 'red', color: 'white', padding: '8px' }}>Order Id</th>
                        <th style={{ backgroundColor: 'red', color: 'white', padding: '8px' }}>Order Type</th>
                        <th style={{ backgroundColor: 'red', color: 'white', padding: '8px' }}>Transaction Id</th>
                        <th style={{ backgroundColor: 'red', color: 'white', padding: '8px' }}>Payment Method</th>
                        <th style={{ backgroundColor: 'red', color: 'white', padding: '8px' }}>Total Amount</th>
                        <th style={{ backgroundColor: 'red', color: 'white', padding: '8px' }}>Status</th>
                        <th style={{ backgroundColor: 'red', color: 'white', padding: '8px' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr className='border-b border-gray-200 py-2' key={row.id}>
                            <td className='text-center' style={{ padding: '10px' }}>{row.orderId}</td>
                            <td className='text-center' style={{ padding: '10px' }}>{row.orderType}</td>
                            <td className='text-center' style={{ padding: '10px' }}>{row.transactionId}</td>
                            <td className='text-center' style={{ padding: '10px' }}>{row.paymentMethod}</td>
                            <td className='text-center' style={{ padding: '10px' }}>{row.totalAmount}</td>
                            <td className={`${row.status === 'Processing' ? 'text-yellow-600' : 'text-green-600'}`} style={{ padding: '10px' }}>
                                {row.status}
                                </td>
                            <td className='text-center' style={{ padding: '10px' }}>
                                <button onClick={() => openModal(row)}><IoEyeOutline /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Ant Design Modal */}
            <Modal
                title="Order Details"
                visible={showModal}
                onCancel={closeModal}
                footer={[
                    <Button key="close" onClick={closeModal} className='bg-red-500 hover:bg-red-600'>
                        Close
                    </Button>,
                ]}
            >
                {modalData && (
                    <div className='space-y-2'>
                        <p className='flex items-center justify-between gap-5'><strong>Order Id:</strong> {modalData.orderId}</p>
                        <p className='flex items-center justify-between gap-5'><strong>Order Type:</strong> {modalData.orderType}</p>
                        <p className='flex items-center justify-between gap-5'><strong>Transaction Id:</strong> {modalData.transactionId}</p>
                        <p className='flex items-center justify-between gap-5'><strong>Payment Method:</strong> {modalData.paymentMethod}</p>
                        <p className='flex items-center justify-between gap-5'><strong>Total Amount:</strong> {modalData.totalAmount}</p>
                        <p className='flex items-center justify-between gap-5'><strong>Status:</strong> {modalData.status}</p>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Page;
