"use client";

import React, { useEffect, useState } from "react";
import { Button, Input, Image, Space } from "antd";
import { useRouter } from "next/navigation";
import url from "@/redux/api/baseUrl";
import { useGetUserProfileQuery } from "@/redux/fetures/user/getUsers";


const PatientProfile = () => {

    const router = useRouter();
    const handleEditProfile = () => {
        router.push("/profile/editProfile");
    };

    const [userData, setUserData] = useState({})
    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem("user")))
    }, [])
    const { data: user } = useGetUserProfileQuery(userData.id)
    const fullUser = user?.data?.attributes;
    
    console.log(fullUser);



    return (
        <div className="md:w-[70%] mx-auto md:py-24 px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl mt-5 font-bold text-green-700 text-center md:mb-8">
                My Profile
            </h1>

            <div className="bg-white border border-gray-200 py-10 rounded-lg p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <Space size={12}>
                        <Image
                            width={200}
                            src={url + fullUser?.profileImage?.imageUrl}
                            className="rounded-lg"
                        />
                    </Space>

                    <div className="flex-1 w-full">
                        <h2 className="text-xl font-semibold text-gray-800">{fullUser?.name}</h2>
                        <p className="text-gray-600">{fullUser?.email}</p>
                    </div>
                </div>

                <div className="text-right mt-6">
                    <Button
                        type="primary"
                        className="!bg-green-500 hover:!bg-green-400 text-white"
                        onClick={handleEditProfile}
                    >
                        Edit profile
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PatientProfile;
