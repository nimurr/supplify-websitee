
"use client"

// components/Banner.tsx 
import { X } from 'lucide-react'

import React from 'react';
import Header from '../customComponent/Header';

const IntroductionVideo = () => {
    return (
        <div>
          <Header size="medium" className=" text-center mt-5"> Introduction </Header>
            <div className="relative w-[60%] mt-12 mx-auto"> 
            
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
    );
};

export default IntroductionVideo;