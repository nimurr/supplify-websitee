"use client";

import { Form, Input, Button } from "antd";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import BackHeader from "../customComponent/BackHeader";
import CustomButton from "../customComponent/CustomButton";
 
export default function Login() {
  const router = useRouter()
 

  const [form] = Form.useForm();

  const onFinish = (values) => {
 
  console.log(values)
    // You can either pass data through query (not secure) or use state/localStorage
    // Here’s a basic example using route
 
  
    router.push(`/`);
  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-black via-black to-[#2e0a0a] px-6">
      {/* Left Side with Logo */}
      <div className="hidden md:flex items-center justify-center mr-12 ">
        <Link href={'/'}>
        
        <img
          src="/images/logo2.png"
          alt="Suplify Logo"
          className=""
        />
        </Link>
      </div>

      {/* Right Side Form */}
      <div className="md:flex md:flex-col md:p-10 md:max-w-[600px] w-full">
        <div className="bg-white rounded-xl shadow-lg p-10 w-full"> 
          <BackHeader
          title={"Login Now"}
          />

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark="optional"
            autoComplete="off"
            className="max-w-lg mx-auto"
          >
           
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="example@gmail.com" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please type password" }]}
            >
              <Input.Password placeholder="Type password" />
            </Form.Item> 
            
            {/* <Link href="/auth/forgotPassword" className="  text-gray-500 flex justify-end mb-2 hover:text-blue-600">
                Forgot password?
              </Link> */}

            <Form.Item>
            <CustomButton text="Login" />
            </Form.Item>
            <div className=" text-center">
            
            <h1 className=''>
           Don’t have an Account?  
             <Link href="/auth/selectRole">
               <span className="text-blue-500 hover:underline"> Create Account</span>               </Link>
           </h1>
          </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
