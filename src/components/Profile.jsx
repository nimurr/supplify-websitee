"use client";

import React from "react";
import { Button, Input, Image, Space } from "antd";
import { useRouter } from "next/navigation";

const fakeUser = {
  fullName: "John Doe",
  email: "john.doe@example.com",
  company: "Acme Corporation",
  phoneNumber: "+1 (555) 123-4567",
  image: {
    url: "/images/user4.jpg",
  },
  document: {
    name: "document",
    url: "/images/document.pdf", // Place your PDF in public/documents/sample.pdf or update this URL
  },
};

const Profile = () => {
  const router = useRouter();
  const user = fakeUser;

  const handleEditProfile = () => {
    router.push("/profile/editProfile");
  };

  const handleViewDocument = () => {
    if (user.document?.url) {
      window.open(user.document.url, "_blank");
    }
  };

  return (
    <div className="md:w-[70%] mx-auto md:py-24 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl mt-5 font-bold text-green-700 text-center md:mb-8">
        My Profile
      </h1>

      <div className="bg-white shadow-md py-10 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Space size={12}>
            <Image
              width={200}
              src={user.image?.url ? user.image.url : "/images/user4.jpg"}
              alt={`${user.fullName}'s profile picture`}
              placeholder={
                <Image preview={false} src="/images/user4.jpg" width={200} />
              }
            />
          </Space>

          <div className="flex-1 w-full">
            <h2 className="text-xl font-semibold text-gray-800">{user.fullName}</h2>
            <p className="text-gray-600">{user.email}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="text-sm text-gray-500 block mb-1">Company</label>
                <Input
                  value={user.company || "-"}
                  readOnly
                  className="bg-gray-100 border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500 block mb-1">Phone Number</label>
                <Input
                  value={user.phoneNumber || "-"}
                  readOnly
                  className="bg-gray-100 border-gray-300 rounded-md"
                />
              </div>

              {/* New Document Field */}
              <div>
                <label className="text-sm text-gray-500 block mb-1">Document (PDF)</label>
                <Input
                  value={user.document?.name || "-"}
                  readOnly
                  className="bg-gray-100 border-gray-300 rounded-md"
                />
                <Button
                  onClick={handleViewDocument}
                  type="link"
                  className="mt-1 p-0"
                  disabled={!user.document?.url}
                >
                  View Document
                </Button>
              </div>
            </div>
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

export default Profile;
