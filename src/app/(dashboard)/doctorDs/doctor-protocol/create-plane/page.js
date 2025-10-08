'use client'
import { useGetSingleProtocolQuery } from '@/redux/fetures/doctor/doctor';
import React, { useEffect, useState } from 'react';
import { CiCirclePlus, CiEdit, CiSearch } from 'react-icons/ci';

const Page = () => {
    // get protocolId from URL
    const searchParams = new URLSearchParams(window.location.search);
    const protocolId = searchParams.get("protocolId");

    const { data } = useGetSingleProtocolQuery(protocolId);
    const mealPlanData = data?.data?.attributes?.results[0] || [];
    const [isEditing, setIsEditing] = useState(false); // State to track editing mode
    const [mealPlanName, setMealPlanName] = useState(''); // State to hold the edited value

    useEffect(() => {
        if (mealPlanData?.name) {
            setMealPlanName(mealPlanData?.name);
        }
    }, [mealPlanData]);
 

    // Handle Edit mode toggle
    const handleEdit = () => {
        setIsEditing(true);  // Enable edit mode
    };

    // Handle Save edited value
    const handleSave = () => {
        setIsEditing(false);  // Disable edit mode
        // Here you can call an API or handle saving the new value
        console.log("New Meal Plan Name:", mealPlanName);
    };

    return (
        <div className="flex lg:flex-row flex-col py-10">
            {/* Left Sidebar */}
            <div className="lg:w-1/4 bg-white p-4 border border-gray-100 rounded-lg">
                <h2 className="text-xl font-bold flex items-center gap-3 cursor-pointer">
                    {isEditing ? (
                        <input
                            type="text"
                            value={mealPlanName}
                            onChange={(e) => setMealPlanName(e.target.value)}
                            className="border-b-2 border-gray-300 focus:outline-none"
                        />
                    ) : (
                        <>
                            {mealPlanData?.name ? mealPlanData?.name : mealPlanName} <CiEdit onClick={handleEdit} />
                        </>
                    )}
                    {isEditing && (
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-4"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    )}
                </h2>
                <div className="py-2 px-5 rounded-lg cursor-pointer  my-2 flex items-center gap-5 hover:bg-gray-100">
                    <div className="text-sm font-semibold">1</div>
                    <div className="  rounded mt-1 ">Meal plan</div>
                </div>
                <div className="py-2 px-5 rounded-lg cursor-pointer my-2 flex items-center gap-5 hover:bg-gray-100">
                    <div className="text-sm font-semibold">2</div>
                    <div className=" rounded mt-1 w-full ">Workout</div>
                </div>
                <div className="py-2 px-5 rounded-lg cursor-pointer my-2 flex items-center gap-5 hover:bg-gray-100">
                    <div className="text-sm font-semibold">3</div>
                    <div className=" rounded mt-1 w-full  ">Supplement</div>
                </div>
                <div className="py-2 px-5 rounded-lg cursor-pointer my-2 flex items-center gap-5 hover:bg-gray-100">
                    <div className="text-sm font-semibold">4</div>
                    <div className=" rounded mt-1 w-full ">Life style changes</div>
                </div>
            </div>

            {/* Right Content */}
            <div className="w-3/4 p-8">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">Meal Plan</h3>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2 ">
                        <CiCirclePlus className='text-2xl' /> Create New
                    </button>
                </div>
                <div className="mt-4">
                    <div className="text-sm font-medium">Description</div>
                    <p className='text-sm text-gray-500'>Search meal plan that you already create </p>
                    <div className="mt-2 relative">
                        <input
                            type="text"
                            className="py-2 px-10 border border-gray-200 rounded w-full"
                            placeholder="Search meal plan that you already create"
                        />
                        <CiSearch className="absolute text-[#b8b8b8] top-2 text-2xl left-2" />
                    </div>
                </div>
                <div className="mt-6 px-4 py-2 border border-gray-200 rounded">
                    <div className="flex items-center gap-10 py-3">
                        <div className="font-semibold">Meal Plan 1</div>
                        <div className="text-sm">5 key points</div>
                    </div>
                    <div className="flex items-center gap-10 py-3">
                        <div className="font-semibold">Meal Plan 2</div>
                        <div className="text-sm">5 key points</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page;
