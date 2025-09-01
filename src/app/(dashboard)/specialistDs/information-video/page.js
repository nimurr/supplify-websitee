'use client'
import React, { useState, useRef } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Page = () => {
    // State to control modal visibility
    const [isModalOpen, setModalOpen] = useState(false);

    // Reference to modal content to detect clicks inside
    const modalContentRef = useRef();

    // Function to open and close the modal
    const toggleModal = () => setModalOpen(!isModalOpen);

    // Function to close the modal if clicked outside
    const handleClickOutside = (e) => {
        if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
            setModalOpen(false);
        }
    };

    // Adding the event listener for clicks outside of modal when it is open
    React.useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <div>
            <div className='flex items-center justify-between my-10'>
                <h2 className='text-4xl font-semibold'>Informational Video</h2>
                <div className='flex items-center gap-5'>
                    <label className='relative' htmlFor="">
                        <input
                            type="text"
                            placeholder='Search Here ...'
                            className='py-2 px-3 border-2 pr-8 border-gray-300 rounded-xl focus:border-blue-300 outline-none'
                        />
                        <CiSearch className='absolute top-3 right-3 text-xl' />
                    </label>
                    <button
                        className='py-3 px-8 bg-[#cc2124] text-white rounded-xl flex items-center gap-2'
                        onClick={toggleModal}
                    >
                        <IoIosAddCircleOutline size={24} /> Create New
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-5 gap-5'>
                {[...Array(10)].map((_, index) => {
                    return (
                        <div className='border-2 border-gray-300 rounded-xl p-3' key={index}>
                            <img className='w-full' src="/images/trainer.png" alt="" />
                            <div className='mt-5 space-y-3'>
                                <h2 className='text-2xl font-semibold'>Video Name</h2>
                                <p className='text-gray-500'>
                                    Description for this item is very important for the user, they have to know in details of the item... see more
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className='flex items-center justify-center my-10'>
                <button className='py-3 px-8 bg-red-700 text-white rounded-lg'>
                    Load More...
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    onClick={handleClickOutside}
                    className="fixed z-[999] inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center"
                >
                    <div
                        ref={modalContentRef} // Reference to modal content
                        className="bg-white z-[9999] p-8 rounded-lg max-w-md w-full !min-w-[650px]"
                    >
                        <h3 className="text-xl font-semibold mb-5">Create Session</h3>

                        {/* Photo Upload */}
                        <div className="mb-5">
                            <label className="block mb-2">Photo</label>
                            <input
                                type="file"
                                accept="image/png, image/jpg, image/jpeg"
                                className="border-2 border-gray-300 p-4 w-full text-center rounded-xl cursor-pointer"
                                onChange={(e) => console.log(e.target.files[0])} // Placeholder for handling file selection
                            />
                            <p className="text-sm text-gray-500">PNG, JPG, or JPEG up to 10MB</p>
                        </div>

                        {/* Video Upload */}
                        <div className="mb-5">
                            <label className="block mb-2">Video</label>
                            <input
                                type="file"
                                accept="video/mp4, video/mov, video/avi"
                                className="border-2 border-gray-300 p-4 w-full text-center rounded-xl cursor-pointer"
                                onChange={(e) => console.log(e.target.files[0])} // Placeholder for handling video file selection
                            />
                            <p className="text-sm text-gray-500">MP4, MOV, or AVI up to 10MB</p>
                        </div>

                        <p className="text-center text-gray-500 mb-5">OR</p>

                        {/* Link Input */}
                        <div className="mb-5">
                            <label className="block mb-2">Link</label>
                            <input
                                type="text"
                                placeholder="Link"
                                className="py-2 px-3 border-2 border-gray-300 rounded-xl w-full"
                            />
                        </div>

                        {/* Title Input */}
                        <div className="mb-5">
                            <label className="block mb-2">Title</label>
                            <input
                                type="text"
                                placeholder="Push up"
                                className="py-2 px-3 border-2 border-gray-300 rounded-xl w-full"
                            />
                        </div>

                        {/* Description Input */}
                        <div className="mb-5">
                            <label className="block mb-2">Description</label>
                            <textarea
                                placeholder="type here..."
                                className="py-2 px-3 border-2 border-gray-300 rounded-xl w-full"
                                rows="4"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between">
                            <button
                                className="bg-gray-300 py-2 px-6 rounded-xl text-gray-700"
                                onClick={toggleModal}
                            >
                                Cancel
                            </button>
                            <button className="bg-red-700 py-2 px-6 rounded-xl text-white">
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
