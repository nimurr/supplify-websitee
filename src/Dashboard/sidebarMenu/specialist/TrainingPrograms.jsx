"use client"
// pages/training-programs.tsx
import { Button, Card } from 'antd';
import { EditOutlined, ClockCircleOutlined, DollarOutlined, CalendarOutlined } from '@ant-design/icons';
import Image from 'next/image';
import CustomButton from '@/components/customComponent/CustomButton';
import { useRouter } from 'next/navigation';

const programs = Array(12).fill({
  title: 'Gain chest',
  sessions: '10 Session',
  price: '$50',
  duration: '5 month',
  image: '/images/sprogram.png', // Put your image inside public folder with this name
});

export default function TrainingPrograms() {
    const router = useRouter()
    
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gray-700 font-semibold text-base">Training Program : 12</h3>
        <Button type="primary" danger>
          Create New
        </Button>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-6 gap-4">
        {programs.map((program, idx) => (
          <Card
            key={idx}
            hoverable
            cover={
              <Image
                src={program.image}
                alt={program.title}
                width={280}
                height={180}
                className="rounded-t-md object-cover"
              />
            }
            className="rounded-md shadow-sm"
            bodyStyle={{ padding: '12px' }}
          >
            <h4 className="font-semibold text-gray-800 mb-2">{program.title}</h4>

            <div className="flex items-center text-gray-600 text-sm gap-3 mb-1">
              <ClockCircleOutlined />
              <span>{program.sessions}</span>
            </div>

            <div className="flex items-center text-gray-600 text-sm gap-3 mb-1">
              <DollarOutlined />
              <span>{program.price}</span>
            </div>

            <div className="flex items-center text-gray-600 text-sm gap-3 mb-3">
              <CalendarOutlined />
              <span>{program.duration}</span>
            </div>
         <div className='flex items-center justify-between gap-4'>
            <CustomButton 
            text='Edit'

            />

            <CustomButton 
            text='View'
            onClick={() => router.push('/specialistDs/program/view')}

            />

         </div>

          </Card>
        ))}
      </div>
    </div>
  );
}
