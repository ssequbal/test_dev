import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton  from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa';
import { FloatingNav } from './ui/FloatingNav';
import Grid from './ui/Grid';
import WinnersSection from './ui/images';
import WinnersCarousel from './ui/images';
import WinnerSlider from './ui/images'; // Adjust the path as needed
import { winners } from '@/data'; 


const Hero = () => {
  return (
    <div className=" ">
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md-top-20 hscreen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-20 left-full h-[80vh] w-[50vw]' fill='white'/>
            <Spotlight className='top-30 left-80 h-[80vh] w-[50vw]' fill='blue'/>

            <Spotlight className='top-40 right-10 h-[70vh] w-[50vw]' fill='white' />
            <Spotlight className='top-80 right-30 h-[90vh] w-[70vw]' fill='purple' />
            <div className="z-0 h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">

            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>              

            </div>
            
            <div className='flex justify-center relative  z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-xenter text-blue-100 max-w-80'>
                         
                    </h2>
                    <br/>  
                      <TextGenerateEffect className='text-center text-6xl' words='Welcome to Venture Camp'></TextGenerateEffect>
                      <br></br>
                      <img src="/logo.png" width={200} alt="Venture Camp" className="fade-in" />
                      <br></br>
                    <p className='justify-center text-center'> </p>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLScIGgqEJYA-3HypgIse1bjzKy01dMOnzoICdR3dj7MzgOAWcA/viewform'>
                    <MagicButton title='Register Now' position='right' icon={<FaLocationArrow/>}></MagicButton>
                    </a>
                    <br></br>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Hero