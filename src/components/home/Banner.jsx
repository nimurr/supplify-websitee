"use client"

// components/Banner.tsx
import Link from 'next/link'

export default function Banner() {
  return (
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
        <p className="text-xl md:text-2xl text-white mb-8  ">
          Expert-guided workouts, Nutrition Plans, and wellness advice to help <br /> you achieve your goals
        </p>
        <div className="flex gap-4">
          <Link
            href="/consultation"
            className="bg-primary hover:bg-primary-dark text-white font-bold  py-3 px-6 rounded-full transition"
          >
            Free Trial 
          </Link>
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
  )
}