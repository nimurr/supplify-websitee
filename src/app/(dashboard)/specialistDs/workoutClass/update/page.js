'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import {
  useGetSingleWorkoutClassQuery,
  useUpdateWorkoutClassMutation,
} from '@/redux/fetures/Specialist/workoutClass';

// ✅ Split logic into suspense-safe child
function UpdateWorkoutClassForm() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const { data: single, refetch } = useGetSingleWorkoutClassQuery(id, {
    skip: !id,
  });
  const [updateWorkoutClass] = useUpdateWorkoutClassMutation();

  const workoutClass = single?.data?.attributes;

  const [formData, setFormData] = useState({
    scheduleName: '',
    description: '',
    typeOfLink: '',
    sessionType: '',
    meetingLink: '',
    price: '',
  });

  // Populate form once data is loaded
  useEffect(() => {
    if (workoutClass) {
      setFormData({
        scheduleName: workoutClass.scheduleName || '',
        description: workoutClass.description || '',
        typeOfLink: workoutClass.typeOfLink || '',
        sessionType: workoutClass.sessionType || '',
        meetingLink: workoutClass.meetingLink || '',
        price: workoutClass.price || '',
      });
    }
  }, [workoutClass]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) return toast.error('Workout ID is missing!');

    try {
      const response = await updateWorkoutClass({
        submissionData: formData,
        id,
      }).unwrap();

      if (response?.code === 200) {
        toast.success(response?.message || 'Workout updated successfully!');
        refetch();
        window.location.href = '/specialistDs/workoutClass';
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 my-5 bg-gray-50 border-[#eee] border rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Update Workout Session
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Description Here ..."
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Type of Link */}
        <div>
          <label
            htmlFor="typeOfLink"
            className="block text-sm font-medium text-gray-700"
          >
            Type of Link
          </label>
          <select
            id="typeOfLink"
            name="typeOfLink"
            value={formData.typeOfLink}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select Link Type</option>
            <option value="googleMeet">Google Meet</option>
            <option value="zoom">Zoom</option>
            <option value="teams">Microsoft Teams</option>
            <option value="skype">Skype</option>
          </select>
        </div>

        {/* Session Type */}
        <div>
          <label
            htmlFor="sessionType"
            className="block text-sm font-medium text-gray-700"
          >
            Session Type
          </label>
          <select
            id="sessionType"
            name="sessionType"
            value={formData.sessionType}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select Session Type</option>
            <option value="private">Private</option>
            <option value="group">Group</option>
          </select>
        </div>

        {/* Meeting Link */}
        <div>
          <label
            htmlFor="meetingLink"
            className="block text-sm font-medium text-gray-700"
          >
            Meeting Link
          </label>
          <input
            type="url"
            id="meetingLink"
            name="meetingLink"
            placeholder="Meeting Link Here ..."
            value={formData.meetingLink}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            placeholder="Price $"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            required
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

// ✅ Wrap in Suspense to avoid prerender errors
export default function Page() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <UpdateWorkoutClassForm />
    </Suspense>
  );
}
