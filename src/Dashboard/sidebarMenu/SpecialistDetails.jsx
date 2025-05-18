// import { Check, Play } from 'lucide-react';

// export default function SpecialistDetails({id}) {

//     console.log(id)
//   // Sample data for sessions
//   const sessions = [
//     {
//       id: 1,
//       title: 'Push-ups',
//       duration: '30 min/day',
//       status: 'completed',
//       unlockDays: 0,
//     },
//     {
//       id: 2,
//       title: 'Push-ups',
//       duration: '30 min/day',
//       status: 'available',
//       unlockDays: 3,
//     },
//     {
//       id: 3,
//       title: 'Push-ups',
//       duration: '30 min/day',
//       status: 'locked',
//       unlockDays: 3,
//     },
//     {
//       id: 4,
//       title: 'Push-ups',
//       duration: '30 min/day',
//       status: 'locked',
//       unlockDays: 3,
//     },
//     {
//       id: 5,
//       title: 'Push-ups',
//       duration: '30 min/day',
//       status: 'locked',
//       unlockDays: 3,
//     },
//     {
//       id: 6,
//       title: 'Push-ups',
//       duration: '30 min/day',
//       status: 'locked',
//       unlockDays: 3,
//     },
//   ];

//   // Sample data for program details
//   const programDetails = {
//     name: 'Gain chest',
//     totalSessions: 10,
//     completedSessions: 1,
//     tokens: 1,
//     specialist: {
//       name: 'Sakib Ahmed',
//       designation: 'Body trainer',
//       startDate: 'Jan 10, 3.45pm',
//     },
//     price: '$189',
//     duration: '1 month',
//     programs: 10,
//     description: 'Lorem ipsum dolor sit amet, consectetur. Massa risus eget velit enim ultrices potenti amet. Proin adipiscing vestibulum cum quam eu dolor.',
//   };

//   // Benefits of the session
//   const benefits = [
//     'Strengthens the Chest',
//     'Improves Upper Body Strength',
//     'Increases Muscle Endurance',
//     'Enhances Posture',
//     'Boost Metabolism',
//   ];

//   return (
//     <div className="flex flex-col lg:flex-row bg-white min-h-screen">
//       {/* Left Panel */}
//       <div className="w-full flex justify-evenly p-6 border-r border-gray-200">


//     <div>

//     </div>
//         <div className=" mb-6">
//           {/* Specialist Profile */}
//           <div className="w-24 h-24 mr-4">
//             <img
//               src="/images/user4.jpg"
//               alt="Specialist Profile"
//               className="rounded-md object-cover w-full h-full"
//             />
//           </div>
          
//           {/* Specialist Info */}
//           <div>
//             <h2 className="text-lg font-semibold">{programDetails.name}</h2>
//             <div className="flex items-center mt-1">
//               <span className="text-sm text-gray-600">{programDetails.specialist.name}</span>
//             </div>
//             <div className="flex items-center mt-1">
//               <span className="text-xs text-gray-500">{programDetails.specialist.startDate}</span>
//             </div>
//           </div>
//         </div>
        
//         {/* Profile Details */}
//         <div className="grid grid-cols-2 gap-2 mb-6 text-sm">
//           <div className="flex flex-col">
//             <span className="text-gray-500">Protocol Name</span>
//             <span>Tokees</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-gray-500">Body trainer</span>
//             <span>Protocol Name</span>
//           </div>
//         </div>
        
//         {/* Description */}
//         <div className="mb-6">
//           <h3 className="text-sm font-medium mb-2">Description</h3>
//           <p className="text-xs text-gray-600">{programDetails.description}</p>
//         </div>
        
//         {/* Stats */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div className="flex flex-col">
//             <span className="text-xs text-gray-500">Programs</span>
//             <span className="font-medium">{programDetails.programs}</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-xs text-gray-500">Price</span>
//             <span className="font-medium">{programDetails.price}</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-xs text-gray-500">Duration</span>
//             <span className="font-medium">{programDetails.duration}</span>
//           </div>
//         </div>
        
//         {/* Sessions List Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="font-medium">Total Session : {programDetails.totalSessions}</h3>
//           <span className="text-sm">Complete Session : {programDetails.completedSessions}</span>
//         </div>
        
//         {/* Sessions List */}
//         <div className="space-y-4">
//           {sessions.map((session) => (
//             <div key={session.id} className="border border-gray-200 rounded-lg p-3 flex items-center">
//               <div className="w-16 h-16 mr-4">
//                 <img
//                   src="/api/placeholder/70/70"
//                   alt={`Session ${session.id}`}
//                   className="rounded-md object-cover"
//                 />
//               </div>
              
//               <div className="flex-grow">
//                 <div className="text-xs text-gray-500">Session {session.id}</div>
//                 <div className="font-medium">{session.title}</div>
//                 <div className="flex items-center mt-1">
//                   <span className="text-xs text-gray-500">{session.duration}</span>
//                   {session.unlockDays > 0 && (
//                     <span className="text-xs text-gray-500 ml-4">
//                       {session.status === 'available' ? 'Remain: ' : 'Unlock - After '}
//                       {session.unlockDays} days
//                     </span>
//                   )}
//                 </div>
//               </div>
              
//               <div>
//                 {session.status === 'completed' ? (
//                   <div className="bg-green-50 text-green-600 flex items-center justify-center rounded-md py-1 px-3">
//                     <Check className="w-4 h-4 mr-1" />
//                     <span className="text-xs">Complete</span>
//                   </div>
//                 ) : (
//                   <button 
//                     className={`flex items-center justify-center rounded-md py-1 px-4 ${
//                       session.status === 'available' 
//                         ? 'bg-red-500 text-white' 
//                         : 'bg-gray-200 text-gray-500'
//                     }`}
//                   >
//                     <Play className="w-4 h-4 mr-1" />
//                     <span className="text-xs">Play</span>
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="w-full lg:w-1/2 p-6">
//         <h2 className="font-medium mb-4">Details Session 1</h2>
        
        
//         {/* Session Image */}
//         <div className="mb-6">
//           <img
//             src="/api/placeholder/600/200"
//             alt="Session Details"
//             className="w-full h-40 object-cover rounded-lg"
//           />
//         </div>
        
//         {/* Session Title */}
//         <div className="mb-6">
//           <div className="text-sm text-gray-500">Session 1</div>
//           <h3 className="font-medium">Push-ups</h3>
//         </div>
        
//         {/* Session Duration */}
//         <div className="mb-6">
//           <div className="text-sm text-gray-500">Duration</div>
//           <div className="font-medium">30 minutes/day</div>
//         </div>
        
//         {/* Benefits */}
//         <div className="mb-6">
//           <div className="text-sm text-gray-500 mb-2">Benefits</div>
//           <ul className="space-y-2">
//             {benefits.map((benefit, index) => (
//               <li key={index} className="flex items-center">
//                 <Check className="w-4 h-4 text-green-500 mr-2" />
//                 <span className="text-sm">{benefit}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
        
//         {/* Tokens */}
//         <div className="mb-6">
//           <div className="text-sm font-medium">Got 1 Tokens</div>
//         </div>
        
//         {/* Complete Button */}
//         <button className="w-full bg-white border border-green-500 text-green-500 py-2 rounded-lg flex items-center justify-center">
//           <Check className="w-4 h-4 mr-2" />
//           <span>Complete</span>
//         </button>
//       </div>
//       </div>
      
//       {/* Right Panel */}
    

//     </div>
//   );
// }


import { Check, Play } from 'lucide-react';

export default function SpecialistDetails() {
  // This design exactly matches the screenshot with mobile responsiveness
  const sessions = [
    {
      id: 1,
      title: 'Push-ups',
      duration: '30 min/day',
      status: 'completed',
      unlockDays: 0,
    },
    {
      id: 2,
      title: 'Push-ups',
      duration: '30 min/day',
      status: 'available',
      unlockDays: 3,
    },
    {
      id: 3,
      title: 'Push-ups',
      duration: '30 min/day',
      status: 'locked',
      unlockDays: 3,
    },
    {
      id: 4,
      title: 'Push-ups',
      duration: '30 min/day',
      status: 'locked',
      unlockDays: 3,
    },
    {
      id: 5,
      title: 'Push-ups',
      duration: '30 min/day',
      status: 'locked',
      unlockDays: 3,
    },
    {
      id: 6,
      title: 'Push-ups',
      duration: '30 min/day',
      status: 'locked',
      unlockDays: 3,
    },
  ];

  // Sample data for program details
  const programDetails = {
    name: 'Gain chest',
    totalSessions: 10,
    completedSessions: 1,
    tokens: 1,
    specialist: {
      name: 'Sakib Ahmed',
      designation: 'Body trainer',
      startDate: 'Jan 10, 3.45pm',
    },
    price: '$189',
    duration: '1 month',
    programs: 10,
    description: 'Lorem ipsum dolor sit amet, consectetur. Massa risus eget velit enim ultrices potenti amet. Proin adipiscing vestibulum cum quam eu dolor.',
  };

  // Benefits of the session
  const benefits = [
    'Strengthens the Chest',
    'Improves Upper Body Strength',
    'Increases Muscle Endurance',
    'Enhances Posture',
    'Boost Metabolism',
  ];

  return (
    <div className="flex flex-col lg:flex-row bg-white min-h-screen">
      {/* Left Panel */}
      <div className="w-full lg:w-2/3 p-4 lg:p-6 border-r border-gray-100">
        <div className="flex mb-6">
          {/* Specialist Profile */}
          <div className="w-20 h-24 mr-4">
            <img
              src="/api/placeholder/80/96"
              alt="Specialist Profile"
              className="rounded-md object-cover w-full h-full bg-red-900"
            />
          </div>
          
          {/* Specialist Info */}
          <div>
            <h2 className="text-base font-semibold">{programDetails.name}</h2>
            <div className="flex items-center mt-1">
              <span className="text-sm text-gray-600">{programDetails.specialist.name}</span>
            </div>
            <div className="flex items-center mt-1">
              <span className="text-xs text-gray-500">{programDetails.specialist.startDate}</span>
            </div>
          </div>
        </div>
        
        {/* Profile Details */}
        <div className="grid grid-cols-2 gap-x-4 mb-6 text-sm">
          <div className="flex flex-col mb-2">
            <span className="text-xs text-gray-500">Protocol Name</span>
            <span className="text-sm">Tokees</span>
          </div>
          <div className="flex flex-col mb-2">
            <span className="text-xs text-gray-500">Body trainer</span>
            <span className="text-sm">Protocol Name</span>
          </div>
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <h3 className="text-xs text-gray-500 mb-1">Description</h3>
          <p className="text-xs text-gray-600">{programDetails.description}</p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Programs</span>
            <span className="text-sm">{programDetails.programs}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Price</span>
            <span className="text-sm">{programDetails.price}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Duration</span>
            <span className="text-sm">{programDetails.duration}</span>
          </div>
        </div>
        
        {/* Sessions List Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xs">Total Session : {programDetails.totalSessions}</h3>
          <span className="text-xs">Complete Session : {programDetails.completedSessions}</span>
        </div>
        
        {/* Sessions List */}
        <div className="space-y-3">
          {sessions.map((session) => (
            <div key={session.id} className={`border rounded-lg p-3 flex items-center 
              ${session.id === 1 ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
              <div className="w-12 h-12 mr-3">
                <img
                  src="/api/placeholder/48/48"
                  alt={`Session ${session.id}`}
                  className="rounded-md object-cover"
                />
              </div>
              
              <div className="flex-grow">
                <div className="text-xs text-gray-500">Session {session.id}</div>
                <div className="text-sm font-medium">{session.title}</div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-gray-500">{session.duration}</span>
                  {session.unlockDays > 0 && (
                    <span className="text-xs text-gray-500 ml-4">
                      {session.status === 'available' ? 'Remain: ' : 'Unlock - After '}
                      {session.unlockDays} days
                    </span>
                  )}
                </div>
              </div>
              
              <div>
                {session.status === 'completed' ? (
                  <div className="bg-green-50 text-green-600 border border-green-200 flex items-center justify-center rounded-md py-1 px-3">
                    <Check className="w-3 h-3 mr-1" />
                    <span className="text-xs">Complete</span>
                  </div>
                ) : (
                  <button 
                    className={`flex items-center justify-center rounded-md py-1 px-4 ${
                      session.status === 'available' 
                        ? 'bg-red-500 text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    <Play className="w-3 h-3 mr-1" />
                    <span className="text-xs">Play</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Panel */}
      <div className="w-full lg:w-1/3 p-4 lg:p-6">
        <h2 className="text-sm font-medium mb-4">Details Sessiontt 1</h2>
        
        {/* Session Image */}
        <div className="mb-6">
          <img
            src="/api/placeholder/400/200"
            alt="Session Details"
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>
        
        {/* Session Title */}
        <div className="mb-4">
          <div className="text-xs text-gray-500">Session 1</div>
          <h3 className="text-sm font-medium">Push-ups</h3>
        </div>
        
        {/* Session Duration */}
        <div className="mb-4">
          <div className="text-xs text-gray-500">Duration</div>
          <div className="text-sm">30 minutes/day</div>
        </div>
        
        {/* Benefits */}
        <div className="mb-6">
          <div className="text-xs text-gray-500 mb-2">Benefits</div>
          <ul className="space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <Check className="w-3 h-3 text-green-500 mr-2" />
                <span className="text-xs">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Tokens */}
        <div className="mb-4">
          <div className="text-xs font-medium">Got 1 Tokens</div>
        </div>
        
        {/* Complete Button */}
        <button className="w-full bg-white border border-green-200 text-green-500 py-2 rounded-lg flex items-center justify-center">
          <Check className="w-3 h-3 mr-2" />
          <span className="text-sm">Complete</span>
        </button>
      </div>
      
    </div>
  );
}