// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import { Button } from 'antd';
import { CheckOutlined, PlayCircleOutlined } from '@ant-design/icons';

export default function FitnessApp() {
  const [activeSession, setActiveSession] = useState(1);
  
  // Mock data for user profile
  const userProfile = {
    name: "Sakib Ahmed",
    location: "New York, America",
    tags: ["Body trainer", "Protocol Name"],
    stats: {
      programs: 10,
      price: "$199",
      duration: "5 month"
    }
  };
  
  // Mock data for workout sessions
  const workoutSessions = [
    {
      id: 1,
      title: "Push-ups",
      duration: "30 min/day",
      status: "complete",
      session: 1,
      remainingDays: null,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
    },
    {
      id: 2,
      title: "Push-ups",
      duration: "30 min/day",
      status: "active",
      session: 2,
      remainingDays: 3,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
    },
    {
      id: 3,
      title: "Push-ups",
      duration: "30 min/day",
      status: "locked",
      session: 3,
      remainingDays: null,
      unlockAfter: 3,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
    },
    {
      id: 4,
      title: "Push-ups",
      duration: "30 min/day",
      status: "locked",
      session: 4,
      remainingDays: null,
      unlockAfter: 3,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
    },
    {
      id: 5,
      title: "Push-ups",
      duration: "30 min/day",
      status: "locked",
      session: 5,
      remainingDays: null,
      unlockAfter: 3,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
    },
    {
      id: 6,
      title: "Push-ups",
      duration: "30 min/day",
      status: "locked",
      session: 6,
      remainingDays: null,
      unlockAfter: 3,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
    }
  ];
  
  // Benefits for the active session
  const sessionBenefits = [
    "Strengthens the Chest",
    "Improves Upper Body Strength",
    "Increases Muscle Endurance",
    "Enhances Posture",
    "Boosts Metabolism"
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Fitness App</title>
        <meta name="description" content="Your personal fitness coach" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        {/* Ant Design CSS */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/5.1.7/reset.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/5.1.7/antd.min.css" />
      </Head>
      
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden sm:mr-4 flex-shrink-0">
              <img 
                src="https://randomuser.me/api/portraits/men/71.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 mt-4 sm:mt-0 text-center sm:text-left">
              <h1 className="text-xl md:text-2xl font-bold">{userProfile.name}</h1>
              <p className="text-gray-500 text-sm">{userProfile.location}</p>
              
              <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
                {userProfile.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <p className="text-gray-500 text-xs">Programs</p>
                <p className="font-bold">{userProfile.stats.programs}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-xs">Price</p>
                <p className="font-bold">{userProfile.stats.price}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-xs">Duration</p>
                <p className="font-bold">{userProfile.stats.duration}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sessions List */}
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h2 className="text-lg font-bold">Gain chest</h2>
                <div className="text-sm text-gray-500 mt-1 sm:mt-0">
                  <span>Total Sessions: 10</span>
                  <span className="ml-2">Complete Sessions: 1</span>
                </div>
              </div>
              
              {/* Session List */}
              <div className="space-y-3">
                {workoutSessions.map(session => (
                  <div 
                    key={session.id}
                    className={`bg-white border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md cursor-pointer ${activeSession === session.id ? 'border-blue-400' : 'border-gray-200'}`}
                    onClick={() => setActiveSession(session.id)}
                  >
                    <div className="flex items-center p-3">
                      <div className="w-14 h-14 mr-3 flex-shrink-0">
                        <img 
                          src={session.image} 
                          alt={session.title} 
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500">Session {session.session}</div>
                        <div className="font-semibold">{session.title}</div>
                        <div className="text-xs text-gray-500">{session.duration}</div>
                        {session.remainingDays && (
                          <div className="text-xs text-gray-500">Remain {session.remainingDays} days</div>
                        )}
                        {session.unlockAfter && (
                          <div className="text-xs text-gray-500">Unlock · After {session.unlockAfter} days</div>
                        )}
                      </div>
                      <div onClick={(e) => e.stopPropagation()}>
                        {session.status === 'complete' && (
                          <Button 
                            type="primary"
                            size="small"
                            className="rounded-full flex items-center h-6 bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600"
                            icon={<CheckOutlined className="text-xs" />}
                          >
                            <span className="text-xs ml-1">Complete</span>
                          </Button>
                        )}
                        {session.status === 'active' && (
                          <Button 
                            danger
                            size="small"
                            ghost
                            className="rounded-full flex items-center h-6"
                            icon={<PlayCircleOutlined className="text-xs" />}
                          >
                            <span className="text-xs ml-1">Play</span>
                          </Button>
                        )}
                        {session.status === 'locked' && (
                          <Button 
                            disabled
                            size="small"
                            className="rounded-full flex items-center h-6 bg-gray-100 text-gray-400"
                            icon={<PlayCircleOutlined className="text-xs" />}
                          >
                            <span className="text-xs ml-1">Play</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Session Details */}
          <div className="w-full md:w-1/3 mt-6 md:mt-0">
            {(() => {
              const session = workoutSessions.find(s => s.id === activeSession);
              if (!session) return null;
              
              return (
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-lg font-bold mb-4">Details Session {session.session}</h2>
                  
                  <div className="mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="Push-up demonstration" 
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-500">Session {session.session}</div>
                    <div className="text-lg font-semibold">{session.title}</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold">{session.duration}</div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Benefits</div>
                    <ul className="space-y-1">
                      {sessionBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckOutlined className="text-green-500 mr-2 text-sm" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Got 1 Tokens</div>
                    <Button 
                      type="default"
                      block
                      className="bg-green-50 hover:bg-green-100 text-green-600 border-green-100 hover:border-green-200 rounded-md h-10"
                      icon={<CheckOutlined />}
                    >
                      Complete
                    </Button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #f5f5f5;
        }
        
        /* Custom styles to manage Ant Design with Tailwind */
        .ant-btn-primary {
          background-color: #22c55e !important;
        }
        .ant-btn-primary:hover {
          background-color: #16a34a !important;
        }
        .ant-btn-primary:focus {
          background-color: #16a34a !important;
        }
        
        /* Responsive tweaks */
        @media (max-width: 640px) {
          .profile-section {
            flex-direction: column;
            align-items: center;
          }
          .profile-section .profile-info {
            text-align: center;
            margin-top: 1rem;
          }
        }
      `}</style>
    </div>
  );
}