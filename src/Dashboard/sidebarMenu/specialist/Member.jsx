// "use client"

// // pages/specialist-suggest.js
// import React from "react";
// import { Table, Avatar } from "antd";
// import Link from "next/link";

// const data = [
//   {
//     id: "01",
//     specialistName: "Fuad Ahmed",
//     specialistImage: "/images/user4.jpg", // replace with actual path or URL
//     doctorName: "Sakib Ahmed",
//     doctorImage: "/images/doctor.png",
//     lastUpdate: "5 Jan, 2025",
//     recommendation: 10,
//     plan: 5,
//   },
//   {
//     id: "02",
//     specialistName: "Fuad Ahmed",
//     specialistImage: "/images/user4.jpg",
//     doctorName: "Sakib Ahmed",
//     doctorImage: "/images/doctor.png",
//     lastUpdate: "5 Jan, 2025",
//     recommendation: 2,
//     plan: 2,
//   },
//   {
//     id: "03",
//     specialistName: "Fuad Ahmed",
//     specialistImage: "/images/user4.jpg",
//     doctorName: "Sakib Ahmed",
//     doctorImage: "/images/doctor.png",
//     lastUpdate: "5 Jan, 2025",
//     recommendation: 1,
//     plan: 1,
//   },
//   {
//     id: "04",
//     specialistName: "Fuad Ahmed",
//     specialistImage: "/images/user4.jpg",
//     doctorName: "Sakib Ahmed",
//     doctorImage: "/images/doctor.png",
//     lastUpdate: "5 Jan, 2025",
//     recommendation: 0,
//     plan: 0,
//   },
// ];

// const Members = () => {
//   const columns = [
//     {
//       title: "Id",
//       dataIndex: "id",
//       key: "id",
//       width: 60,
//       render: (text) => <span className="font-semibold">{text}</span>,
//     },
//     {
//       title: "Member Name",
//       dataIndex: "mebmerName",
//       key: "specialistName",
//       render: (_, record) => (
//         <div className="flex items-center gap-3">
//           <Avatar size={32} src={record.specialistImage} />
//           <span className="font-semibold">{record.specialistName}</span>
//         </div>
//       ),
//     },
//     {
//       title: "Connected Doctor",
//       dataIndex: "doctorName",
//       key: "doctorName",
//       render: (_, record) => (
//         <div className="flex items-center gap-3">
//           <Avatar size={32} src={record.doctorImage} />
//           <span>{record.doctorName}</span>
//         </div>
//       ),
//     },
//     {
//       title: "Connect Date",
//       dataIndex: "lastUpdate",
//       key: "lastUpdate",
//     },
//     {
//       title: "Recommendation",
//       dataIndex: "recommendation",
//       key: "recommendation",
//       align: "center",
//     },
   
//     {
//       title: "Action",
//       key: "action",
//       render: () => (
//         <Link href="/dashboard/suggest-specialist/details" className="text-blue-600 hover:underline">
//           View
//         </Link>
//       ),
//       align: "center",
//     },
//   ];

//   return (
//     <div>

//         <h1 className="text-2xl font-semibold">Suggest SpeciaList</h1>
//     <div className="p-6 bg-white rounded-lg shadow-md mx-auto mt-10">
//       <Table
//         columns={columns}
//         dataSource={data}
//         rowKey="id"
//         pagination={false}
//         bordered={false}
//         className="ant-table-striped"
//       />
//     </div>
//     </div>
//   );
// };

// export default Members;

 "use client"

import React from "react";
import { Table, Avatar } from "antd";
import Link from "next/link";

const data = [
  {
    id: "01",
    specialistName: "Fuad Ahmed",
    specialistImage: "/images/user4.jpg",
    doctorName: "Sakib Ahmed",
    doctorImage: "/images/doctor.png",
    lastUpdate: "5 Jan, 2025",
    recommendation: 10,
    plan: 5,
  },
  {
    id: "02",
    specialistName: "Fuad Ahmed",
    specialistImage: "/images/user4.jpg",
    doctorName: "Sakib Ahmed",
    doctorImage: "/images/doctor.png",
    lastUpdate: "5 Jan, 2025",
    recommendation: 2,
    plan: 2,
  },
  {
    id: "03",
    specialistName: "Fuad Ahmed",
    specialistImage: "/images/user4.jpg",
    doctorName: "Sakib Ahmed",
    doctorImage: "/images/doctor.png",
    lastUpdate: "5 Jan, 2025",
    recommendation: 1,
    plan: 1,
  },
  {
    id: "04",
    specialistName: "Fuad Ahmed",
    specialistImage: "/images/user4.jpg",
    doctorName: "Sakib Ahmed",
    doctorImage: "/images/doctor.png",
    lastUpdate: "5 Jan, 2025",
    recommendation: 0,
    plan: 0,
  },
];

const Members = () => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: (text) => <span className="font-semibold">{text}</span>,
    },
    {
      title: "Member Name",
      dataIndex: "specialistName",
      key: "specialistName",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <Avatar size={32} src={record.specialistImage} />
          <span className="font-semibold">{record.specialistName}</span>
        </div>
      ),
    },
    {
      title: "Connected Doctor",
      dataIndex: "doctorName",
      key: "doctorName",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <Avatar size={32} src={record.doctorImage} />
          <span>{record.doctorName}</span>
        </div>
      ),
    },
    {
      title: "Connect Date",
      dataIndex: "lastUpdate",
      key: "lastUpdate",
    },
    {
      title: "Recommendation",
      dataIndex: "recommendation",
      key: "recommendation",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Link href="/specialistDs/members/view-member" className="text-blue-600 hover:underline">
          View
        </Link>
      ),
      align: "center",
    },
  ];

  return (
    <div className="max-w-full px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold">Suggest Specialist</h1>
      <div className="p-6 bg-white rounded-lg shadow-md mx-auto mt-10 overflow-x-auto">
        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          pagination={false}
          bordered={false}
          className="ant-table-striped"
          scroll={{ x: 900 }} // horizontal scroll on small screens
        />
      </div>
    </div>
  );
};

export default Members;
