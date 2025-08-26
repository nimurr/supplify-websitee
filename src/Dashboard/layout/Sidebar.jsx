


// "use client";
// import { useState, useEffect } from 'react';
// import { Menu } from 'antd';
// import { MdFlightClass } from "react-icons/md";
// import { TbPrescription } from "react-icons/tb";
// import { GrUserManager } from "react-icons/gr";
// import { GiSwipeCard } from "react-icons/gi";
// import { SlUserFollowing } from "react-icons/sl";
// import { FaUserDoctor } from "react-icons/fa6";
// import { FaSkating } from "react-icons/fa";
// import { HiOutlineCurrencyDollar } from "react-icons/hi2";

// import { 
//   MenuFoldOutlined, 
//   MenuUnfoldOutlined 
// } from '@ant-design/icons';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function Sidebar() {
//   // userRole should be passed as a prop or fetched from auth context
//   const [collapsed, setCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//       setCollapsed(window.innerWidth < 768);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleCollapsed = () => setCollapsed(!collapsed);
// //  const userRole = 'user';
//  const userRole = 'specialist';
// //  const userRole = 'doctor';
//   // Define menu items per role
//   const routesByRole = {
//     user: [
//       {
//         key: "/dashboard/doctor",
//         icon: <FaUserDoctor />,
//         label: "Doctors",
//         path: "/dashboard/doctor",
//       },
//       {
//         key: "/dashboard/specialist",
//         icon: <SlUserFollowing />,
//         label: "Spesialist",
//         path: "/dashboard/specialist",
//       },
//       {
//         key: "/dashboard/workout-class",
//         icon: <MdFlightClass />,
//         label: "Workout Class",
//         path: "/dashboard/workout-class",
//       },
//       {
//         key: "/dashboard/protocol",
//         icon: <TbPrescription />,
//         label: "Protocol",
//         path: "/dashboard/protocol",
//       },
//       {
//         key: "/dashboard/suggest-specialist",
//         icon: <GrUserManager />
//         ,
//         label: "Specialist Suggestion",
//         path: "/dashboard/suggest-specialist",
//       },
//       {
//         key: "/dashboard/subscription",
//         icon: <GiSwipeCard />,
//         label: "Subscription",
//         path: "/dashboard/subscription",
//       },
//     ],
//     specialist: [
//       {
//         key: "/specialistDs/members",
//         icon: <SlUserFollowing />,
//         label: "Members",
//         path: "/specialistDs/members",
//       },
//       {
//         key: "/specialistDs/members",
//         icon: <SlUserFollowing />,
//         label: "Members",
//         path: "/specialistDs/members",
//       },
//       {
//         key: "/specialistDs/program",
//         icon: <FaSkating />,
//         label: "Program",
//         path: "/specialistDs/program",
//       },
//       {
//         key: "/specialistDs/earning",
//         icon: <HiOutlineCurrencyDollar />,
//         label: "Earning",
//         path: "/specialistDs/earning",
//       },
//       {
//         key: "/specialistDs/workoutClass",
//         icon: <MdFlightClass />,
//         label: "Workout Class",
//         path: "/specialistDs/workoutClass",
//       },
//     ],
//     doctor: [
//       {
//         key: "/dashboard/doctor",
//         icon: <FaUserDoctor />,
//         label: "Doctors",
//         path: "/dashboard/doctor",
//       },
//       {
//         key: "/dashboard/schedule",
//         icon: <MdFlightClass />, // Replace with correct icon
//         label: "Schedule",
//         path: "/dashboard/schedule",
//       },
//       {
//         key: "/dashboard/earning",
//         icon: <GiSwipeCard />, // Replace with correct icon
//         label: "Earning",
//         path: "/dashboard/earning",
//       },
//     ],
//   };

//   // Fallback to empty array if role not found
//   const menuItems = routesByRole[userRole] || [];

//   return (
//     <div className={`${collapsed ? 'w-20' : 'w-52'} transition-all duration-300 h-full shadow-md`}>
//       <div className="flex justify-between items-center p-4">
//         <div className={`text-xl flex font-bold text-center ${collapsed ? 'hidden' : 'block'}`}>
//           <Link href="/" className="flex items-center">
//             <img src='/images/logod.png' alt="App Logo" className="w-20 rounded-full" />  
//           </Link>
//           <img src='/images/logod1.png' alt="App Logo" className="w-20" /> 
//         </div>
//         <button onClick={toggleCollapsed} className="p-2 rounded-md hover:bg-gray-100">
//           {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//         </button>
//       </div>
//       <Menu
//         mode={collapsed ? "vertical" : "inline"}
//         selectedKeys={[pathname]}
//         inlineCollapsed={collapsed}
//       >
//         {menuItems.map(item => (
//           <Menu.Item key={item.key} icon={item.icon}>
//             <Link href={item.path}>{item.label}</Link>
//           </Menu.Item>
//         ))}
//       </Menu>
//     </div>
//   );
// }



"use client";
import { useState, useEffect } from "react";
import { Menu } from "antd";
import { MdFlightClass } from "react-icons/md";
import { TbPrescription } from "react-icons/tb";
import { GrUserManager } from "react-icons/gr";
import { GiSwipeCard } from "react-icons/gi";
import { SlUserFollowing } from "react-icons/sl";
import { FaUserDoctor } from "react-icons/fa6";
import { FaCalendarAlt, FaRegClock, FaSkating } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { AiFillEdit } from "react-icons/ai";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setCollapsed(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  // Example userRole - replace with actual auth/user role
  const userRole = 'user';
  // const userRole = "specialist";
  // const userRole = 'doctor';

  const routesByRole = {
    user: [
      {
        key: "/dashboard/doctor",
        icon: <FaUserDoctor />,
        label: "Doctors",
        path: "/dashboard/doctor",
      },
      {
        key: "/dashboard/specialist",
        icon: <SlUserFollowing />,
        label: "Spesialist",
        path: "/dashboard/specialist",
      },
      {
        key: "/dashboard/workout-class",
        icon: <MdFlightClass />,
        label: "Workout Class",
        path: "/dashboard/workout-class",
      },
      {
        key: "/dashboard/protocol",
        icon: <TbPrescription />,
        label: "Protocol",
        path: "/dashboard/protocol",
      },
      {
        key: "/dashboard/suggest-specialist",
        icon: <GrUserManager />,
        label: "Specialist Suggestion",
        path: "/dashboard/suggest-specialist",
      },
      {
        key: "/dashboard/subscription",
        icon: <GiSwipeCard />,
        label: "Subscription",
        path: "/dashboard/subscription",
      },
    ],
    specialist: [
      {
        key: "/specialistDs/members",
        icon: <SlUserFollowing />,
        label: "Members",
        path: "/specialistDs/members",
      },
      {
        key: "/specialistDs/program",
        icon: <FaSkating />,
        label: "Program",
        path: "/specialistDs/program",
      },
      {
        key: "/specialistDs/workoutClass",
        icon: <MdFlightClass />,
        label: "Workout Class",
        path: "/specialistDs/workoutClass",
      },
      {
        key: "/specialistDs/earning",
        icon: <HiOutlineCurrencyDollar />,
        label: "Earning",
        path: "/specialistDs/earning",
      },
      
    ],
    doctor: [
      {
        key: "/doctorDs/upcoming-schedule",
        icon: <FaRegClock />,
        label: "Upcoming Schedule",
        path: "/doctorDs/upcoming-schedule",
      },
      {
        key: "/doctorDs/schedule",
        icon: <FaCalendarAlt />, // Replace with correct icon
        label: "Schedule",
        path: "/doctorDs/schedule",
      },
      {
        key: "/doctorDs/doctor-protocol",
        icon: <TbPrescription />,
        label: "Protocol",
        path: "/doctorDs/doctor-protocol",
      },
      {
        key: "/doctorDs/create-plan",
        icon: <AiFillEdit />, // Replace with correct icon
        label: "Create Plan",
        path: "/doctorDs/create-plan",
      },
      {
        key: "/doctorDs/doctor-earning",
        icon: <GiSwipeCard />, // Replace with correct icon
        label: "Earning",
        path: "/doctorDs/doctor-earning",
      },
    ],
  };

  const menuItems = routesByRole[userRole] || [];

  // Find active menu key by matching pathname prefix for nested routes
  const activeMenuKey =
    menuItems.find((item) => pathname.startsWith(item.key))?.key || "";

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-52"
      } transition-all duration-300 h-full shadow-md`}
    >
      <div className="flex justify-between items-center p-4">
        <div
          className={`text-xl flex font-bold text-center ${
            collapsed ? "hidden" : "block"
          }`}
        >
          <Link href="/" className="flex items-center">
            <img
              src="/images/logod.png"
              alt="App Logo"
              className="w-12 rounded-full"
            />
          </Link>
          {/* <img src="/images/logod1.png" alt="App Logo" className="w-20" /> */}
        </div>
        <button
          onClick={toggleCollapsed}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </button>
      </div>
      <Menu
        mode={collapsed ? "vertical" : "inline"}
        selectedKeys={[activeMenuKey]}
        inlineCollapsed={collapsed}
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link href={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
