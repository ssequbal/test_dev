'use client';
import React from 'react';
import ImageSlider from 'react-simple-image-slider';

// Define a type for the prop
type Winner = {
  id: number;
  title: string;
  des: string;
  img: string | string[];
  link?: string;
  className?: string;
  titleClassName?: string;
};

// Update the component to accept a winner prop
const WinnerSlider: React.FC<{ winner: Winner }> = ({ winner }) => {
  // Convert img to an array if it is not already
  const images = Array.isArray(winner.img) ? winner.img : [winner.img];
  
  // Create the slides array for the slider
  const slides = images.map((img, index) => ({ url: img }));

  return (
    <div className="relative w-full justify-center max-w-[800px] mx-auto">
      <h1 className='fade-in text-3xl mt-10 text-purple z-10'>{winner.title}</h1>
      
      <div className="flex flex-col md:flex-row sm:justify-center items-center md:items-start mt-4">
        <div className="slider-container rounded-md  md:w-1/2 md:pr-4 shadow-lg overflow-hidden">
          <ImageSlider
            images={slides}
            autoPlay={true}
            width="400px"
            height="400px"
            navSize={0}
            showNavs={true} // Show navigation arrows
            showBullets={false} // Show navigation bullets
            slideDuration={3}
            style={{
              overflow: 'hidden',
              borderRadius: '15px',
            }}
          />
        </div>
        
        <div className="text-container flex flex-col justify-center items-center md:items-start mt-5 md:mt-0 md:w-1/2 md:pl-4">
          <p className=' ml-10 text-1xl lg:text-left'>{winner.des}</p>
          {winner.link && (
            <a
              className='py-5 ml-10 text-center lg:text-left'
              href={winner.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white',
                textDecoration: 'underline',
                transition: 'color 0.3s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'blue')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WinnerSlider;