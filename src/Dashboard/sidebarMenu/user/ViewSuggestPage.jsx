"use client"

import { LeftOutlined } from '@ant-design/icons';
import { Table, Card } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const protocolsData = [
  { key: 1, protocolName: 'Meal plan', solution: 3 },
  { key: 2, protocolName: 'Workout', solution: 2 },
  { key: 3, protocolName: 'Supplement', solution: 1 },
  { key: 4, protocolName: 'Life style changes', solution: 0 },
];

const suggestionData = [
  { key: 1, keyPoint: 'Should have diet', solutionName: 'eat 3 cope rice', suggestFromStore: 'https://linkis' },
  { key: 2, keyPoint: 'Should have diet', solutionName: 'eat 3 cope rice', suggestFromStore: 'https://linkis' },
  { key: 3, keyPoint: 'Should have diet', solutionName: 'eat 3 cope rice', suggestFromStore: 'https://linkis' },
  { key: 4, keyPoint: 'Should have diet', solutionName: 'eat 3 cope rice', suggestFromStore: 'https://linkis' },
];

export default function ViewSuggestPage() {
  const [selectedProtocolKey, setSelectedProtocolKey] = useState(1);

  const mealPlanDescription = `Lorem ipsum dolor sit amet consectetur. Massa risus eget justo vel urna sapien posuere. Mauris magna egestas vestibulum cum lectus etiam pulvinar dolor. Massa curabitur quis felis ultricies varius orci facilisi auctor nunc. Aliquam lacus sit quisque pulvinar vitae accumsan pellentesque in. Congue ut luctus id proin in porttitor leo et. Libero proin euismod eget sed nulla ornare mattis. Ridiculus ac quam in lacus. Ultricies sapien risus quam diam posuere mauris. Malesuada diam neque in adipiscing condimentum eros neque. Eget aliquet sit scelerisque velit. Non felis congue gravida lobortis turpis pellentesque. Et consectetur sollicitudin blandit ridiculus sed. Nulla fermentum sed eu augue nibh eros ultrices. Vitae tempor bibendum nunc sed in commodo interdum mi aliquet. Mattis molestie rutulis nisl sed rutrum. Volutpat massa et diam volutpat. Faucibus elementum magna man odio eu orci velit. Facilisi`;

  const protocolsColumns = [
    {
      title: 'Sl No',
      dataIndex: 'key',
      key: 'key',
      width: 60,
    },
    {
      title: 'Protocol name',
      dataIndex: 'protocolName',
      key: 'protocolName',
    },
    {
      title: 'Solution',
      dataIndex: 'solution',
      key: 'solution',
      width: 80,
    },
  ];

  const suggestionColumns = [
    {
      title: 'SL No',
      dataIndex: 'key',
      key: 'key',
      width: 60,
    },
    {
      title: 'Key Point',
      dataIndex: 'keyPoint',
      key: 'keyPoint',
    },
    {
      title: 'Solution Name',
      dataIndex: 'solutionName',
      key: 'solutionName',
    },
    {
      title: 'Suggest From Store',
      dataIndex: 'suggestFromStore',
      key: 'suggestFromStore',
      render: (text) => <a href={text} target="_blank" rel="noreferrer">{text}</a>,
    },
  ];
const router = useRouter()
  return (
    <div>
     <h1  className='text-2xl font-semibold flex items-center gap-2 my-5'>
        <LeftOutlined onClick={() => router.back()} className=' cursor-pointer' />
        View Suggest Plan
        </h1>
    <div className="min-h-screen p-6 bg-gray-50 md:flex gap-6">
        <div className='md:w-[30%] w-full'>

      {/* Protocols Left Panel */}
      <Card className="" title="Protocols" bordered={false}>
        <Table
          columns={protocolsColumns}
          dataSource={protocolsData}
          pagination={false}
          rowClassName={(record) =>
            record.key === selectedProtocolKey
              ? 'bg-red-100 cursor-pointer'
              : 'cursor-pointer'
          }
          onRow={(record) => ({
            onClick: () => setSelectedProtocolKey(record.key),
          })}
          size="small"
        />
      </Card> 

        </div>

        <div className='md:w-[70%] w-full'>

      {/* Suggestion Right Top Panel */}
      <Card className="" title="Suggestion" bordered={false} bodyStyle={{ backgroundColor: '#fff1f0' }}>
        <Table
          columns={suggestionColumns}
          dataSource={suggestionData}
          pagination={false}
          size="small"
          rowKey="key"
        />
      </Card>

      {/* Meal Plan Right Bottom Panel */}
      <Card className="flex-1" title="Meal Plan" bordered={false} bodyStyle={{ overflowY: 'auto', maxHeight: 350 }}>
        <h3 className="text-lg font-semibold mb-2">Key Points</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Should have diet</li>
          <li>should note eat on the brkfast</li>
        </ul>
        <p className="text-sm leading-relaxed text-gray-700">{mealPlanDescription}</p>
      </Card>
        </div>
    </div>
    </div>
  );
}
