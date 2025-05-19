


 

// "use client";

// import React, { useState } from "react";
// import { Avatar, Button, Tag, List, Modal, Image } from "antd";
// import {
//   CheckCircleOutlined,
//   PlayCircleOutlined,
//   CloseOutlined
// } from "@ant-design/icons";

// const user = {
//   name: "Sakib Ahmed",
//   location: "New York, America",
//   roles: ["Protocol Name", "Trainer", "Body Trainer", "Protocol Name"],
//   description:
//     "Lorem ipsum dolor sit amet consectetur. Massa risus eget justo vel urna sapien posuere. Mauris magna eratest vestibulum cum egestas etiam pulvinar orci.",
//   programCount: 10,
//   price: "$199",
//   duration: "5 month",
//   avatar: "/images/trainer.png", // Replace with your actual avatar path
// };

// const sessions = [
//   {
//     id: 1,
//     title: "Push-ups",
//     duration: "30 min/day",
//     status: "complete",
//     tokens: 1,
//     videoUrl: "/images/prac.mp4", // Replace with actual video URLs
//   },
//   {
//     id: 2,
//     title: "Push-ups",
//     duration: "30 min/day",
//     status: "active",
//     remainingDays: 3,
//     videoUrl: "/images/prac.mp4",
//   },
//   {
//     id: 3,
//     title: "Push-ups",
//     unlockAfterDays: 3,
//     status: "locked",
//     videoUrl: "https://www.example.com/video3.mp4",
//   },
//   {
//     id: 4,
//     title: "Push-ups",
//     unlockAfterDays: 3,
//     status: "locked",
//     videoUrl: "https://www.example.com/video4.mp4",
//   },
//   {
//     id: 5,
//     title: "Push-ups",
//     unlockAfterDays: 3,
//     status: "locked",
//     videoUrl: "https://www.example.com/video5.mp4",
//   },
//   {
//     id: 6,
//     title: "Push-ups",
//     unlockAfterDays: 3,
//     status: "locked",
//     videoUrl: "https://www.example.com/video6.mp4",
//   },
// ];

// export default function SpecialistProgramDetails() {
//   const [selectedId, setSelectedId] = useState(1);
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   const selectedSession = sessions.find((session) => session.id === selectedId);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="  bg-gray-50 p-4 md:p-8">
//       <div className="grid md:grid-cols-4 gap-2">
    
//         <div className=" bg-white rounded-lg shadow p-6">
//         <Image
//                     src={user.avatar} alt={user.name} 
//                       layout="fill"
//                       objectFit="cover"
//                     />
         
//           <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
//           <p className="text-gray-500 mt-1">{user.location}</p>

//           <div className="grid md:grid-cols-2 gap-2 ">
//             {user.roles.map((role, i) => (
//                 <div className="">

//               <Tag
//                 key={i} 
//                 className="text-black text-xs font-medium rounded-lg py-1 border border-gray-300"
//               >
//                 {role}
//               </Tag>
//                 </div>
//             ))}
//           </div>

//           <p className="text-gray-600 text-sm text-center mb-6">{user.description}</p>

//           <div className="w-full space-y-3 text-sm font-semibold text-gray-800">
//             <div className="flex justify-between border-b border-gray-200 pb-1">
//               <span>Programs</span>
//               <span>{user.programCount}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1">
//               <span>Price</span>
//               <span>{user.price}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Duration</span>
//               <span>{user.duration}</span>
//             </div>
//           </div>
//         </div>

      
//         <div className=" md:col-span-2 bg-white rounded-lg shadow px-4">
//           <div className="flex justify-between items-center mb-5">
//             <h2 className="font-semibold text-xl">Gain chest</h2>
//             <div className="text-xs text-gray-500">
//               Total Session: {sessions.length} | Complete Session:{" "}
//               {sessions.filter((s) => s.status === "complete").length}
//             </div>
//           </div>

//           <List
//             dataSource={sessions}
//             itemLayout="horizontal"
//             split={false}
//             className="overflow-auto"
//             renderItem={(item) => {
//               const isSelected = item.id === selectedId;
//               const baseBorder = "border rounded-lg p-3 cursor-pointer flex items-center";
//               const borderColor = isSelected
//                 ? "border-red-300 bg-red-50"
//                 : "border-gray-200 hover:border-red-300";
//               return (
//                 <List.Item
//                   key={item.id}
//                   onClick={() => setSelectedId(item.id)}
//                   className={`${baseBorder} ${borderColor} mb-3`}
//                 >
//                   <List.Item.Meta
//    avatar={
//     <div className="relative w-16 h-16 rounded-md overflow-hidden ml-4">
//       <video 
//         className="w-full h-full object-cover"
//         src={item.videoUrl}
//         muted
//         poster="/images/vid.png"  // <-- Thumbnail image here
//         preload="metadata"
//         controls={false}
//         // Add controls={false} to prevent showing controls if you want
//       >
//         Your browser does not support the video tag.
//       </video>
//       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
//         <PlayCircleOutlined className="text-white text-xl" />
//       </div>
//     </div>
//   }  />

//                   <div className="ml-auto text-xs mr-4">
//                     {item.status === "complete" && (
//                       <Tag
//                         icon={<CheckCircleOutlined />}
//                         color="success"
//                         className="font-semibold"
//                       >
//                         Complete
//                       </Tag>
//                     )}
//                     {item.status === "active" && (
//                       <Button
//                         type="primary"
//                         danger
//                         icon={<PlayCircleOutlined />}
//                         size="small"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setSelectedId(item.id);
//                           showModal();
//                         }}
//                       >
//                         Play
//                       </Button>
//                     )}
//                     {item.status === "locked" && (
//                       <Button
//                         type="default"
//                         icon={<PlayCircleOutlined />}
//                         size="small"
//                         disabled
//                       >
//                         Play
//                       </Button>
//                     )}
//                   </div>
//                 </List.Item>
//               );
//             }}
//           />
//         </div>
        

//        {/* //// right panel */}
//         <div className=" bg-white rounded-lg shadow px-6">
//           <h3 className="font-semibold text-lg mb-5">Details Session {selectedSession?.id}</h3>

//           <div className="relative mb-5">
            
//             <img
//               src="/images/vid.png" // Replace with your image path
//               alt={selectedSession?.title}
//               className="rounded-md w-full h-48 object-cover"
//             />
//             {selectedSession?.status === "active" && (
//               <Button
//                 type="primary" 
//                 danger
//                 shape="circle" 
//                 icon={<PlayCircleOutlined />} 
//                 size="large"
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                 onClick={showModal}
//               />
//             )}
//           </div>

//           <div className="mb-4">
//             <h4 className="font-semibold">Session {selectedSession?.id}</h4>
//             <p className="font-semibold">{selectedSession?.title}</p>
//           </div>

//           <div className="mb-4">
//             <h4 className="font-semibold">Duration</h4>
//             <p>{selectedSession?.duration || "30 minute/day"}</p>
//           </div>

//           <div className="mb-4">
//             <h4 className="font-semibold">Benefits</h4>
//             <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
//               <li>Strengthens the Chest</li>
//               <li>Improves Upper Body Strength</li>
//               <li>Increases Muscle Endurance</li>
//               <li>Enhances Posture</li>
//               <li>Boosts Metabolism</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-2">Got {selectedSession?.tokens || 0} Tokens</h4>
//             <Button
//               type="default"
//               icon={<CheckCircleOutlined />}
//               className="border border-green-300 text-green-600 rounded-md w-full"
//             >
//               Complete
//             </Button>
//           </div>
//         </div>

//       </div>

 



//       {/* Video Modal */}
//       <Modal
//         title={`Session ${selectedSession?.id} - ${selectedSession?.title}`}
//         open={isModalOpen}
//         onCancel={handleCancel}
//         footer={null}
//         width={1200}
//         closeIcon={<CloseOutlined />}
//         centered
//       >
//         <div className="aspect-video bg-black rounded-lg w-full overflow-hidden">
//           {/* Video Player */}
//           <video 
//             controls
//             className="w-full h-full"
//             autoPlay
//           >
//             <source src={selectedSession?.videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div className="mt-4">
//           <h4 className="font-semibold text-lg mb-2">{selectedSession?.title}</h4>
//           <p className="text-gray-700">
//             Follow along with this {selectedSession?.duration} workout session to improve your chest strength and definition.
//           </p>
//         </div>
//       </Modal>
//     </div>
//   );
// }


"use client";

import React, { useState, useRef } from "react";
import { Avatar, Button, Tag, List, Modal, Image } from "antd";
import {
  CheckCircleOutlined,
  PlayCircleOutlined,
  CloseOutlined,
  LeftOutlined
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

const user = {
  name: "Sakib Ahmed",
  location: "New York, America",
  roles: ["Protocol Name", "Trainer", "Body Trainer", "Protocol Name"],
  description:
    "Lorem ipsum dolor sit amet consectetur. Massa risus eget justo vel urna sapien posuere. Mauris magna eratest vestibulum cum egestas etiam pulvinar orci.",
  programCount: 10,
  price: "$199",
  duration: "5 month",
  avatar: "/images/trainer.png", // Replace with your actual avatar path
};

const sessions = [
  {
    id: 1,
    title: "Push-ups",
    duration: "30 min/day",
    status: "complete",
    tokens: 1,
    videoUrl: "/images/prac.mp4", // Replace with actual video URLs
  },
  {
    id: 2,
    title: "Push-ups",
    duration: "30 min/day",
    status: "active",
    remainingDays: 3,
    tokens: 1,
    videoUrl: "/images/prac.mp4",
  },
  {
    id: 3,
    title: "Push-ups",
    unlockAfterDays: 3,
    status: "locked",
    tokens: 1,
    videoUrl: "https://www.example.com/video3.mp4",
  },
  {
    id: 4,
    title: "Push-ups",
    unlockAfterDays: 3,
    status: "locked",
    tokens: 1,
    videoUrl: "https://www.example.com/video4.mp4",
  },
  {
    id: 5,
    title: "Push-ups",
    unlockAfterDays: 3,
    status: "locked",
    tokens: 1,
    videoUrl: "https://www.example.com/video5.mp4",
  },
  {
    id: 6,
    title: "Push-ups",
    unlockAfterDays: 3,
    status: "locked",
    tokens: 1,
    videoUrl: "https://www.example.com/video6.mp4",
  },
];

export default function SpecialistProgramDetails() {
    const router = useRouter()
  const [selectedId, setSelectedId] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCongratsModalOpen, setIsCongratsModalOpen] = useState(false);
  const videoRef = useRef(null);
  
  const selectedSession = sessions.find((session) => session.id === selectedId);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleVideoEnded = () => {
    // Close the video modal and show the congratulations modal
    setIsModalOpen(false);
    setIsCongratsModalOpen(true);
    
    // Optional: Mark the session as complete if needed
    // This would require state management for the sessions array
  };

  const handleCongratsClose = () => {
    setIsCongratsModalOpen(false);
  };

  return (
    <div className="bg-gray-50 p-4 md:p-8">
         <h1  className='text-2xl font-semibold flex items-center gap-2 my-12'>
        <LeftOutlined onClick={() => router.back()} className=' cursor-pointer' />
        View Full Program Session
        </h1>
      <div className="grid md:grid-cols-4 gap-2">
    
        <div className="bg-white rounded-lg shadow p-6">
          <Image
            src={user.avatar} 
            alt={user.name} 
            layout="fill"
            objectFit="cover"
          />
         
          <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
          <p className="text-gray-500 mt-1">{user.location}</p>

          <div className="grid md:grid-cols-2 gap-2">
            {user.roles.map((role, i) => (
                <div key={i} className="">
                  <Tag
                    className="text-black text-xs font-medium rounded-lg py-1 border border-gray-300"
                  >
                    {role}
                  </Tag>
                </div>
            ))}
          </div>

          <p className="text-gray-600 text-sm text-center mb-6">{user.description}</p>

          <div className="w-full space-y-3 text-sm font-semibold text-gray-800">
            <div className="flex justify-between border-b border-gray-200 pb-1">
              <span>Programs</span>
              <span>{user.programCount}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-1">
              <span>Price</span>
              <span>{user.price}</span>
            </div>
            <div className="flex justify-between">
              <span>Duration</span>
              <span>{user.duration}</span>
            </div>
          </div>
        </div>

      
        <div className="md:col-span-2 bg-white rounded-lg shadow px-4">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-semibold text-xl">Gain chest</h2>
            <div className="text-xs text-gray-500">
              Total Session: {sessions.length} | Complete Session:{" "}
              {sessions.filter((s) => s.status === "complete").length}
            </div>
          </div>

          <List
            dataSource={sessions}
            itemLayout="horizontal"
            split={false}
            className="overflow-auto"
            renderItem={(item) => {
              const isSelected = item.id === selectedId;
              const baseBorder = "border rounded-lg p-3 cursor-pointer flex items-center";
              const borderColor = isSelected
                ? "border-red-300 bg-red-50"
                : "border-gray-200 hover:border-red-300";
              return (
                <List.Item
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`${baseBorder} ${borderColor} mb-3`}
                >
                  <List.Item.Meta
                    avatar={
                      <div className="relative w-16 h-16 rounded-md overflow-hidden ml-4">
                        <video 
                          className="w-full h-full object-cover"
                          src={item.videoUrl}
                          muted
                          poster="/images/vid.png"
                          preload="metadata"
                          controls={false}
                        >
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                          <PlayCircleOutlined className="text-white text-xl" />
                        </div>
                      </div>
                    }
                  />

                  <div className="ml-auto text-xs mr-4">
                    {item.status === "complete" && (
                      <Tag
                        icon={<CheckCircleOutlined />}
                        color="success"
                        className="font-semibold"
                      >
                        Complete
                      </Tag>
                    )}
                    {item.status === "active" && (
                      <Button
                        type="primary"
                        danger
                        icon={<PlayCircleOutlined />}
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedId(item.id);
                          showModal();
                        }}
                      >
                        Play
                      </Button>
                    )}
                    {item.status === "locked" && (
                      <Button
                        type="default"
                        icon={<PlayCircleOutlined />}
                        size="small"
                        disabled
                      >
                        Play
                      </Button>
                    )}
                  </div>
                </List.Item>
              );
            }}
          />
        </div>
        

       {/* //// right panel */}
        <div className="bg-white rounded-lg shadow px-6">
          <h3 className="font-semibold text-lg mb-5">Details Session {selectedSession?.id}</h3>

          <div className="relative mb-5">
            
            <img
              src="/images/vid.png" // Replace with your image path
              alt={selectedSession?.title}
              className="rounded-md w-full h-48 object-cover"
            />
            {selectedSession?.status === "active" && (
              <Button
                type="primary" 
                danger
                shape="circle" 
                icon={<PlayCircleOutlined />} 
                size="large"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={showModal}
              />
            )}
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Session {selectedSession?.id}</h4>
            <p className="font-semibold">{selectedSession?.title}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Duration</h4>
            <p>{selectedSession?.duration || "30 minute/day"}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Benefits</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Strengthens the Chest</li>
              <li>Improves Upper Body Strength</li>
              <li>Increases Muscle Endurance</li>
              <li>Enhances Posture</li>
              <li>Boosts Metabolism</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Got {selectedSession?.tokens || 0} Tokens</h4>
            <Button
              type="default"
              icon={<CheckCircleOutlined />}
              className="border border-green-300 text-green-600 rounded-md w-full"
            >
              Complete
            </Button>
          </div>
        </div>

      </div>

      {/* Video Modal */}
      <Modal
        title={`Session ${selectedSession?.id} - ${selectedSession?.title}`}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={1200}
        closeIcon={<CloseOutlined />}
        centered
      >
        <div className="aspect-video bg-black rounded-lg w-full overflow-hidden">
          {/* Video Player with onEnded event */}
          <video 
            ref={videoRef}
            controls
            className="w-full h-full"
            autoPlay
            onEnded={handleVideoEnded}
          >
            <source src={selectedSession?.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-lg mb-2">{selectedSession?.title}</h4>
          <p className="text-gray-700">
            Follow along with this {selectedSession?.duration} workout session to improve your chest strength and definition.
          </p>
        </div>
      </Modal>

      {/* Congratulations Modal */}
      <Modal
        open={isCongratsModalOpen}
        onCancel={handleCongratsClose}
        footer={[
          <Button key="close" type="primary" onClick={handleCongratsClose}>
            Continue
          </Button>,
        ]}
        width={400}
        centered
        closable={false}
      >
        <div className="text-center py-6">
          {/* Confetti Animation */}
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24">
              <img 
                src="/images/cong.png" 
                alt="Confetti celebration" 
                className="w-full h-full"
              />
            </div>
          </div>
          
          <h3 className="font-bold text-xl mb-2">Congratulation</h3>
          <p className="text-lg font-medium">You Got {selectedSession?.tokens || 1} Token</p>
          
          <div className="mt-6">
            <p className="text-gray-600 text-sm">
              Great job completing your session! Keep up the good work.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}