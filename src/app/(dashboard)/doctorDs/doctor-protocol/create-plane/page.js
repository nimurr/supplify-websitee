'use client'
import { useCreatePlaneMutation } from '@/redux/fetures/doctor/createPlane';
import { useGetSingleProtocolQuery, useSearchPlaneQuery, useUpdateProtocolMutation } from '@/redux/fetures/doctor/doctor';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { CiCirclePlus, CiEdit, CiSearch } from 'react-icons/ci';

const Page = () => {
    // get protocolId from URL
    const searchParams = new URLSearchParams(window.location.search);
    const protocolId = searchParams.get("protocolId");
    const patientId = searchParams.get("patientId");

    const { data } = useGetSingleProtocolQuery(protocolId);
    const mealPlanData = data?.data?.attributes?.results[0] || [];
    const [isEditing, setIsEditing] = useState(false); // State to track editing mode
    const [mealPlanName, setMealPlanName] = useState(''); // State to hold the edited value
    const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

    const [newMealPlan, setNewMealPlan] = useState({
        planName: '',
        planType: '',
        keyPoints: [''],  // To store multiple key points
        description: ''
    });

    useEffect(() => {
        if (mealPlanData?.name) {
            setMealPlanName(mealPlanData?.name);
        }
    }, [mealPlanData]);


    // Handle Edit mode toggle
    const handleEdit = () => {
        setIsEditing(true);  // Enable edit mode
    };

    const [updateProtocol] = useUpdateProtocolMutation();

    // Handle Save edited value
    const handleSave = async () => {
        const data = {
            name: mealPlanName
        }
        try {
            const res = await updateProtocol({ protocolId, data });
            console.log(res);
            if (res?.data?.code == 200) {
                toast.success(res?.data?.message);
                setIsEditing(false);
            }
            else {
                toast.error(res?.data?.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.data?.message || "Failed to update protocol");
        }
    };

    // Open/Close Modal
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMealPlan(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle multiple key points addition
    const handleKeyPointChange = (index, value) => {
        const updatedKeyPoints = [...newMealPlan.keyPoints];
        updatedKeyPoints[index] = value;
        setNewMealPlan(prevState => ({
            ...prevState,
            keyPoints: updatedKeyPoints
        }));
    };

    const addKeyPoint = () => {
        setNewMealPlan(prevState => ({
            ...prevState,
            keyPoints: [...prevState.keyPoints, '']
        }));
    };

    const removeKeyPoint = (index) => {
        const updatedKeyPoints = newMealPlan.keyPoints.filter((_, i) => i !== index);
        setNewMealPlan(prevState => ({
            ...prevState,
            keyPoints: updatedKeyPoints
        }));
    };
    const [selectedPlan, setSelectedPlan] = useState('mealPlan');

    const [createPlane] = useCreatePlaneMutation();
    // Handle form submission
    const handleCreateMealPlan = async (e) => {
        e.preventDefault();

        if (!selectedPlan) return toast.error("Please select a plan type");

        const data = {
            title: newMealPlan.planName,
            planType: selectedPlan,
            keyPoints: newMealPlan.keyPoints,
            description: newMealPlan.description,
            protocolId: protocolId,
            patientId: patientId
        }

        try {
            const res = await createPlane(data);
            console.log(res);
            if (res?.data?.code == 200) {
                toast.success(res?.data?.message);
                toggleModal(); // Close the modal after submission
            }
            else {
                toast.error(res?.data?.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error?.data?.message || "Failed to create meal plan");

        }


    };

    const [search, setSearch] = useState('');
    const { data: searchData, isLoading } = useSearchPlaneQuery({ type: selectedPlan, title: search });
    const fullData = searchData?.data?.attributes?.results || [];


    const handleSearch = (value) => {
        if (!selectedPlan) {
            return toast.error("Please select a plan type");
        }
        setSearch(value);
    };


    return (
        <div className="flex lg:flex-row flex-col py-10">
            <Toaster />
            {/* Left Sidebar */}
            <div className="lg:w-1/4 bg-white p-4 border border-gray-100 rounded-lg">
                <h2 className="text-xl font-bold flex items-center gap-3 cursor-pointer">
                    {isEditing ? (
                        <input
                            type="text"
                            value={mealPlanName}
                            onChange={(e) => setMealPlanName(e.target.value)}
                            className="border-b-2 w-full border-gray-300 focus:outline-none"
                        />
                    ) : (
                        <>
                            {mealPlanData?.name ? mealPlanData?.name : mealPlanName} <CiEdit onClick={handleEdit} />
                        </>
                    )}
                    {isEditing && (
                        <button
                            className="xl:px-4 xl:py-2 p-1 bg-blue-500 text-white rounded-lg mt-4"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    )}
                </h2>
                {/* Static Plan Types */}
                {[{
                    name: 'Meal plan',
                    type: 'mealPlan'
                }, {
                    name: 'Workout plan',
                    type: 'workOut'
                }, {
                    name: 'Supplement plan',
                    type: 'suppliment'
                }, {
                    name: 'Life style plan',
                    type: 'lifeStyleChanges'
                }].map((plan, index) => (
                    <div key={index} onClick={() => setSelectedPlan(plan.type)} className="py-2 px-5 rounded-lg cursor-pointer my-2 flex items-center gap-5 hover:bg-gray-100">
                        <div className="text-sm font-semibold">{index + 1}</div>
                        <div className="rounded mt-1 w-full">{plan.name}</div>
                    </div>
                ))}
            </div>

            {/* Right Content */}
            <div className="lg:w-3/4 p-8">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">Meal Plan</h3>
                    <button
                        className="px-4 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2"
                        onClick={toggleModal} // Open the modal when "Create New" is clicked
                    >
                        <CiCirclePlus className='text-2xl' /> Create New
                    </button>
                </div>
                <div className="mt-4">
                    <div className="text-sm font-medium">Description</div>
                    <p className='text-sm text-gray-500'>Search meal plan that you already create </p>
                    <div className="mt-2 relative">
                        <input
                            type="text"
                            onChange={(e) => handleSearch(e.target.value)} // Pass the value of the input to the handler
                            className="py-2 px-10 border border-gray-200 rounded w-full"
                            placeholder="Search meal plan that you already create"
                        />
                        <CiSearch className="absolute text-[#b8b8b8] top-2 text-2xl left-2" />
                    </div>
                </div>
                <div className='mt-4'>
                    {
                        fullData?.map((item, index) => (
                            <div key={index} className='flex capitalize justify-between p-2 rounded bg-slate-50 my-2'>
                                <h3>{item?.title}</h3>
                                <p>{item?.totalKeyPoints} key points</p>
                            </div>
                        ))
                    }
                    {
                        isLoading && <p className='text-center my-2'>Loading...</p>
                    }
                </div>
            </div>

            {/* Modal for Creating New Meal Plan */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[999999] bg-gray-600 bg-opacity-50 px-10 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg lg:w-1/3 w-full ">
                        <h3 className="text-2xl font-semibold mb-4">Create New Plan</h3>
                        <form onSubmit={handleCreateMealPlan}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="planName">Plan Name *</label>
                                <input
                                    type="text"
                                    id="planName"
                                    name="planName"
                                    value={newMealPlan.planName}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="keyPoints">Key Points *</label>
                                {newMealPlan.keyPoints.map((keyPoint, index) => (
                                    <div key={index} className="flex gap-2 mb-2">
                                        <input
                                            type="text"
                                            name="keyPoints"
                                            value={keyPoint}
                                            onChange={(e) => handleKeyPointChange(index, e.target.value)}
                                            className="border border-gray-300 rounded p-2 w-full"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeKeyPoint(index)}
                                            className="text-red-500"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={addKeyPoint}
                                    className="text-blue-500"
                                >
                                    Add Key Point
                                </button>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="description">Description *</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={newMealPlan.description}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                                    onClick={toggleModal} // Close the modal
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                >
                                    Add New
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Page;
