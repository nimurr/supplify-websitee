
"use client";
import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { MdFlightClass } from "react-icons/md";
import { TbPrescription } from "react-icons/tb";
import { GrUserManager } from "react-icons/gr";
import { GiSwipeCard } from "react-icons/gi";
import { SlUserFollowing } from "react-icons/sl";


import { FaUserDoctor } from "react-icons/fa6";
import { 
  HomeOutlined, 
  UserOutlined, 
  AppstoreAddOutlined, 
  WalletOutlined, 
  FileSearchOutlined, 
  MenuFoldOutlined, 
  MenuUnfoldOutlined 
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
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
      icon: <GrUserManager />
      ,
      label: "Specialist Suggestion",
      path: "/dashboard/suggest-specialist",
    },
    {
      key: "/dashboard/subscription",
      icon: <GiSwipeCard />,
      label: "Subscription",
      path: "/dashboard/subscription",
    },
  ];

  const logo = "/images/logo.png"; // Path to your logo image

  return (
    <div className={`${collapsed ? 'w-20' : 'w-52'} transition-all duration-300 h-full shadow-md`}>
      <div className="flex justify-between items-center p-4">
        <div className={`text-xl flex font-bold text-center ${collapsed ? 'hidden' : 'block'}`}>
          <Link href="/" className="flex items-center">
            <img src='/images/logod.png' alt="App Logo" className="w-20 rounded-full" />  
          </Link>
          <img src='/images/logod1.png' alt="App Logo" className="w-20" /> 
        
        </div>
        <button 
          onClick={toggleCollapsed} 
          className="p-2 rounded-md hover:bg-gray-100"
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </button>
      </div>
      <Menu 
        mode={collapsed ? "vertical" : "inline"}  // Switch mode based on collapsed state
        selectedKeys={[pathname]}
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
