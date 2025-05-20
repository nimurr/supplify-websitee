import { LeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
 

export default function BackHeader({ title }) {
  const router = useRouter();

  return (
    <h1 className="text-2xl font-semibold flex items-center gap-2 my-12">
      <LeftOutlined
        onClick={() => router.back()}
        className="cursor-pointer"
        style={{ fontSize: '1.5rem' }}
        aria-label="Go back"
      />
      {title}
    </h1>
  );
}
