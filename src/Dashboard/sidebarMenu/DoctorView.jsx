// "use client"

// import CustomButton from '@/components/customComponent/customButton';
// import { LeftOutlined } from '@ant-design/icons';
// import { Card, Button, Radio, Row, Col, Divider,Image } from 'antd';
// import { BackpackIcon } from 'lucide-react';
// import { useRouter } from 'next/navigation';
 

// const schedules = [
//   {
//     id: 1,
//     title: 'Schedule 1',
//     date: '12-Jan-2025, Saturday',
//     startTime: '10:00 pm',
//     endTime: '11:00 pm',
//     price: 180,
//     oldPrice: 200,
//     description:
//       'This description is very important for a user, they can Acknowledge the full program on this schedule. This description is very important for a user.',
//   },
//   {
//     id: 1,
//     title: 'Schedule 2',
//     date: '12-Jan-2025, Saturday',
//     startTime: '10:00 pm',
//     endTime: '11:00 pm',
//     price: 180,
//     oldPrice: 200,
//     description:
//       'This description is very important for a user, they can Acknowledge the full program on this schedule. This description is very important for a user.',
//   },
//   {
//     id: 1,
//     title: 'Schedule 3',
//     date: '12-Jan-2025, Saturday',
//     startTime: '10:00 pm',
//     endTime: '11:00 pm',
//     price: 180,
//     oldPrice: 200,
//     description:
//       'This description is very important for a user, they can Acknowledge the full program on this schedule. This description is very important for a user.',
//   },
//   {
//     id: 1,
//     title: 'Schedule 4',
//     date: '12-Jan-2025, Saturday',
//     startTime: '10:00 pm',
//     endTime: '11:00 pm',
//     price: 180,
//     oldPrice: 200,
//     description:
//       'This description is very important for a user, they can Acknowledge the full program on this schedule. This description is very important for a user.',
//   },
//   {
//     id: 1,
//     title: 'Schedule 5',
//     date: '12-Jan-2025, Saturday',
//     startTime: '10:00 pm',
//     endTime: '11:00 pm',
//     price: 180,
//     oldPrice: 200,
//     description:
//       'This description is very important for a user, they can Acknowledge the full program on this schedule. This description is very important for a user.',
//   },
//   // Repeat or add more schedules if needed...
// ];


// export default function DoctorFullView({doctorId}) {
// const router = useRouter()
// console.log(doctorId)
// const back = () => {
//     router.push('/dashboard/doctor')
// }
//   return (
//     <div>
      //  <h1  className='text-2xl font-semibold flex items-center gap-2 my-12'>
      //   <LeftOutlined onClick={() => back()} className=' cursor-pointer' />
      //   View Full Doctor
      //   </h1>

//     <div className="md:flex gap-10">
    
//       {/* Left Panel - Doctor Profile */}
//       <div className="">
//         <Card
//           className="rounded-lg shadow-lg mr-5"
//           cover={
//             <div className="rounded-t-lg overflow-hidden">
//               <Image
//                 src="/images/doctor.png"
//                 alt="Sakib Ahmed"
//                 layout="fill"
//                 objectFit="cover"
                
//               />
//             </div>
//           }
//         >
//           <h2 className="text-xl font-bold mb-1">Sakib Ahmed</h2>
//           <p className="text-gray-600 mb-1">Your Doctor</p>
//           <Divider />
//           <p className="text-gray-700 text-sm mb-4">
//             Lorem ipsum dolor sit amet consectetur. Massa risus eget justo eu
//             donec sapien posuere. Massa magna egestas vestibulum cum egestas
//             etiam pulvinar dolor.
//           </p>
//           <Button
//            style={{
//             backgroundColor: "#CC2124",
//             borderColor: "#ef4444",
//             color: "#FFFF",
//           }}
//             type="primary"
//             className=" mb-4 w-full rounded-md"
//           >
//             Book Now
//           </Button>
//           <Button
         
//             type="default"
//             className="border-red-700 text-red-700 w-full rounded-md"
//           >
//             Message
//           </Button>
//         </Card>
//       </div>

//       {/* Right Panel - Schedule Grid */}
//       <div className="">
//         <div className="flex justify-between mb-6">
//           <h3 className="font-semibold text-gray-700 ml-10">Available Schedule</h3>
//           <h3 className="font-semibold text-gray-700">Total Schedule : 10</h3>
//         </div>

//         <Row gutter={[24, 24]}>
//           {schedules.map((_, idx) => {
//               const schedule = schedules[0]; // Using same schedule as example
//               return (
//                 <Col key={idx} xs={24} sm={12} md={8} lg={8}>
//                   <Card className="rounded-lg shadow-md" size="small" bordered={false}>
//                     <h4 className="font-semibold mb-1">{schedule.title}</h4>
//                     <p className="text-gray-500 mb-1">{schedule.date}</p>

//                     <div className="mb-2 text-sm text-gray-600">
//                       <Radio.Group>
//                         <Radio value="start" disabled>
//                           Start Time: {schedule.startTime}
//                         </Radio>
//                         <Radio value="end" disabled className="ml-3">
//                           End Time: {schedule.endTime}
//                         </Radio>
//                       </Radio.Group>
//                     </div>

//                     <p className="text-gray-700 text-xs mb-4">{schedule.description}</p>

//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-red-600 font-semibold text-lg">
//                         ${schedule.price}
//                       </span>
//                       <span className="line-through text-gray-400 text-sm">
//                         ${schedule.oldPrice}
//                       </span>
//                     </div>

//                     <CustomButton 
                  
//                   text="Book Now"
//                   className="p-2"
//                   />
//                   </Card>
//                 </Col>
//               );
//             })}
//         </Row>
//       </div>


//     </div>
//     </div>
//   );
// }

"use client"
import CustomButton from '@/components/customComponent/customButton';
import { LeftOutlined } from '@ant-design/icons';
import { Button, Image } from 'antd';
import { Calendar, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AppointmentScheduler() {
  // Sample data for schedules
  const router= useRouter()
  const schedules = [
    {
      id: 1,
      date: '12-Jan-2025, Saturday',
      startTime: '10:00 am',
      endTime: '11:00 am',
      price: 100,
      isSpecial: false,
      isFeatured: false
    },
    {
      id: 2,
      date: '20-Jan-2025, Saturday',
      startTime: '10:00 am',
      endTime: '11:00 am',
      price: 100,
      isSpecial: false,
      isFeatured: false
    },
    {
      id: 3,
      date: '10-Feb-2025, Saturday',
      startTime: '10:00 am',
      endTime: '11:00 am',
      price: 100,
      isSpecial: false,
      isFeatured: false
    },
    {
      id: 4,
      date: '12-Jan-2025, Saturday',
      startTime: '12:00 pm',
      endTime: '01:00 pm',
      price: 100,
      isSpecial: false,
      isFeatured: false
    },
    {
      id: 5,
      date: '25-Jan-2025, Saturday',
      startTime: '10:00 am',
      endTime: '11:00 am',
      price: 100,
      isSpecial: true,
      isFeatured: false
    },
    {
      id: 6,
      date: '12-Apr-2025, Saturday',
      startTime: '10:00 am',
      endTime: '11:00 am',
      price: 100,
      isSpecial: false,
      isFeatured: true
    },
    {
      id: 6,
      date: '12-Apr-2025, Saturday',
      startTime: '10:00 am',
      endTime: '11:00 am',
      price: 100,
      isSpecial: false,
      isFeatured: true
    }
  ];
  const back = () => {
    router.push('/dashboard/doctor')
}
  return (
    <div>
   <h1  className='text-2xl font-semibold flex items-center gap-2 my-12'>
        <LeftOutlined onClick={() => back()} className=' cursor-pointer' />
        View Full Doctor
        </h1>
    <div className="bg-gray-50 min-h-screen md:flex gap-4 p-6">
      {/* Header Section */}
      <div className=" md:w-[35%] mb-8">
      <div className="rounded-lg shadow-md bg-white border border-gray-200 overflow-hidden font-sans">

      <div className="relative w-full h-60">
  <Image
    src="/images/doc.jpg"
    alt="doctor"
    layout="fill"
    objectFit="cover"
    className="rounded-t-lg" // optional styling
  />
</div>

      <div className="p-4">
        <h3 className="text-center font-semibold text-lg mb-1">Sakib Ahmed</h3>
        <p className="text-center text-sm text-gray-500 mb-4">New York, America</p>
        <hr className="border-gray-200 mb-4" />
        <h4 className="font-semibold text-sm mb-2">Description</h4>
        <p className="text-sm text-gray-700 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Massa risus eget justo vel urna sapien posuere. Mauris magna egestas vestibulum cum egestas etiam pulvinar dolor.
        </p>
        <div className="md:flex md:gap-3">
          
          <CustomButton 
          text='Book Now'
          />

          <Button
            type="default"
            className="flex-1 border-red-700 text-red-700 hover:bg-red-50"
            size="large"
          >
            Message
          </Button>
        </div>
      </div>
    </div>
      </div>
      
        <div className='md:w-[65%]'>

        <div className="ml-auto flex items-center justify-between">
          <div className="text-sm text-gray-500">Available Schedules</div>
          <div className="font-bold text-gray-800">Total Schedules: 10</div>
        </div>
      {/* Schedules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {schedules.map((schedule) => (
          <ScheduleCard 
            key={schedule.id}
            schedule={schedule}
          />
        ))}
      </div>
        </div>
      
      {/* Footer Section */}
    
    </div>
    </div>
  );
}

function ScheduleCard({ schedule }) {
  const borderClass = schedule.isFeatured 
    ? "border-2 border-dashed border-red-400" 
    : "border border-gray-200";
    
  const specialBadge = schedule.isSpecial && (
    <div className="absolute -top-2 right-6 bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
      Special
    </div>
  );

  return (
    <div 
      className={`relative bg-white rounded-lg p-4 ${borderClass} hover:shadow-md transition-shadow duration-200`}
    >
      {specialBadge}
      
      <div className="mb-4">
        <span className="inline-block text-sm font-medium">Schedule {schedule.id}</span>
        <span className="float-right text-red-500 font-bold">${schedule.price}</span>
        <span className="float-right text-xs text-gray-500 mt-1 mr-1">USD</span>
      </div>
      
      <div className="flex items-center text-sm text-gray-700 mb-2">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{schedule.date}</span>
      </div>
      
      <div className="flex justify-between mb-4">
        <div className="flex items-center text-sm text-gray-700">
          <Clock className="w-4 h-4 mr-2" />
          <span>{schedule.startTime}</span>
        </div>
        <div className="flex items-center text-sm text-gray-700">
          <Clock className="w-4 h-4 mr-2" />
          <span>{schedule.endTime}</span>
        </div>
      </div>
      
      <div className="text-xs text-gray-500 mb-4">
        This description is very important for a user. Appointments are 1 hour long or by your preference. You can reschedule the first program of the day. This description is very important for a user.
      </div>
      
      <button className="w-full bg-red-500 text-white py-2 rounded-md">
        Book Now
      </button>
    </div>
  );
}