// "use client"

// // components/Banner.tsx
// import Link from 'next/link'

// export default function Banner() {
//   return (
//     <div className="relative h-screen flex items-center justify-start">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <div 
//           className="w-full h-full bg-[url('/images/bgimage.png')] bg-cover bg-center"
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,

//             zIndex: -1
//           }}
//         />
//         <div className="absolute inset-0 bg-black/50 z-10"></div>
//       </div>

//       {/* Content */}
//       <div className="z-20 w-[80%] mx-auto">
//         <h1 className="text-4xl text-left md:text-6xl font-bold text-white mb-6">
//           Transform Your Life <br /> Through Fitness
//         </h1>
//         <p className="text-xl md:text-2xl text-white mb-8  ">
//           Expert-guided workouts, Nutrition Plans, and wellness advice to help <br /> you achieve your goals
//         </p>
//         <div className="flex gap-4">
//           <Link
//             href="/consultation"
//             className="bg-primary hover:bg-primary-dark text-white font-bold  py-3 px-6 rounded-full transition"
//           >
//             Free Trial 
//           </Link>
//           <Link
//             href="/visit"
//             className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 border-2 border-white rounded-full transition"
//           >
//             Visit Steve
//           </Link>
//         </div>
//         <p className="text-white mt-8 text-sm md:text-base">
//           Try 7 days for free trial.
//         </p>
//       </div>
//     </div>
//   )
// }




"use client"

// components/Banner.tsx
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { message } from 'antd'
import toast, { Toaster } from 'react-hot-toast'
import { useTakeFreeTrialMutation } from '@/redux/fetures/subscription/subscription'

export default function Banner() {
  const [showModal, setShowModal] = useState(false)
  const [user, setUser] = useState(null)


  // Show modal when component mounts
  useEffect(() => {
    setShowModal(true)
    const user = localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

  const closeModal = () => {
    setShowModal(false)
  }

  const [freeTrial] = useTakeFreeTrialMutation();

  const handleFreeTrial = async () => {
    if (!user) {
      toast.error('Please login to continue')
      return
    }
    else {
      try {
        const res = await freeTrial().unwrap();
        console.log(res);

      } catch (error) {
        toast.error(error?.data?.message || "Failed to take free trial");
      }
    }
  }

  return (
    <>
      <Toaster  />
      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-[60%]  mx-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Video Container */}
            <div className="relative bg-black rounded-lg overflow-hidden">
              <video
                className="w-full h-full"
                controls
                autoPlay
                muted
                poster="/images/videof.mp4" // Add your video thumbnail
              >
                <source src="/images/videof.mp4" type="video/mp4" />
                {/* You can add multiple source formats */}
                <source src="/videos/intro-video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>

              {/* Alternative: YouTube/Vimeo Embed */}
              {/* 
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1"
                title="Fitness Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              */}
            </div>
          </div>
        </div>
      )}

      {/* Main Banner Content */}
      <div className="relative h-screen flex items-center justify-start">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-[url('/images/bgimage.png')] bg-cover bg-center"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1
            }}
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        {/* Content */}
        <div className="z-20 w-[80%] mx-auto">
          <h1 className="text-4xl text-left md:text-6xl font-bold text-white mb-6">
            Transform Your Life <br /> Through Fitness
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Expert-guided workouts, Nutrition Plans, and wellness advice to help <br /> you achieve your goals
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleFreeTrial}
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full transition"
            >
              Free Trial
            </button>
            <Link
              href="/visit"
              className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 border-2 border-white rounded-full transition"
            >
              Visit Steve
            </Link>
          </div>
          <p className="text-white mt-8 text-sm md:text-base">
            Try 7 days for free trial.
          </p>
        </div>
      </div>
    </>
  )
}