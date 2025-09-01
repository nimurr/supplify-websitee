import React from 'react';

const Page = () => {
    return (
        <div>
            <h2 className='text-4xl font-semibold my-10'>Informational video</h2>
            <div className='grid grid-cols-5 gap-5'>
                {
                    [...Array(10)].map((_, index) => {
                        return (
                            <div className='border-2 border-gray-300 rounded-xl p-3' key={index}>
                                <img className='w-full' src="/images/trainer.png" alt="" />
                                <div className='mt-5 space-y-3'>
                                    <h2 className='text-2xl font-semibold'>Video Name</h2>
                                    <p className='text-gray-500'>Description for this item is very important for the user, they have to know in details of the item... see more</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className='flex items-center justify-center my-10'>
                <button className='py-3 px-8 bg-red-700 text-white rounded-lg '>Load More...</button>
            </div>
        </div>
    );
}

export default Page;
