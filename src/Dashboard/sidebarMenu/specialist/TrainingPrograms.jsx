"use client"
// pages/training-programs.tsx
import { Button, Card } from 'antd';
import { EditOutlined, ClockCircleOutlined, DollarOutlined, CalendarOutlined } from '@ant-design/icons';
import Image from 'next/image';
import CustomButton from '@/components/customComponent/CustomButton';
import { useRouter } from 'next/navigation';
import { useGetAllTrainingProgramQuery } from '@/redux/fetures/Specialist/traningProgram';
import Link from 'next/link';

export default function TrainingPrograms() {

  const pageNumber = 1; // Example page number

  const { data, isLoading } = useGetAllTrainingProgramQuery(pageNumber);
  const programs = data?.data?.attributes?.results || [];
  console.log(programs);

  const router = useRouter()

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gray-700 font-semibold text-base">Training Program : {programs?.length}</h3>
        <Link className="bg-red-600 hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full transition" href="/specialistDs/program/create-training-program" type="primary" danger>
          Create New
        </Link>
      </div>
      {
        isLoading && (
          <p className='text-center text-xl text-blue-500'>Loading...</p>
        )
      }

      {/* Cards grid */}
      <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {programs?.map((program, idx) => (
          <Card
            key={idx}
            hoverable
            cover={
              <Image
                src={program?.attachments[0]?.attachment}
                alt={program.programName}
                width={280}
                height={180}
                className="rounded-t-md w-full object-cover"
              />
            }
            className="rounded-md shadow-sm"
            bodyStyle={{ padding: '12px' }}
          >
            <h4 className="font-semibold text-gray-800 mb-2">{program.programName}</h4>

            <div className="flex items-center text-gray-600 text-sm gap-3 mb-1">
              <ClockCircleOutlined />
              <span>{program.totalSessionCount}</span>
            </div>

            <div className="flex items-center text-gray-600 text-sm gap-3 mb-1">
              <DollarOutlined />
              <span>{program.price}$</span>
            </div>

            <div className="flex items-center text-gray-600 text-sm gap-3 mb-3">
              <CalendarOutlined />
              <span>{program.durationInMonths}</span>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <CustomButton
                text='Edit'

              />

              <CustomButton
                text='View'
                onClick={() => router.push(`/specialistDs/program/view?programId=${program._TrainingProgramId}&specialistId=${program.createdBy}`)}

              />

            </div>

          </Card>
        ))}
      </div>
    </div>
  );
}
