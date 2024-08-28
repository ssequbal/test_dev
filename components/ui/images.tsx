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
    <div>
      <div className="relative w-full max-w-[800px] mx-auto">
        <h1 className='fade-in text-4xl py-10 text-center text-white z-10'>{winner.title}</h1>
        <div className="w-full h-auto rounded-lg shadow-lg"> {/* Added margin-top */}
          <ImageSlider
            images={slides}
            autoPlay={true}
            width="100%"
            height="500px"
            navSize={50}
            showNavs={true} // Show navigation arrows
            showBullets={true} // Show navigation bullets
            slideDuration={3}
          />
        </div>
      </div>
      <div className={`text-container flex flex-col justify-center items-center mt-5`}>
        <p className='text-center'>{winner.des}</p>
        {winner.link && (
        <a
          className='py-5 text-center'
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
  );
};

export default WinnerSlider;