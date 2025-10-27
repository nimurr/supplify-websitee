'use client';
import { useGetAllcartProductsQuery } from '@/redux/fetures/landing/landing';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const Page = () => {
    const { data, refetch, isLoading } = useGetAllcartProductsQuery();
    const fullData = data?.data?.attributes;
    console.log(data?.data?.attributes);
    return (
        <div className='py-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto px-4 '>
            {
                isLoading && <h1>Loading...</h1>
            }
            {
                fullData?.map((product, index) => (
                    <Card
                        className="overflow-hidden"
                        cover={
                            <div className="relative bg-red-500 h-48">
                                <img
                                    src={product?.itemId?.attachments && product?.itemId?.attachments.length > 0 ? product?.itemId?.attachments[0]?.attachment : '/placeholder.png'}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        }
                        bodyStyle={{ padding: '16px' }}
                    >
                        <Toaster />
                        <p className="text-gray-600"> Quantity : {product?.quantity}</p>
                        <h3 className="text-lg font-bold">${product?.itemId?.price}</h3>
                        <p className="text-sm text-gray-500 mb-2">
                            Description for this item is very important for the user, they have to know in details of the item...
                            <button
                                onClick={() => onViewDetails(product)}
                                className="text-blue-500 ml-1"
                            >
                                see more
                            </button>
                        </p>

                    </Card>
                ))
            }
            {/**/}
        </div>
    );
}

export default Page;
