import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'

function Introduction() {
    return (
        <div className="relative flex flex-col items-center text-center p-8">
          <div className="w-full max-w-3xl mx-auto">
          <TextGenerateEffect className='text-4xl'  words='Empowering the Next Generation of Entrepreneurs'></TextGenerateEffect>
            <div className="relative w-full max-w-4xl mt-8">
            <div className="fade-in-image">
              <img 
                src="/main.png" 
                alt="Venture Camp"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <p className="text-lg mb-6 py-5">
              At Venture Camp, we believe that the spirit of entrepreneurship starts young. We're St. John's first summer camp dedicated to teaching kids the fundamentals of starting and running a business. Through hands-on activities, creative projects, and mentorship from experienced entrepreneurs, our campers discover the thrill of turning ideas into reality.
            </p>
            <p className="text-lg mb-6">
              Whether your child is a budding innovator or just curious about the world of business, Venture Camp offers a fun and supportive environment where they can explore their potential, learn valuable skills, and make lifelong friends.
            </p>
            <p className="text-lg">
              Join us for an unforgettable journey where imagination meets action, and the entrepreneurs of tomorrow are made today!
            </p>
          </div>
         
          </div>
        </div>
      );
}

export default Introduction